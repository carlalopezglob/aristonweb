#!/usr/bin/env node
/**
 * estado.mjs — regenera ESTADO.md: una fila por página, con su spec, su wireframe y sus pendientes.
 *
 *   node bin/estado.mjs
 *
 * Lee las secciones de `proyecto.json`, recorre las specs de `docs/_pages/<sección>/` y comprueba
 * el wireframe correspondiente en `output/pages/<sección>/<slug>.html` (existencia + la versión de
 * su <meta name="ux-version">). Pensado para que una persona (o Claude, al arrancar sesión) sepa
 * cómo está cada página SIN abrir ninguna spec.
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

const config = JSON.parse(readFileSync(join(RAIZ, 'proyecto.json'), 'utf8'));
const SECCIONES = Array.isArray(config.secciones) && config.secciones.length
  ? config.secciones
  : ['_seccion-ejemplo'];

/** Valor de una fila `| **Clave** | valor |` de la tabla de propiedades. */
const prop = (md, clave) => {
  const m = md.match(new RegExp(`\\|\\s*\\*\\*${clave}\\*\\*\\s*\\|([^|]*)\\|`, 'i'));
  return m ? m[1].trim() : '';
};

/** Primer estado con emoji que aparezca en el valor, o «—». */
const estado = (valor) => {
  const m = valor.match(/(✅|🟡|🔴|⬜)\s*[A-Za-zÁÉÍÓÚáéíóúñ ]*/);
  return m ? m[0].trim() : (valor || '—');
};

const contarBloques = (md) => {
  const bloques = md.match(/^###\s+\d+\s*·/gm);
  return bloques ? bloques.length : 0;
};

/**
 * Pendientes reales: contenido marcado "Pendiente cliente" + filas de la tabla de Dependencias
 * cuyo estado es Pendiente. No cuenta menciones en prosa a la palabra PENDIENTE.
 */
const pendientes = (md) => {
  const contenido = (md.match(/Pendiente cliente/gi) || []).length;
  const deps = (md.split(/^##\s+Dependencias/m)[1] || '').split(/^##\s/m)[0];
  const filas = (deps.match(/^\|.*\|\s*Pendiente\s*\|\s*$/gim) || []).length;
  return contenido + filas;
};

const versionWireframe = (html) => {
  const m = html.match(/<meta\s+name=["']ux-version["']\s+content=["']([^"']+)["']/i);
  return m ? m[1] : '?';
};

const filas = [];
let sinWireframe = 0;

for (const seccion of SECCIONES) {
  const dirSpecs = join(RAIZ, 'docs', '_pages', seccion);
  if (!existsSync(dirSpecs)) {
    console.warn(`⚠  Sección declarada en proyecto.json sin carpeta de specs: docs/_pages/${seccion}/`);
    continue;
  }

  const specs = readdirSync(dirSpecs).filter((f) => f.endsWith('.md')).sort();

  for (const archivo of specs) {
    const md = readFileSync(join(dirSpecs, archivo), 'utf8');
    const slug = basename(archivo, '.md');

    const titulo = (md.match(/^#\s+(.+)$/m)?.[1] || slug).trim();
    const rutaWf = join('output', 'pages', seccion, `${slug}.html`);
    const hayWf = existsSync(join(RAIZ, rutaWf));
    if (!hayWf) sinWireframe++;

    const wf = hayWf
      ? `✅ [${versionWireframe(readFileSync(join(RAIZ, rutaWf), 'utf8'))}](${rutaWf})`
      : '⬜';

    const nPend = pendientes(md);

    filas.push([
      `[${titulo}](docs/_pages/${seccion}/${archivo})`,
      seccion,
      prop(md, 'Sprint') || '—',
      estado(prop(md, 'Estado')),
      `${contarBloques(md)}`,
      wf,
      nPend ? `⚠ ${nPend}` : '—',
      prop(md, 'Versión') || '—',
    ]);
  }
}

const hoy = new Date().toISOString().slice(0, 10);

const salida = `# ESTADO — ${config.nombre}

> ⚙️ **Archivo autogenerado — no editar a mano.** Regenerar con \`node bin/estado.mjs\`.
> Última regeneración: ${hoy} · ${filas.length} página(s) · ${sinWireframe} sin wireframe.

| Página | Sección | Sprint | Estado | Bloques | Wireframe | Pendientes | Versión |
| --- | --- | --- | --- | --- | --- | --- | --- |
${filas.length ? filas.map((f) => `| ${f.join(' | ')} |`).join('\n') : '| — | — | — | — | — | — | — | — |'}

**Leyenda:** ✅ Listo · 🟡 En progreso · 🔴 Pendiente · ⬜ No iniciado

**Columnas:**
- **Estado** — el que declara la tabla de propiedades de la spec
- **Bloques** — cuántos bloques tiene definidos la spec (\`### N ·\`)
- **Wireframe** — existe el HTML en \`output/pages/\`; la versión sale de su \`<meta name="ux-version">\`
- **Pendientes** — menciones de "Pendiente cliente" o \`PENDIENTE\` en la spec
`;

writeFileSync(join(RAIZ, 'ESTADO.md'), salida);
console.log(`✔ ESTADO.md regenerado — ${filas.length} página(s), ${sinWireframe} sin wireframe.`);

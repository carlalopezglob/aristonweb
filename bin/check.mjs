#!/usr/bin/env node
/**
 * check.mjs — valida que el repo es coherente antes de subir.
 *
 *   node bin/check.mjs
 *
 * Comprueba lo que se rompe en silencio y no se ve hasta que otra persona abre una sesión:
 * enlaces relativos muertos, módulos con spec pero sin HTML (o al revés), módulos que no están
 * en el índice de su categoría, códigos de módulo citados en una spec de página que no existen,
 * wireframes sin <meta name="ux-version"> o sin importar el sistema compartido.
 *
 * Sale con código 1 si hay ERRORES (los AVISOS no hacen fallar).
 */

import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, basename, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

const errores = [];
const avisos = [];
const error = (m) => errores.push(m);
const aviso = (m) => avisos.push(m);

/** Todos los archivos con una extensión dada, recursivo, ignorando .git y node_modules. */
function archivos(dir, ext, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const nombre of readdirSync(dir)) {
    if (nombre === '.git' || nombre === 'node_modules' || nombre.startsWith('.DS')) continue;
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) archivos(ruta, ext, acc);
    else if (nombre.endsWith(ext)) acc.push(ruta);
  }
  return acc;
}

const rel = (ruta) => relative(RAIZ, ruta);

/* ─── 1 · proyecto.json ─────────────────────────────────────────────────── */

let config = {};
try {
  config = JSON.parse(readFileSync(join(RAIZ, 'proyecto.json'), 'utf8'));
} catch (e) {
  error(`proyecto.json no se puede leer o no es JSON válido: ${e.message}`);
}

if (config.nombre?.startsWith('[')) {
  aviso('proyecto.json sigue con los valores de plantilla — rellena "nombre", "cliente" y "secciones".');
}

const SECCIONES = config.secciones || [];
for (const sec of SECCIONES) {
  if (!existsSync(join(RAIZ, 'docs', '_pages', sec))) {
    aviso(`Sección "${sec}" declarada en proyecto.json sin carpeta docs/_pages/${sec}/`);
  }
}

if (config.kit?.ruta) {
  const kitPath = resolve(RAIZ, config.kit.ruta);
  if (!existsSync(kitPath)) {
    aviso(`proyecto.json → kit.ruta ("${config.kit.ruta}") no existe: ${rel(kitPath)}. node bin/importar-kit.mjs fallará hasta corregirlo.`);
  } else if (!existsSync(join(kitPath, 'registry')) && !existsSync(join(kitPath, 'modules'))) {
    aviso(`proyecto.json → kit.ruta ("${config.kit.ruta}") existe pero no parece un kit: no tiene registry/ ni modules/.`);
  }
}

/* ─── 1b · Hook de git (bloqueo de push a main) ─────────────────────────── */

try {
  const hooksPath = execSync('git config core.hooksPath', { cwd: RAIZ, stdio: ['pipe', 'pipe', 'ignore'] })
    .toString()
    .trim();
  if (hooksPath !== '.githooks') {
    aviso(`git config core.hooksPath no apunta a .githooks (está "${hooksPath || 'sin configurar'}") — el push directo a main no está bloqueado en este clon. Arreglo: git config core.hooksPath .githooks`);
  }
} catch {
  aviso('git config core.hooksPath no está configurado — el push directo a main no está bloqueado en este clon. Arreglo: git config core.hooksPath .githooks');
}

/* ─── 2 · Catálogo de módulos ───────────────────────────────────────────── */

const DIR_REG = join(RAIZ, 'docs', '_registry');
const DIR_MOD = join(RAIZ, 'output', 'modules');

const categorias = existsSync(DIR_REG)
  ? readdirSync(DIR_REG).filter((f) => statSync(join(DIR_REG, f)).isDirectory())
  : [];

const codigosEnRegistro = new Set();

for (const cat of categorias) {
  const indice = join(DIR_REG, `${cat}.md`);
  if (!existsSync(indice)) {
    error(`La categoría ${cat}/ no tiene índice: falta docs/_registry/${cat}.md`);
    continue;
  }
  const md = readFileSync(indice, 'utf8');

  const specs = readdirSync(join(DIR_REG, cat)).filter((f) => f.endsWith('.md'));
  if (!specs.length) aviso(`La categoría ${cat} no tiene ninguna spec de módulo todavía.`);

  for (const spec of specs) {
    const codigo = spec.match(/^([A-Z]{3}-\d{3}(?:-[A-Z])?)/)?.[1];
    if (!codigo) {
      error(`Spec con nombre fuera de convención (<CAT>-NNN-nombre.md): docs/_registry/${cat}/${spec}`);
      continue;
    }
    codigosEnRegistro.add(codigo);

    if (!md.includes(codigo)) {
      error(`${codigo} tiene spec pero NO aparece en el índice docs/_registry/${cat}.md`);
    }

    const html = join(DIR_MOD, cat, spec.replace(/\.md$/, '.html'));
    if (!existsSync(html)) {
      error(`${codigo} tiene spec pero no tiene HTML: falta ${rel(html)}`);
    }
  }

  // Códigos de la primera columna de la tabla del índice que no tienen spec.
  // Solo la columna de código: el "cuándo usar" puede mencionar otros módulos legítimamente.
  const codigosIndice = [...md.matchAll(/^\|\s*([A-Z]{3}-\d{3}(?:-[A-Z])?)\s*\|/gm)].map((m) => m[1]);
  for (const codigo of new Set(codigosIndice)) {
    if (!specs.some((s) => s.startsWith(codigo))) {
      error(`El índice docs/_registry/${cat}.md cita ${codigo}, pero no existe su spec en ${cat}/`);
    }
  }
}

// HTML de módulo sin spec
for (const html of archivos(DIR_MOD, '.html')) {
  const cat = basename(dirname(html));
  const spec = join(DIR_REG, cat, `${basename(html, '.html')}.md`);
  if (!existsSync(spec)) {
    error(`Módulo con HTML pero sin spec: ${rel(html)} (falta ${rel(spec)})`);
  }
}

// _index.md de categorías
const indiceCats = join(DIR_REG, '_index.md');
if (!existsSync(indiceCats)) {
  aviso('Falta docs/_registry/_index.md (la tabla de categorías existentes).');
} else {
  const md = readFileSync(indiceCats, 'utf8');
  for (const cat of categorias) {
    if (!md.includes(cat)) aviso(`La categoría ${cat} no está en docs/_registry/_index.md`);
  }
}

/* ─── 3 · Specs de página: módulos citados que no existen ───────────────── */

for (const spec of archivos(join(RAIZ, 'docs', '_pages'), '.md')) {
  const md = readFileSync(spec, 'utf8');
  const bloques = md.split(/^##\s+Bloques/m)[1];
  if (!bloques) continue;

  for (const codigo of new Set(bloques.match(/\b[A-Z]{3}-\d{3}\b/g) || [])) {
    if (codigo.startsWith('CAT-') || codigo === 'NNN') continue;
    if (!codigosEnRegistro.has(codigo) && !/^(HU|DEC|PAT)-/.test(codigo)) {
      error(`${rel(spec)} usa el módulo ${codigo}, que no está en docs/_registry/`);
    }
  }
}

/* ─── 4 · Enlaces relativos muertos en los .md ──────────────────────────── */

for (const md of archivos(RAIZ, '.md')) {
  const texto = readFileSync(md, 'utf8');
  for (const [, destino] of texto.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(destino)) continue;
    const limpio = decodeURIComponent(destino.split('#')[0]);
    if (!limpio) continue;
    if (/[[\]<>]/.test(limpio)) continue; // marcador de plantilla, no un enlace real
    if (!existsSync(resolve(dirname(md), limpio))) {
      error(`Enlace roto en ${rel(md)} → ${destino}`);
    }
  }
}

/* ─── 5 · Wireframes: meta de versión y sistema compartido ──────────────── */

for (const html of archivos(join(RAIZ, 'output', 'pages'), '.html')) {
  const texto = readFileSync(html, 'utf8');
  if (!/<meta\s+name=["']ux-version["']/i.test(texto)) {
    error(`${rel(html)} no tiene <meta name="ux-version"> (bin/estado.mjs lo necesita)`);
  }
  if (!texto.includes('shared/styles.css')) {
    error(`${rel(html)} no importa shared/styles.css`);
  }
  if (!texto.includes('shared/wireframe.js')) {
    aviso(`${rel(html)} no importa shared/wireframe.js`);
  }
}

for (const html of archivos(DIR_MOD, '.html')) {
  const texto = readFileSync(html, 'utf8');
  if (!texto.includes('shared/styles.css')) {
    error(`${rel(html)} no importa shared/styles.css`);
  }
  if (/class="kit-(states|notes)"/.test(texto)) {
    aviso(`${rel(html)} trae un panel de catálogo del kit (kit-states/kit-notes) — no debería viajar a un proyecto. Reimporta con bin/importar-kit.mjs.`);
  }
}

/* ─── 6 · Nombres de archivo ────────────────────────────────────────────── */

for (const ext of ['.md', '.html']) {
  for (const ruta of [...archivos(join(RAIZ, 'docs'), ext), ...archivos(join(RAIZ, 'output'), ext)]) {
    if (/[ áéíóúñÁÉÍÓÚÑ()]/.test(basename(ruta))) {
      aviso(`Nombre con espacios o acentos (obliga a entrecomillar y ensucia las URL): ${rel(ruta)}`);
    }
  }
}

/* ─── Resultado ─────────────────────────────────────────────────────────── */

for (const a of avisos) console.log(`⚠  ${a}`);
for (const e of errores) console.log(`✖  ${e}`);

console.log('');
if (errores.length) {
  console.log(`✖ ${errores.length} error(es), ${avisos.length} aviso(s).`);
  process.exit(1);
}
console.log(`✔ Repo coherente${avisos.length ? ` (${avisos.length} aviso(s), no bloquean)` : ''}.`);

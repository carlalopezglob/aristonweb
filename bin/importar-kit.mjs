#!/usr/bin/env node
/**
 * importar-kit.mjs — trae módulos de un kit externo (wireframe-kit u otra librería) al proyecto.
 *
 *   node bin/importar-kit.mjs --listar                      ver qué ofrece el kit (no copia nada)
 *   node bin/importar-kit.mjs --modulos CON-001,CRD-002      importar módulos concretos
 *   node bin/importar-kit.mjs --categorias CON,CAB           importar categorías enteras
 *   node bin/importar-kit.mjs --todos                        importar el kit completo
 *
 *   --from <ruta>    ruta al kit (por defecto: kit.ruta de proyecto.json)
 *   --solo-specs     copiar solo las specs (docs/_registry/), sin el HTML
 *   --sin-shared     no copiar el shared/ del kit sobre output/shared/
 *   --forzar         reemplazar un módulo que ya exista en el proyecto con ese código
 *   --dry            enseñar qué haría, sin escribir nada
 *
 * Qué hace además de copiar:
 *  · normaliza nombres: quita el prefijo CAT-, pasa a kebab-case sin acentos ni espacios
 *  · quita el cromo del catálogo del HTML (paneles kit-states / kit-notes y su script)
 *  · regenera el índice de cada categoría tocada, y docs/_registry/_index.md
 *  · copia el shared/ del kit (sus módulos usan sus tokens: sin él se ven rotos)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname, basename, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

/* ─── Argumentos ────────────────────────────────────────────────────────── */

const argv = process.argv.slice(2);
const flag = (n) => argv.includes(`--${n}`);
const valor = (n) => {
  const i = argv.indexOf(`--${n}`);
  return i >= 0 ? argv[i + 1] : undefined;
};
const lista = (n) => (valor(n) || '').split(',').map((s) => s.trim()).filter(Boolean);

const config = JSON.parse(readFileSync(join(RAIZ, 'proyecto.json'), 'utf8'));
const KIT = resolve(RAIZ, valor('from') || config.kit?.ruta || '../wireframe-kit');

const DRY = flag('dry');
const soloSpecs = flag('solo-specs');
const pedidos = lista('modulos').map((c) => c.toUpperCase());
const cats = lista('categorias').map((c) => c.toUpperCase());

if (!existsSync(KIT)) {
  console.error(`✖ No encuentro el kit en: ${KIT}`);
  console.error('  Pásalo con --from <ruta> o apunta "kit.ruta" en proyecto.json.');
  process.exit(1);
}

const DIR_KIT_REG = join(KIT, 'registry');
const DIR_KIT_MOD = join(KIT, 'modules');
if (!existsSync(DIR_KIT_REG) && !existsSync(DIR_KIT_MOD)) {
  console.error(`✖ ${KIT} no parece un kit: no tiene registry/ ni modules/.`);
  process.exit(1);
}

/* ─── Utilidades de nombre ──────────────────────────────────────────────── */

const sinAcentos = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

/** "CAT-CON-001 Bloque texto + imagen" → { codigo: "CON-001", slug: "CON-001-bloque-texto-imagen" } */
function normalizar(nombreBase) {
  const sinCat = nombreBase.replace(/\bCAT-([A-Z]{3})/g, '$1');
  const codigo = sinCat.match(/^([A-Z]{3}-\d{3}(?:-[A-Z])?)/)?.[1];
  if (!codigo) return null;
  const resto = sinAcentos(sinCat.slice(codigo.length))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return { codigo, cat: codigo.slice(0, 3), slug: resto ? `${codigo}-${resto}` : codigo };
}

const ficheros = (dir, ext) =>
  existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(ext)) : [];

const subdirs = (dir) =>
  existsSync(dir) ? readdirSync(dir).filter((f) => statSync(join(dir, f)).isDirectory()) : [];

/* ─── Inventario del kit ────────────────────────────────────────────────── */

const inventario = new Map(); // codigo → { codigo, cat, slug, nombre, spec, html }

for (const dirCat of subdirs(DIR_KIT_REG)) {
  for (const f of ficheros(join(DIR_KIT_REG, dirCat), '.md')) {
    const n = normalizar(basename(f, '.md'));
    if (!n) continue;
    const md = readFileSync(join(DIR_KIT_REG, dirCat, f), 'utf8');
    inventario.set(n.codigo, {
      ...n,
      nombre: (md.match(/^#\s*[A-Z-]*[\d-]*\s*\|\s*(.+)$/m)?.[1] || n.slug).trim(),
      cuando: (md.match(/\|\s*\*\*Cuándo usar\*\*\s*\|([^|]*)\|/)?.[1] || '').trim(),
      spec: join(DIR_KIT_REG, dirCat, f),
      html: null,
    });
  }
}

for (const dirCat of subdirs(DIR_KIT_MOD)) {
  for (const f of ficheros(join(DIR_KIT_MOD, dirCat), '.html')) {
    const n = normalizar(basename(f, '.html'));
    if (!n) continue;
    const ya = inventario.get(n.codigo);
    if (ya?.html) {
      console.log(`⚠  El kit tiene dos HTML con el código ${n.codigo}: "${basename(ya.html)}" y "${f}". Me quedo con el primero.`);
      continue;
    }
    if (ya) ya.html = join(DIR_KIT_MOD, dirCat, f);
    else inventario.set(n.codigo, { ...n, nombre: n.slug, cuando: '', spec: null, html: join(DIR_KIT_MOD, dirCat, f) });
  }
}

/* ─── --listar ──────────────────────────────────────────────────────────── */

if (flag('listar') || (!pedidos.length && !cats.length && !flag('todos'))) {
  const porCat = {};
  for (const m of inventario.values()) (porCat[m.cat] ||= []).push(m);

  console.log(`\nKit: ${KIT}\n`);
  for (const cat of Object.keys(porCat).sort()) {
    console.log(`  ${cat} — ${porCat[cat].length} módulo(s)`);
    for (const m of porCat[cat].sort((a, b) => a.codigo.localeCompare(b.codigo))) {
      const falta = !m.spec ? ' ⚠ sin spec' : !m.html ? ' ⚠ sin HTML' : '';
      console.log(`    ${m.codigo}  ${m.nombre}${falta}`);
    }
    console.log('');
  }
  if (!flag('listar')) {
    console.log('Nada importado. Elige qué traer:');
    console.log('  node bin/importar-kit.mjs --modulos CON-001,CRD-002');
    console.log('  node bin/importar-kit.mjs --categorias CON');
    console.log('  node bin/importar-kit.mjs --todos\n');
  }
  process.exit(0);
}

/* ─── Selección ─────────────────────────────────────────────────────────── */

const seleccion = [...inventario.values()].filter((m) =>
  flag('todos') || pedidos.includes(m.codigo) || cats.includes(m.cat));

const noEncontrados = pedidos.filter((c) => !inventario.has(c));
for (const c of noEncontrados) console.log(`⚠  ${c} no está en el kit — lo ignoro.`);

if (!seleccion.length) {
  console.error('✖ Nada que importar con esos filtros. Prueba --listar.');
  process.exit(1);
}

/* ─── Limpieza del HTML del kit ─────────────────────────────────────────── */

/** Quita del HTML el cromo del catálogo: paneles kit-states / kit-notes y su script. */
function limpiarHtml(html, mapaNombres, origen) {
  let out = html;

  // Banner de comentario + panel de estados, y panel de notas (2 <details>, sin anidar)
  out = out.replace(/<!--\s*═+[\s\S]*?═+\s*-->\s*/g, '');
  out = out.replace(/<details class="kit-(?:states|notes)"[\s\S]*?<\/details>\s*/g, '');
  out = out.replace(/<script[^>]*kit-notes\.js[^>]*><\/script>\s*/g, '');

  // Nombres de fichero del kit → nombres normalizados del proyecto
  for (const [viejo, nuevo] of mapaNombres) out = out.split(viejo).join(nuevo);
  out = out.replace(/\bCAT-([A-Z]{3})/g, '$1');

  // Menciones al panel del kit en las UX_NOTES: ya no existe aquí
  out = out.replace(/kit-states/g, 'las variantes de la spec');

  // Trazabilidad: de dónde vino
  out = out.replace(/<\/head>/i,
    `<!-- Importado del kit: ${origen} · bin/importar-kit.mjs -->\n</head>`);

  return out.replace(/\n{3,}/g, '\n\n');
}

function limpiarSpec(md, mapaNombres, m) {
  let out = md;
  for (const [viejo, nuevo] of mapaNombres) out = out.split(viejo).join(nuevo);
  out = out.replace(/\bCAT-([A-Z]{3})/g, '$1');
  out = out.replace(/^\*\*Visualización HTML:\*\*.*$/m,
    `**Visualización HTML:** \`output/modules/${m.cat}/${m.slug}.html\``);
  return out;
}

/* ─── Importación ───────────────────────────────────────────────────────── */

const mapaNombres = new Map();
for (const m of seleccion) {
  if (m.spec) mapaNombres.set(basename(m.spec, '.md'), m.slug);
  if (m.html) mapaNombres.set(basename(m.html, '.html'), m.slug);
}

const escribir = (ruta, contenido) => {
  if (DRY) return console.log(`   [dry] escribiría ${ruta.replace(RAIZ + '/', '')}`);
  mkdirSync(dirname(ruta), { recursive: true });
  writeFileSync(ruta, contenido);
};

const catsTocadas = new Set();
let nSpecs = 0, nHtml = 0;

/** ¿Ya hay en el proyecto un módulo con ese código y otro nombre de archivo? */
function choca(m) {
  const dir = join(RAIZ, 'docs', '_registry', m.cat);
  const ya = ficheros(dir, '.md').filter((f) => f.startsWith(m.codigo) && f !== `${m.slug}.md`);
  return ya[0];
}

for (const m of seleccion.sort((a, b) => a.codigo.localeCompare(b.codigo))) {
  const conflicto = choca(m);
  if (conflicto && !flag('forzar')) {
    console.log(`⚠  ${m.codigo} ya existe en el proyecto como "${conflicto}" — lo salto.`);
    console.log(`   Si el módulo del kit debe ir con otro número, renumera; si quiere reemplazarlo, --forzar.`);
    continue;
  }

  catsTocadas.add(m.cat);
  console.log(`→ ${m.codigo}  ${m.nombre}`);

  if (m.spec) {
    escribir(join(RAIZ, 'docs', '_registry', m.cat, `${m.slug}.md`),
      limpiarSpec(readFileSync(m.spec, 'utf8'), mapaNombres, m));
    nSpecs++;
  } else {
    console.log('   ⚠ sin spec en el kit — habrá que escribirla (check.mjs lo marcará)');
  }

  if (!soloSpecs && m.html) {
    escribir(join(RAIZ, 'output', 'modules', m.cat, `${m.slug}.html`),
      limpiarHtml(readFileSync(m.html, 'utf8'), mapaNombres, basename(m.html)));
    nHtml++;
  } else if (!soloSpecs) {
    console.log('   ⚠ sin HTML en el kit — habrá que construirlo');
  }
}

/* ─── shared/ del kit ───────────────────────────────────────────────────── */

if (!soloSpecs && !flag('sin-shared')) {
  const origen = join(KIT, 'shared', 'styles.css');
  if (existsSync(origen)) {
    // Solo la base: se corta antes de las herramientas de catálogo del kit
    // (paneles kit-states / kit-notes), que aquí ya no existen.
    const css = readFileSync(origen, 'utf8')
      .split(/\/\* =+\s*\n\s*HERRAMIENTAS DEL KIT/)[0]
      .split(/\/\* --- Panel de estados interactivo/)[0]
      .replace(/   Desde pages\/<sección>\/: \.\.\/\.\.\/shared\/styles\.css\n   Desde modules\/<cat>\/: \.\.\/\.\.\/shared\/styles\.css/,
        '   Desde output/pages/<sección>/ y output/modules/<CAT>/: ../../shared/styles.css\n'
        + '   Mismos tokens que el wireframe-kit: los módulos importados encajan sin retoques.')
      .replace('/* --- Variables (rellenar con valores del proyecto en Layout global.md) --- */',
        '/* --- Variables (rellenar con los valores del proyecto en _context/layout-global.md) --- */')
      .trimEnd();
    escribir(join(RAIZ, 'output', 'shared', 'styles.css'), css + '\n');
    console.log('→ output/shared/styles.css actualizado con la base del kit (sus tokens)');
    console.log('   ℹ Los módulos del kit usan --space-* / --control-height-*: sin esa base se ven rotos.');
  }
  // wireframe.js NO se copia: el del kit inyecta cromo de catálogo (badge de ID,
  // botón MAX, switchers de variante) que no debe salir en un wireframe de cliente.
  // La base compartida (acordeón, tabs, carrusel, texto expandible, modal de vídeo)
  // ya está en output/shared/wireframe.js.
  console.log('   ℹ No toco output/shared/wireframe.js: el del kit trae herramientas de catálogo.');
}

/* ─── Índices ───────────────────────────────────────────────────────────── */

function regenerarIndice(cat) {
  const dir = join(RAIZ, 'docs', '_registry', cat);
  const specs = ficheros(dir, '.md').sort();
  const filas = specs.map((f) => {
    const md = readFileSync(join(dir, f), 'utf8');
    const codigo = f.match(/^([A-Z]{3}-\d{3}(?:-[A-Z])?)/)?.[1] || f;
    const nombre = (md.match(/^#\s*[^|]*\|\s*(.+)$/m)?.[1] || codigo).trim();
    const cuando = (md.match(/\|\s*\*\*Cuándo usar\*\*\s*\|([^|]*)\|/)?.[1] || '—').trim();
    return `| ${codigo} | [${nombre}](${cat}/${f}) | ${cuando} |`;
  });

  escribir(join(RAIZ, 'docs', '_registry', `${cat}.md`), `# ${cat} — índice de módulos

> Usa este índice para **elegir** módulo. Lee la spec completa **solo del candidato**, nunca todas.
> Regenerado por \`bin/importar-kit.mjs\`; al crear un módulo a mano, añade tú la fila.

| Código | Módulo | Cuándo usar |
| --- | --- | --- |
${filas.join('\n')}

> 💡 Si dudas entre dos, lee solo esas dos specs. Si ninguno encaja, crea uno nuevo
> (ver \`CLAUDE.md\` → "Crear un módulo, paso a paso").
`);
}

function regenerarIndiceCategorias() {
  const dirReg = join(RAIZ, 'docs', '_registry');
  const filas = subdirs(dirReg).sort().map((cat) => {
    const n = ficheros(join(dirReg, cat), '.md').length;
    return `| ${cat} | [${cat}.md](${cat}.md) | ${n} |`;
  });

  escribir(join(dirReg, '_index.md'), `# Catálogo de módulos — categorías

> Tabla de categorías existentes. En Fase 2, para elegir módulo, abre el **índice** de la categoría
> que toque — no las specs. Regenerada por \`bin/importar-kit.mjs\`.

| Categoría | Índice | N.º módulos |
| --- | --- | --- |
${filas.join('\n')}

**Categorías habituales:** CAB (cabeceras) · CON (contenido) · CRD (cards) · NAV (navegación) ·
FRM (formularios) · MDL (modales / overlays) · COM (componentes sueltos).

Para crear una categoría nueva: código de 3 letras que no exista, carpeta \`<CAT>/\`, índice
\`<CAT>.md\` y una fila aquí.
`);
}

for (const cat of catsTocadas) regenerarIndice(cat);
regenerarIndiceCategorias();

console.log(`\n✔ ${nSpecs} spec(s) y ${nHtml} HTML importados${DRY ? ' (dry-run: nada escrito)' : ''}.`);
if (!DRY) console.log('  Siguiente: node bin/check.mjs  ·  npx serve output');

# 04 — Usar un kit de módulos

> Guía para personas. Cómo aprovechar una librería de módulos ya construida en vez de empezar el
> catálogo del proyecto desde cero.

---

## Por qué no está dentro del repo

Un kit de módulos son decenas de HTML documentados. Si vivieran dentro de este repo, cada sesión de
Claude arrastraría su peso — y el sistema entero existe para lo contrario. Así que el kit **se
referencia**: se apunta su ruta en `proyecto.json` y se traen solo los módulos que el proyecto
vaya a usar de verdad.

```json
"kit": {
  "ruta": "../wireframe-kit",
  "url": ""
}
```

Con eso basta para trabajar. Si el equipo decide adoptar módulos concretos, se importan (más abajo).

---

## Consultar el kit sin importar nada

```bash
node bin/importar-kit.mjs --listar
```

Saca el inventario por categoría: código, nombre y si le falta la spec o el HTML. Es la forma barata
de responder en Fase 2 a *"¿hay ya un módulo para este bloque?"* sin abrir un solo archivo.

En una sesión, Claude puede leer los **índices** del kit (`<kit>/registry/*.md`) para elegir
candidato, y **un solo** archivo de `<kit>/modules/` cuando necesite copiar un patrón. Lo que no
debe hacer nunca es recorrer la librería entera: eso es exactamente el gasto que el sistema evita.

---

## Importar módulos al proyecto

```bash
node bin/importar-kit.mjs --modulos CON-001,CRD-002     # los que vas a usar
node bin/importar-kit.mjs --categorias CON,CAB          # categorías enteras
node bin/importar-kit.mjs --todos                       # el kit completo
node bin/importar-kit.mjs --modulos CON-001 --dry        # ver qué haría, sin escribir
```

Lo normal es lo primero: **importa los que vas a usar**, no los 47. Puedes volver a ejecutarlo más
adelante para traer otro; es idempotente.

Qué hace, además de copiar:

- **Normaliza los nombres.** El kit los llama `CAT-CON-001 Bloque texto + imagen`; en el proyecto quedan como
  `CON-001-bloque-texto-imagen` (sin el prefijo `CAT-` redundante, sin espacios ni acentos). Reescribe
  también las referencias dentro de los archivos.
- **Quita el cromo de catálogo.** Los módulos del kit son *playgrounds*: traen un panel
  `kit-states` con checkboxes para probar cada variante y un panel `kit-notes` que carga la spec.
  Eso no viaja a un wireframe de cliente. El módulo importado queda en su **estado por defecto**:
  los elementos opcionales siguen en el HTML con `hidden`, quítaselo para activarlos.
- **Actualiza `output/shared/styles.css`** con la base de tokens del kit. Es obligatorio: sus
  módulos usan `--space-*` y `--control-height-*`, y sin esa base se ven rotos. No toca
  `wireframe.js`, porque el del kit incluye herramientas de catálogo (badge con el ID del módulo,
  botón MAX) que inyectan cosas visibles en pantalla.
- **Regenera los índices** de las categorías tocadas y `docs/_registry/_index.md`, leyendo el
  "Cuándo usar" de cada spec.

Si un código ya existe en el proyecto con otro nombre, avisa y lo salta (`--forzar` para
reemplazarlo). Si en el kit falta la spec o el HTML de un módulo, lo dice: quedará marcado por
`node bin/check.mjs` hasta que se complete.

Al terminar, siempre:

```bash
node bin/check.mjs
npx serve output
```

---

## Usar otro kit cualquiera

El importador espera la estructura `registry/<CAT>/*.md` + `modules/<CAT>/*.html`. Si la librería
que quieres usar tiene otra forma, no pasa nada: el proyecto solo necesita, por cada módulo,

1. una spec en `docs/_registry/<CAT>/<CAT>-NNN-nombre.md`, y
2. su HTML standalone en `output/modules/<CAT>/<mismo-nombre>.html`,

más su fila en el índice de la categoría. Cómo llegue ahí es indiferente: importado, copiado a mano
o construido de cero. `node bin/check.mjs` valida que la pareja spec + HTML esté completa.

---

## Cuándo un módulo del kit **no** vale

El kit es agnóstico a propósito. Si un bloque del proyecto necesita algo que depende del cliente
—una lógica de filtros concreta, un dato que solo tiene este cliente—, el módulo del kit no encaja
y toca crear uno propio del proyecto. La regla es la de siempre: **el patrón puede venir del kit, el
contenido nunca**.

Y en la otra dirección: si construyes un módulo para este proyecto que pasaría el test de
agnosticismo (¿serviría en cinco clientes distintos?), dilo — es candidato a subir al kit y
ahorrárselo al siguiente proyecto.

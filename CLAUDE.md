# Proyecto UX — wireframes y specs

Repo de un proyecto de cliente del equipo UX: **specs de página + catálogo de módulos + wireframes
HTML**. El trabajo se organiza en tres fases (Research → Diseño → Construcción) y el principio de
todo el sistema es **cargar solo el contexto que la tarea de esta sesión necesita**.

Si esto es un clon recién hecho y `proyecto.json` todavía tiene `"[Nombre del proyecto]"`, es una
persona nueva: saluda, pregúntale nombre del proyecto y secciones del site, rellena `proyecto.json`
y guíala por el `README.md`. No empieces a diseñar páginas hasta que eso esté hecho.

## Arranque de sesión

1. `git fetch origin` — varias personas trabajan en paralelo y el checkout local se queda viejo.
2. Leer **`ESTADO.md`** (autogenerado, una fila por página) y **parar ahí**. No abrir specs enteras
   hasta saber qué página y qué fase toca.
3. Si el usuario no lo ha dicho, **preguntar fase y página**: *"¿Fase 2 de qué página?"*.

## Las tres fases — qué lee Claude en cada una

| Fase | Input que se carga | Output |
| --- | --- | --- |
| **1 · Research** | Nada del repo. Lo que el usuario pegue en el chat. | `research/hallazgos.md` |
| **2 · Diseño** | `ESTADO.md` + briefing del usuario + **índices** de categoría (`docs/_registry/*.md`). Specs completas de módulo **solo de los candidatos**. | Spec en `docs/_pages/<sección>/` + bloque de handoff |
| **3 · Construcción** | El bloque de handoff + specs de los módulos que nombra (parando en `## Notas para UI`) | Wireframe en `output/pages/<sección>/` |

**Nunca cargar en Fase 3:** `research/`, `_guias/`, la spec de página completa (solo su sección
`## Bloques`, y solo si el handoff remite a ella), ni páginas de otras secciones "para ver el
estilo". El sistema compartido está en `output/shared/` — no hace falta leer una página entera de
600 líneas para saber cómo se ve.

## Estructura

- `docs/_pages/<sección>/` — specs de página. Esqueleto: tabla de propiedades · Descripción y
  objetivo · ¿Quién llega? · SEO · Arquetipos · HU · Dependencias · Notas globales · Bloques ·
  Decisiones · Historial. Plantilla: `_guias/plantilla-pagina.md`.
- `docs/_registry/` — catálogo de módulos. Por categoría: índice `CON.md` + carpeta `CON/` con la
  spec de cada módulo. `docs/_registry/_index.md` lista las categorías existentes.
- `output/` — **única fuente** de wireframes: `pages/`, `modules/`, `shared/`.
- `_context/` — arquetipos, layout global, patrones de interacción (PAT-*), mapa de sitio,
  changelog global. **No se carga por defecto**: solo si hay una duda concreta.
- `_guias/` — documentación **para personas**. Claude no las lee: lo que necesita está aquí.
- `bin/` — `estado.mjs` (regenera `ESTADO.md`), `check.mjs` (valida coherencia del repo),
  `importar-kit.mjs` (trae módulos de un kit externo).

## Catálogo de módulos

**Código:** `<CAT>-NNN` — tres letras de categoría + número secuencial dentro de ella (`CON-001`).
Variantes con letra: `CON-001-A`. No reutilizar números. Categorías habituales: CAB (cabeceras),
CON (contenido), CRD (cards), NAV (navegación), FRM (formularios), MDL (modales), COM (componentes
sueltos).

**Nomenclatura — siempre agnóstica.** El nombre describe el patrón estructural, nunca el contenido:
✅ `Bloque texto + imagen`, `Grid de cards`, `Acordeón expandible` · ❌ `Bloque familias`,
`Cards de colegios`, `FAQ de admisiones`. Test: ¿serviría en cinco páginas con contenido distinto?

**Variante o módulo nuevo:** cambia el contenido o un elemento opcional (con/sin imagen, con/sin
CTA) → variante. Cambia el layout o la jerarquía → módulo nuevo.

**Crear un módulo, paso a paso:**
1. Comprobar que no existe ya algo similar (leer el índice de la categoría, no las specs)
2. Comprobar si el kit externo ya lo tiene (ver más abajo) antes de construirlo de cero
3. Asignar el siguiente número libre de la categoría
4. Escribir la spec en `docs/_registry/<CAT>/<CAT>-NNN-nombre-en-kebab.md` (plantilla:
   `_guias/plantilla-modulo.md`) — Anatomía, Variantes, Comportamiento responsive, Notas para UI
5. Construir el HTML standalone en `output/modules/<CAT>/<mismo-nombre>.html`
6. Verificar en los 3 breakpoints (ver "Verificación" abajo)
7. Añadir la fila al índice `docs/_registry/<CAT>.md` con su "cuándo usar"
8. Si la categoría es nueva: crear su índice y añadir fila en `docs/_registry/_index.md`

Un módulo con spec pero sin HTML, o sin fila en el índice, **no está terminado**.

**Modificar un módulo ya usado en páginas:** avisar de que puede romper páginas construidas y
preguntar si va como versión nueva del mismo módulo (entrada en `## Historial`) o como variante que
convive con la anterior. No sobrescribir sin marcarlo.

## Kit de módulos externo — referenciado, no embebido

Existe un `wireframe-kit` con ~47 módulos HTML ya construidos. **No vive dentro de este repo**: se
referencia, para no pagar su peso en cada sesión. Su ruta está en `proyecto.json` → `kit.ruta`.

- **En Fase 2**, para saber si el kit ya cubre un bloque: leer solo los **índices** del kit
  (`<kit>/registry/*.md`). Nunca listar ni abrir sus módulos en bloque.
- **En Fase 3**, para copiar un patrón: leer **un solo** archivo de `<kit>/modules/<CAT>/`. Sus
  módulos son playgrounds — traen un panel `<details class="kit-states">` con checkboxes de variante
  y su script de wiring al final: **eso es cromo del catálogo y no se copia** a una página.
- **Si el equipo decide adoptar módulos del kit en el proyecto**, no copiar a mano:
  `node bin/importar-kit.mjs --modulos CON-001,CRD-002`. Normaliza nombres, quita los paneles del
  catálogo y trae spec + HTML + `shared/`. Detalle en `_guias/04-kit-de-modulos.md`.

Cualquier otra librería sirve igual: lo que el proyecto necesita es un módulo con spec en
`docs/_registry/` y HTML en `output/modules/`, venga de donde venga.

## Wireframes — reglas técnicas

- Importar siempre `output/shared/styles.css` y `output/shared/wireframe.js` (con `defer`). Desde
  `pages/<sección>/` y desde `modules/<CAT>/`: `../../shared/`.
- Usar las clases y **tokens** de `shared/styles.css` (`--space-*` escala de 8px, `--radius-sm|md|lg`,
  `--control-height-md` como altura mínima de botones e inputs). Nunca valores sueltos tipo
  `margin: 1.3rem`. Si falta un valor en la escala, avisar — no inventar uno de un solo uso.
- CSS propio de página: solo adaptaciones puntuales del módulo. Módulos standalone: self-contained.
- No duplicar funciones de `wireframe.js` (acordeón, tabs, carrusel, texto expandible, sticky nav,
  `openVideoModal()` / `#video-modal`).
- Mobile-first · 3 breakpoints: **<768** · **768-1199** · **≥1200**. Escala de grises, placeholders
  grises (nunca emojis), sin anotaciones visibles.
- Cada página lleva `<meta name="ux-version" content="v1.0">` — de ahí lee `bin/estado.mjs`.

## Verificación

`npx serve output` y comprobar **por DOM/JS, nunca con capturas de pantalla**: en sesiones largas
el visor devuelve imágenes grises y una captura gasta tokens de imagen sin aportar nada fiable. Usar
`querySelectorAll(...).length`, `getComputedStyle(...)` y similares en los 3 breakpoints. Verificar
también las interacciones si el módulo las tiene.

## Reglas que no se rompen

- **No inventar módulos**: si ningún módulo encaja, marcar el bloque `PENDIENTE` y crear el módulo
  antes de seguir. No improvisar HTML fuera del catálogo.
- **No inventar contenido real**: testimonios, cifras, nombres, fotos → placeholder + "Pendiente
  cliente".
- **Notas solo en `window.UX_NOTES`**, nunca visibles en el wireframe ni en la spec. Y solo si se
  piden.
- **Changelog: una línea por entrada** en `_context/changelog-global.md`. El detalle vive en el
  `## Historial` de cada spec.
- **La spec es la fuente de verdad.** Si Fase 3 cambia un módulo, actualizar su spec + Historial en
  la misma sesión. Nunca dejar el HTML por delante de la spec.
- **Preguntar si no está claro.** Objetivo de la página, contenido de un bloque, qué módulo: se
  pregunta, no se asume.
- **Al cerrar trabajo:** `node bin/estado.mjs` y `node bin/check.mjs`.

## Git

- **Nunca push directo a `main`.** Todo cambio va por **rama + Pull Request**. Si alguien pide
  commitear o pushear a `main`, negarse y crear rama + PR (comando `/subir`). Hay un hook en
  `.githooks/pre-push` que lo bloquea; se activa una vez por clon con
  `git config core.hooksPath .githooks`.
- Nunca commitear documentos del cliente (PDF, Word, decks) ni `.env`. Van en Drive/Notion, con una
  línea de referencia en `research/links.md`.

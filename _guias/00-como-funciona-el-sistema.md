# 00 — Cómo funciona el sistema

> Esta guía es para personas. Claude no la necesita para trabajar — la tiene interiorizada en `CLAUDE.md`. Léela entera si eres nueva en el equipo; vuelve a ella si algo no te queda claro.

---

## Por qué existe este sistema

Diseñar webs complejas con Claude consume muchos tokens si no hay orden. El problema habitual: Claude carga todo el contexto al principio de cada sesión — research, arquetipos, todos los módulos, páginas anteriores — aunque no los necesite para la tarea concreta. Eso agota el contexto antes de llegar al trabajo real.

Este sistema resuelve eso con dos mecanismos:

1. **Separación en tres fases** con outputs claros y mínimos que pasan de una a otra.
2. **Carga de contexto por demanda**: Claude solo lee lo que necesita para la tarea de esa sesión.

---

## Las tres fases

### Fase 1 — Research

**Qué hacemos:** Análisis del as-is, lectura de documentos del cliente, benchmark visual y de contenido, ideación inicial.

**Quién lo hace:** La UX lead o quien tenga acceso a los documentos del cliente.

**Output único que pasa a Fase 2:** `research/hallazgos.md` — una síntesis estructurada de todo lo aprendido. No es un dump de notas. Es el documento que justifica las decisiones de diseño.

**Lo que queda en research/ y no sale de ahí:** PDFs, Word, links, capturas, benchmark.md. Son material de trabajo, no contexto de diseño.

---

### Fase 2 — Diseño

**Qué hacemos:** Decidir qué bloques tiene cada página, en qué orden y por qué. Seleccionar qué módulo del catálogo encaja en cada bloque. Escribir la spec completa de la página. Detectar si hacen falta módulos nuevos y definir su spec.

**Quién lo hace:** La UX que lleva esa página (puede ser distinta de quien hizo la Fase 1).

**Cómo arranca cada sesión con Claude:** Declarar "Fase 2 + nombre de la página". Claude preguntará si no lo ve claro. Luego el briefing de la página y los índices de módulos.

**Output que pasa a Fase 3:** El bloque de handoff compacto (20 líneas máx) + las specs de módulos nuevos si los hay. No la spec completa de la página. Ver `plantilla-handoff.md`.

**Qué decide Fase 2 y qué no:** Fase 2 decide qué bloques tiene la página, en qué orden, qué comunica cada uno y qué módulo usa. **No decide el aspecto visual final** — eso lo ve por primera vez en el wireframe de Fase 3. Si en Fase 3 algo no funciona visualmente, se puede ajustar el módulo o su variante. Ver más abajo: "El bucle Fase 3 → Fase 2".

---

### Fase 3 — Construcción

**Qué hacemos:** Generar el wireframe HTML a partir del bloque de handoff. Revisar visualmente. Ajustar estructura si algo no funciona. Dejar anotaciones para UI. Subir.

**Quién lo hace:** Cualquier persona del equipo UX o alguien que sepa usar Claude Code.

**Cómo arranca:** Declarar "Fase 3 + nombre de la página" y pegar el bloque de handoff. Claude Code ya tiene el contexto de `CLAUDE.md` y lee solo los módulos seleccionados.

**Output:** Wireframe HTML aprobado en `output/pages/`, con anotaciones para UI en `window.UX_NOTES`. Specs de módulos actualizadas si hubo cambios durante la construcción.

---

### El bucle Fase 3 → Fase 2 (cambios durante construcción)

Fase 3 es la primera vez que la página se ve como wireframe real. Es normal que algo que parecía correcto en Fase 2 no funcione visualmente: un módulo que necesita un elemento extra, una variante que encaja mejor, un bloque que en HTML queda mal proporcionado.

**Qué puede cambiar Fase 3 por su cuenta:** estructura del módulo (añadir un elemento opcional, cambiar el layout responsivo), elegir otra variante del mismo módulo, reordenar elementos dentro de un bloque.

**Qué requiere volver a Fase 2:** eliminar un bloque, añadir uno nuevo, cambiar un módulo por otro de categoría distinta, modificar qué comunica un bloque. Estos son cambios de criterio, no de construcción.

**Cuando Fase 3 cambia algo del módulo, debe actualizar:**
- La spec del módulo en `docs/_registry/` — anatomía, variantes o comportamiento responsivo según corresponda
- Una entrada en el `## Historial` del módulo: `[fecha] · v1.1 · [qué cambió y por qué]`
- Una línea en `_context/changelog-global.md`
- La sección Bloques de la spec de página si el cambio afecta al contenido

La spec de módulo es siempre la fuente de verdad del estado actual. Nunca dejarla desactualizada respecto al HTML.

---

## Sesiones con Claude — cuándo abrir, cerrar y retomar

### Una sesión por fase y por página

La regla general es abrir una sesión nueva cada vez que cambias de fase o de página. Mezclar varias páginas en la misma sesión o saltar de Fase 2 a Fase 3 sin cerrar acumula contexto innecesario y gasta tokens.

| Cuándo abrir sesión nueva | Cuándo puedes continuar en la misma |
| --- | --- |
| Cambias de fase (1→2, 2→3) | Sigues en la misma fase y la misma página |
| Empiezas una página distinta | Estás definiendo la spec de un módulo nuevo dentro de Fase 2 |
| La sesión lleva mucho rato y nota lentitud | Estás revisando y ajustando el HTML en Fase 3 |

### Cómo cerrar bien una sesión

Antes de cerrar, asegurarte de que el estado quedó guardado en los archivos:

- **Fase 1:** `research/hallazgos.md` completo y guardado
- **Fase 2:** spec de página guardada + bloque de handoff copiado en algún sitio accesible (un archivo, Notion, donde trabajes)
- **Fase 3:** HTML guardado en `output/` + specs actualizadas + changelog al día, y `node bin/estado.mjs` + `node bin/check.mjs` ejecutados

Si cierras sin guardar el bloque de handoff de Fase 2, tendrás que regenerarlo en una sesión nueva compartiendo la spec de página completa — que es lo que el handoff evita.

### Qué pasa si una sesión se queda a medias

**Fase 2 a medias:** La spec de página tiene lo que se llegó a hacer. Para retomar, abrir sesión nueva: "Fase 2 — continuando la spec de [página]. Esto es lo que tenemos hasta ahora: [pegar spec parcial]". Claude sigue desde ahí sin necesidad de re-explicar todo el briefing.

**Fase 3 a medias:** El HTML tiene los bloques generados hasta el punto de corte. Para retomar: "Fase 3 — continuando el wireframe de [página]. Tenemos el HTML hasta el bloque [X], hay que continuar desde [Y]". Compartir el bloque de handoff original y el HTML parcial.

### Cómo pasa un módulo nuevo de Fase 2 a Fase 3

Cuando en Fase 2 se detecta y define un módulo nuevo, el bridge entre fases son dos cosas:
1. **La spec del módulo** en `docs/_registry/<CAT>/[NNN Nombre].md` — la crea Claude en Fase 2
2. **La mención en el handoff** bajo `DEPENDENCIAS PENDIENTES: [NNN] — spec lista, HTML por construir`

La persona de Fase 3 ve esa dependencia y sabe que antes de generar la página tiene que construir ese módulo: lee su spec y genera el HTML standalone en `output/modules/<CAT>/`. Solo después genera la página que lo usa.

### Cómo pasa un módulo modificado de Fase 3 a Fase 2

Si Fase 3 modifica un módulo (por ajuste visual o de estructura), la spec del módulo en el registry refleja el estado final. No hace falta ninguna comunicación formal adicional — la spec actualizada es el registro del cambio. La persona de Fase 2 que use ese módulo en una página posterior lo verá actualizado con su nuevo Historial.

---

## El catálogo de módulos y cómo nombrarlo

### Estructura del catálogo

Todos los módulos viven en `docs/_registry/`. Por cada categoría hay dos cosas al mismo nivel: un archivo índice y una carpeta de specs.

```
docs/_registry/
├── CON.md          ← índice: tabla con todos los módulos de contenido y su "cuándo usar"
├── CON/            ← carpeta: spec completa de cada módulo de contenido
│   ├── CON-001-bloque-texto-imagen.md
│   └── CON-002-acordeon-expandible.md
├── CAB.md
├── CAB/
│   └── CAB-001-hero-con-imagen-de-fondo.md
...
```

El índice (`.md`) permite elegir módulo sin abrir ninguna spec. La carpeta contiene el detalle. Claude nunca entra en la carpeta hasta saber cuál necesita.

### Categorías — cómo decidirlas

Las categorías agrupan módulos por tipo estructural, no por dónde aparecen en el sitio. Cada proyecto define las suyas. Algunas habituales:

| Código | Tipo | Qué agrupa |
| --- | --- | --- |
| CON | Contenido | Bloques editoriales, secciones de texto, listas, estadísticas |
| CAB | Cabecera | Heroes, headers de página |
| CRD | Cards | Cualquier grid o lista de cards |
| NAV | Navegación | Menús, footer, breadcrumb, barra de anclaje |
| FRM | Formularios | Contacto, búsqueda, filtros |
| MDL | Modal / overlay | Ventanas, panels, lightboxes |

Puedes añadir categorías nuevas cuando un módulo no encaja en ninguna existente. El código son siempre 3 letras mayúsculas. Cuando creas una categoría nueva, añade una fila en `docs/_registry/_index.md`.

### Cómo nombrar los módulos — la regla agnóstica

El nombre de un módulo describe **el patrón estructural**, nunca el contenido que lleva. La prueba: ¿podría este módulo aparecer en cinco páginas distintas con contenido diferente y seguir teniendo sentido? Si sí → el nombre es correcto.

| ✅ Nombre agnóstico | ❌ Nombre específico |
| --- | --- |
| Bloque texto + imagen | Bloque sobre las familias |
| Grid de cards con imagen | Cards de colegios |
| Acordeón expandible | FAQ de preguntas frecuentes |
| Hero con imagen de fondo | Hero institucional |
| Banner horizontal con CTA | Banner del Film Festival |
| Carrusel de vídeos | Vídeos destacados SEK |

### Cómo numerar

El código completo es `<CAT>-NNN` (tres letras + número), sin ningún prefijo extra. Números secuenciales dentro de la categoría: `001`, `002`, `003`... No reutilizar números aunque se elimine un módulo. Las variantes van con letra al final: `CON-001-A`, `CON-001-B`.

**Variante vs. módulo nuevo:**
- Cambia el contenido o un elemento opcional (con/sin imagen, con/sin CTA) → **variante** del mismo módulo
- Cambia el layout o la jerarquía de elementos → **módulo nuevo** con número propio

### Paso a paso — crear un módulo nuevo

1. Comprobar que no existe ya algo similar en el catálogo (leer los índices de categoría)
2. Decidir en qué categoría encaja (o crear una nueva si no existe)
3. Asignar el siguiente número disponible en esa categoría
4. Elegir un nombre agnóstico que describa el patrón estructural
5. Crear `docs/_registry/<CAT>/<CAT>-NNN-nombre-en-kebab.md` duplicando la plantilla (`_guias/plantilla-modulo.md`) — nombre de archivo sin espacios ni acentos, el nombre bonito va dentro
6. Añadir una fila al índice de categoría `docs/_registry/<CAT>.md` con el "cuándo usar"
7. Si es una categoría nueva: añadir también una fila en `docs/_registry/_index.md`

### Paso a paso — crear una categoría nueva

1. Elegir un código de 3 letras que no exista ya
2. Crear `docs/_registry/<CAT>.md` con la tabla de índice (copiar la estructura de una categoría existente)
3. Crear la carpeta `docs/_registry/<CAT>/`
4. Añadir una fila a la tabla de categorías en `docs/_registry/_index.md`

---

## El flujo de tokens

Aquí está el problema que el sistema resuelve:

| Sin sistema | Con sistema |
| --- | --- |
| Claude lee research + arquetipos + todos los módulos al arrancar | Claude lee solo `CLAUDE.md` + `ESTADO.md` (autogenerado) |
| Una sesión puede consumir 30+ archivos antes de hacer algo | La spec de página activa son 1-2 archivos más |
| La fase de research y la de construcción comparten contexto | Cada fase tiene su propia sesión, sin arrastre |
| Las guías y plantillas se cargan como contexto | Las guías son para personas, Claude no las lee |

---

## Qué hace Claude y qué hacemos nosotras

**Claude hace:** Proponer módulos del catálogo para un briefing, rellenar specs con el formato correcto, generar HTML de wireframe, detectar inconsistencias.

**Nosotras hacemos:** Decidir qué va en cada página y por qué (el criterio), validar lo que propone Claude, crear el briefing de cada bloque, revisar el wireframe visualmente, aprobar antes de subir.

Claude no tiene criterio de negocio ni contexto del cliente que no le hayamos dado. Las decisiones de qué comunica cada página son siempre nuestras.

---

## No empezar el catálogo de cero: el kit

Hay una librería de módulos ya construidos (`wireframe-kit`) que **no vive dentro del repo** a
propósito: se referencia desde `proyecto.json` y se importan solo los módulos que el proyecto vaya a
usar. Antes de escribir un módulo nuevo, mirar si ya existe:

```bash
node bin/importar-kit.mjs --listar
node bin/importar-kit.mjs --modulos CON-001,CRD-002
```

Cualquier otra librería sirve igual. Ver `_guias/04-kit-de-modulos.md`.

---

## Las tres herramientas del repo

| Comando | Qué hace | Cuándo |
| --- | --- | --- |
| `node bin/estado.mjs` | Regenera `ESTADO.md` leyendo las specs y los wireframes | Al cerrar cualquier sesión que haya tocado una página |
| `node bin/check.mjs` | Valida el repo: enlaces rotos, módulos sin spec o sin HTML, módulos que faltan en su índice, wireframes sin versión | Antes de subir |
| `node bin/importar-kit.mjs` | Trae módulos de un kit externo, ya normalizados | Al arrancar el catálogo o cuando hace falta un módulo nuevo |

`ESTADO.md` es autogenerado: **no se edita a mano**. Si la tabla no refleja la realidad, es que
falta ejecutar `estado.mjs` o que la spec no declara bien su estado.

---

## Reglas que nunca cambian

- **No inventar módulos**: espacio gris PENDIENTE hasta que el módulo esté en el catálogo.
- **No inventar contenido real**: testimonios, cifras, fotos → placeholder + "Pendiente cliente".
- **Notas solo en `window.UX_NOTES`**: nunca como texto visible en el wireframe, nunca en la spec.
- **Una línea por entrada en el changelog**: el detalle va en el Historial de cada spec.
- **Pregunta si no está claro**: Claude no asume — pregunta.
- **Verificar por DOM/JS, nunca con capturas de pantalla**: en sesiones largas el visor devuelve
  imágenes grises y una captura gasta tokens de imagen sin aportar nada fiable. Se comprueba con
  `querySelectorAll(...).length`, `getComputedStyle(...)` y compañía, en los 3 breakpoints.
- **Nunca push directo a `main`**: rama + Pull Request. Activa el hook una vez por clon con
  `git config core.hooksPath .githooks`.
- **Los documentos del cliente no entran al repo**: quedan en Drive/Notion, con su línea en
  `research/links.md`.

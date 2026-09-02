# Página de ejemplo

> 📌 **Spec de ejemplo, rellenada a propósito** para que veas qué aspecto tiene una spec terminada.
> La versión vacía para copiar está en `_guias/plantilla-pagina.md`. Borra esta carpeta
> (`docs/_pages/_seccion-ejemplo/`) y su wireframe cuando arranques el proyecto de verdad.
>
> 🤖 **Claude en Fase 2 (diseño):** lee todo — necesitas arquetipos y decisiones para proponer con criterio.
> 🔧 **Claude en Fase 3 (construcción):** lee solo **Notas globales** y **Bloques**.

---

| | |
| --- | --- |
| **Estado** | ✅ Listo |
| **Sprint** | 0 |
| **Sección** | _seccion-ejemplo |
| **Tipo de cabecera** | Sin cabecera — es una página de demostración del sistema, no del site |
| **Nivel de contenido** | Sin departamento de contenido |
| **Versión** | v1.0 |

---

## Descripción y objetivo `🎨 diseño · 🔧 CC: opcional`

- **Qué es:** página de demostración del starter. No pertenece a ningún site real.
- **Objetivo:** enseñar de un vistazo la cadena completa spec → módulo → wireframe.
- **Por qué existe:** que una persona nueva vea un ejemplo terminado antes de escribir el suyo.

---

## ¿Quién llega y qué necesita ver? `🎨 diseño`

**¿Quién llega?** Alguien del equipo UX que acaba de clonar el repo y no ha usado el sistema.

**Racional (lo que justifica con la cabeza):**
- Cómo se referencia un módulo del catálogo desde la spec de una página.
- Qué parte de la spec lee Claude en Fase 3 y qué parte no.

**Emocional (lo que les hace conectar):**
- Que se ve poco trabajo por delante: el módulo ya existe, la página solo lo coloca.

---

## SEO `🎨 diseño`

No aplica: página interna de demostración, no indexable.

---

## Arquetipos `🎨 diseño`

| Rol | Arquetipo | Qué busca en esta página |
| --- | --- | --- |
| Principal | UX que entra nueva al proyecto | Un ejemplo completo y correcto que copiar |

---

## Historias de usuario `🎨 diseño`

| Código | Como... | Quiero... | Para... |
| --- | --- | --- | --- |
| HU-EJ-01 | UX nueva en el equipo | ver una spec terminada y su wireframe | escribir la mía sin preguntar por el formato |

---

## Dependencias `🎨 diseño · 🔧 CC: leer si hay pendientes`

| Bloque | Depende de | Estado |
| --- | --- | --- |
| 1 · Bloque de presentación | CON-001 (ya en el catálogo) | Resuelto |

---

## Notas globales `🔧 CC: leer`

- Escala de grises y placeholders: es un wireframe, no una maqueta visual.
- Sin contenido de cliente: los textos son de relleno con la longitud máxima recomendada.

---

## Bloques `🔧 CC: leer — fuente principal para generar el HTML`

> ⚠️ Si ningún módulo encaja para un bloque, no inventar: marcarlo `PENDIENTE` y crear el módulo
> antes de continuar.

### 1 · Bloque de presentación

> **Módulo:** [CON-001](../../_registry/CON/CON-001-bloque-texto-imagen.md) · variante base (imagen derecha)

| Elemento | Contenido |
| --- | --- |
| Overtitle | "Cómo funciona" |
| Título (H2) | "Una spec, un módulo del catálogo, un wireframe" |
| Párrafo | Explica en dos frases que la página no inventa HTML: coloca módulos ya documentados |
| CTA | "Ver la guía" → `_guias/00-como-funciona-el-sistema.md` |
| Imagen | Placeholder 4:3 |

---

### 2 · Bloque solo texto

> **Módulo:** [CON-001](../../_registry/CON/CON-001-bloque-texto-imagen.md) · variante **-A** (sin imagen)

| Elemento | Contenido |
| --- | --- |
| Título (H2) | "Qué pasa cuando ningún módulo encaja" |
| Párrafo | Explica que se marca `PENDIENTE` y se crea el módulo antes de seguir |
| CTA | — (omitido) |

---

## Decisiones `🎨 diseño`

| Código | Decisión |
| --- | --- |
| DEC-EJ-01 | Reutilizar CON-001 en sus dos variantes en vez de crear un segundo módulo · el segundo bloque solo cambia el contenido y quita un elemento opcional: es variante, no módulo nuevo |
| DEC-EJ-02 | Sin cabecera · la página no pertenece al site, no tiene que parecer una página real |

---

## Historial

- 2026-09-02 · v1.0 · Creación inicial (página de ejemplo del starter)

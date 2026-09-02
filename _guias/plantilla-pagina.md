# Plantilla — Página

> **Cómo usar:** Duplícala, renómbrala con el nombre de la página y muévela a `docs/_pages/<sección>/`. Rellena todos los campos.
>
> 🤖 **Para Claude en Fase 2 (diseño):** Lee todo. Necesitas arquetipos, decisiones y contexto completo para proponer módulos con criterio.
>
> 🔧 **Para Claude en Fase 3 (construcción):** Lee solo las secciones **Notas globales** y **Bloques**. El resto es contexto de diseño — no lo necesitas para generar el wireframe.

---

# [Nombre de la página]

| | |
| --- | --- |
| **Estado** | 🔴 Pendiente · 🟡 En progreso · ✅ Listo |
| **Sprint** | — |
| **Sección** | [Nombre de la sección del site] |
| **Tipo de cabecera** | [Módulo de cabecera elegido y motivo en 1 línea] |
| **Nivel de contenido** | Con departamento de contenido / Sin departamento de contenido |
| **Versión** | v1.0 |

---

## Descripción y objetivo `🎨 diseño · 🔧 CC: opcional`

- **Qué es:** [Tipo de página y de dónde viene o a qué sustituye]
- **Objetivo:** [Qué debe comunicar o conseguir — 2-4 puntos concretos]
- **Por qué existe:** [Contexto de negocio o petición del cliente]

---

## ¿Quién llega y qué necesita ver? `🎨 diseño`

**¿Quién llega?** [Perfil y momento del proceso en que aterriza]

**Racional (lo que justifica con la cabeza):**
- [Dato o prueba que necesita para decidir]

**Emocional (lo que les hace conectar):**
- [Proyección, confianza, prueba social...]

---

## SEO `🎨 diseño`

Palabras clave objetivo. Fuente: [indicar de dónde vienen las KW].

- [keyword] ([volumen])

---

## Arquetipos `🎨 diseño`

| Rol | Arquetipo | Qué busca en esta página |
| --- | --- | --- |
| Principal | [Arquetipo X] | [Qué necesita encontrar] |
| Secundario | [Arquetipo Y] | [Qué necesita encontrar] |

---

## Historias de usuario `🎨 diseño`

| Código | Como... | Quiero... | Para... |
| --- | --- | --- | --- |
| HU-[ABREV]-01 | [Arquetipo] | [Acción] | [Objetivo] |

---

## Dependencias `🎨 diseño · 🔧 CC: leer si hay pendientes`

| Bloque | Depende de | Estado |
| --- | --- | --- |
| [Elemento] | Copy cliente / Imagen / Módulo nuevo / Dev | Pendiente / Resuelto |

---

## Notas globales `🔧 CC: leer`

- [Decisión o restricción que aplica a toda la página — ej: "No usar imagen en ningún bloque hasta recibir el pack fotográfico"]

---

## Bloques `🔧 CC: leer — fuente principal para generar el HTML`

> ⚠️ Si ningún módulo encaja para un bloque, no inventar. Marcar como PENDIENTE y crear el módulo antes de continuar.

### 1 · [Nombre descriptivo del bloque]

> **Módulo:** [<CAT>-NNN](../../_registry/[CAT]/[CAT-NNN-nombre].md) · variante [X si aplica]

| Elemento | Contenido |
| --- | --- |
| [Elemento del módulo] | [Contenido concreto de esta página] |
| [Elemento] | Pendiente cliente / [contenido] |

---

### 2 · [Nombre descriptivo del bloque]

> **Módulo:** [<CAT>-NNN]

| Elemento | Contenido |
| --- | --- |
| [Elemento] | [Contenido] |

---

## Decisiones `🎨 diseño`

| Código | Decisión |
| --- | --- |
| DEC-[ABREV]-01 | [Decisión tomada · por qué — ej: "Cabecera ligera porque la página es funcional, no institucional"] |

---

## Historial

- [YYYY-MM-DD] · v1.0 · Creación inicial

# Plantilla — Módulo

> **Cómo usar:** Duplícala, renómbrala como `<CAT>-NNN-nombre-en-kebab-case.md` (minúsculas, sin espacios ni acentos — el nombre bonito va dentro del documento, no en el nombre de archivo) y muévela a `docs/_registry/<CAT>/`. Rellena todos los campos. Luego añádelo al índice de su categoría (`docs/_registry/<CAT>.md`) con su "cuándo usar".

---

# [NNN] | [Nombre del módulo]

**Visualización HTML:** [URL o ruta en output/modules/ cuando exista]

**Estado:** 🔴 Pendiente · 🟡 En progreso · ✅ Listo · 🟢 En producción (UI)

| | |
| --- | --- |
| **Categoría** | <CAT> |
| **Cuándo usar** | [Una línea: en qué situación encaja este módulo — esto es lo que aparece en el índice de categoría] |

---

## Anatomía

> Todos los elementos que puede tener este módulo. Ser exhaustiva: incluir los opcionales. La columna "Presencia" indica si Claude puede omitirlo o no.

| Elemento | Presencia | Editable CMS | Condición / Notas |
| --- | --- | --- | --- |
| [Elemento 1] | Obligatorio | Sí / No | — |
| [Elemento 2] | Opcional | Sí | — |
| [Elemento 3] | Condicional | Sí | Solo si [condición] |

**Sistema de presencia:**
- **Obligatorio** — siempre aparece
- **Opcional** — puede estar o no; si no está, el layout se adapta
- **Condicional** — aparece solo si se cumple una condición (especificar cuál)

---

## Variantes

| Código | Nombre | Diferencia respecto a la variante base |
| --- | --- | --- |
| [NNN-A] | [Nombre variante A] | [Qué cambia — ej: sin imagen] |
| [NNN-B] | [Nombre variante B] | [Qué cambia — ej: con imagen lateral] |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout general | [descripción] | [descripción] | [descripción] |
| [Elemento específico] | [cómo se ve] | [cómo se ve] | [cómo se ve] |

> ✅ Antes de verificar: si el módulo usa grid o flex con texto dentro, los hijos directos llevan
> `min-width: 0` (si no, desborda en 320-375px aunque la pista tenga el ancho correcto — "grid
> blowout"). Si combina `aspect-ratio` con `.img-placeholder`, esa regla lleva también
> `width: 100%` (si no, el ancho puede salir del alto en vez de al revés). Comprobar siempre a
> 320px, no solo a 375px.

---

## Limitaciones y notas técnicas

- [Restricción — ej: "Máximo 6 ítems en la lista; más de 6 se cortan o colapsan"]
- [Nota de implementación — ej: "El carrusel usa la función globalSlider() de wireframe.js — no redefinir"]

---

## Historial

- [YYYY-MM-DD] · v1.0 · Creación inicial

---

## Notas para UI

> **Esta sección es para el equipo de UI, no para Claude.** Claude para de leer la spec de este módulo al llegar aquí.

**Comportamiento interactivo esperado:**
- [Animación o transición — ej: "Cards con hover elevación + sombra"]
- [Estado focus para accesibilidad]
- [Comportamiento en touch vs. cursor]

**Restricciones de implementación:**
- [Restricción — ej: "Mínimo 2 ítems, máximo 4. Con 1 ítem, usar variante sin carrusel"]
- [Restricción de contenido — longitud de títulos, peso de imágenes, etc.]

**Referencia visual:**
- Figma: [URL del frame concreto, si existe]
- [Captura o nota de referencia visual adicional]

**Casos edge a contemplar:**
- [Caso — ej: "Si el título supera 3 líneas en mobile, truncar con ellipsis"]
- [Caso — ej: "Si no hay imagen, el layout pasa a centrado"]

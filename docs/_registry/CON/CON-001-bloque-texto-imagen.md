# CON-001 | Bloque texto + imagen

> 📌 **Módulo de ejemplo.** Está aquí para que veas cómo se escribe una spec y cómo se
> corresponde con su HTML. Bórralo (spec + HTML + fila del índice) cuando el proyecto tenga sus
> propios módulos, o déjalo: si luego importas el kit, su versión real lo reemplaza.

**Visualización HTML:** `output/modules/CON/CON-001-bloque-texto-imagen.html`

**Estado:** ✅ Listo

| | |
| --- | --- |
| **Categoría** | CON |
| **Cuándo usar** | Bloque editorial que combina un texto argumental con una imagen de apoyo. No usar para contenido funcional (formularios, listas de datos) ni como cabecera de página |

---

## Anatomía

> Todos los elementos que puede tener el módulo, incluidos los opcionales. "Presencia" indica si
> se puede omitir.

| Elemento | Presencia | Editable CMS | Condición / Notas |
| --- | --- | --- | --- |
| Overtitle | Opcional | Sí | Etiqueta corta encima del título (kicker). Si no está, el H2 sube |
| Título (H2) | Obligatorio | Sí | H2 semántico. El `aria-labelledby` de la sección apunta aquí |
| Párrafo | Obligatorio | Sí | Recomendado <300 palabras. Alineado a la izquierda, nunca centrado |
| CTA | Opcional | Sí | Un solo destino. Si hay dos, valorar variante -B |
| Imagen | Opcional | Sí | Si no hay, usar la variante -A (texto a ancho completo) |

**Sistema de presencia:**
- **Obligatorio** — siempre aparece
- **Opcional** — puede estar o no; si no está, el layout se adapta
- **Condicional** — aparece solo si se cumple una condición (especificarla)

---

## Variantes

| Código | Nombre | Diferencia respecto a la base |
| --- | --- | --- |
| CON-001 | Imagen derecha (base) | Texto izquierda, imagen derecha en desktop |
| CON-001-A | Sin imagen | Solo texto, a ancho de columna de lectura |
| CON-001-B | Imagen izquierda | Se invierte el orden en desktop (`--reversed`) |

---

## Comportamiento responsive

| Elemento | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Layout general | 1 columna | 2 columnas iguales (1fr 1fr) | 2 columnas 55/45 |
| Imagen | Ancho completo, debajo del texto | Columna lateral | Columna lateral |
| Gap | `--space-8` | `--space-12` | `--space-16` |
| CTA | Ancho completo | Ancho de su contenido | Ancho de su contenido |

---

## Limitaciones y notas técnicas

- La imagen pide ratio 4:3 en desktop y 16:9 en mobile. Si el CMS permite libre, recomendar la
  restricción al cliente.
- Usa solo clases y tokens de `output/shared/styles.css` (`--space-*`, `--radius-md`). El CSS propio
  del módulo va con prefijo `.con001__` para no colisionar.
- En la variante -A el párrafo mantiene `max-width: 65ch` — no estirarlo a los 1200px del grid.

---

## Historial

- 2026-09-02 · v1.0 · Creación inicial (módulo de ejemplo del starter)

---

## Notas para UI

> **Esta sección es para el equipo de UI, no para Claude.** Claude para de leer la spec aquí.

**Comportamiento interactivo esperado:**
- Módulo estático: sin interacciones propias.
- CTA: subrayado en hover y estado `:focus-visible` visible (el base ya lo trae).

**Restricciones de implementación:**
- Overtitle: máx. 40 caracteres · Título: máx. 80 (≈2 líneas en desktop) · CTA: máx. 30.
- Imagen: máx. 200KB, `webp` preferible, `alt` obligatorio en producción.

**Referencia visual:**
- Figma: [pendiente]

**Casos edge a contemplar:**
- Párrafo de menos de 3 líneas: la columna de texto se centra verticalmente respecto a la imagen.
- Sin imagen: pasa a la variante -A, el texto no ocupa los 1200px completos.
- Título de más de 2 líneas en desktop: no se trunca, pero pedir al cliente que lo acorte.

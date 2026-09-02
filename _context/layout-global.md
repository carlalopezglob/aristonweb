# Layout global

> **Qué es.** Grid, breakpoints y variables CSS compartidas por todo el proyecto. Claude lo consulta en Fase 3 solo si hay duda de medidas o variables — no se carga por defecto.

---

## Grid

| | Mobile (<768px) | Tablet (768-1199px) | Desktop (≥1200px) |
| --- | --- | --- | --- |
| Columnas | 4 | 8 | 12 |
| Gutter | 16px | 24px | 32px |
| Margen lateral | 16px | 32px | Auto (max-width centrado) |
| Max-width contenido | — | — | 1200px |

---

## Variables CSS

```css
:root {
  /* Colores */
  --color-primary:    [#hex];
  --color-secondary:  [#hex];
  --color-bg:         #ffffff;
  --color-surface:    [#hex];
  --color-border:     [#hex];
  --color-text:       [#hex];
  --color-text-muted: [#hex];

  /* Tipografía */
  --font-base:        [font-family];
  --font-heading:     [font-family];
  --font-size-base:   16px;

  /* Espaciado */
  --section-padding-mobile:  48px;
  --section-padding-tablet:  64px;
  --section-padding-desktop: 96px;

  /* Bordes y sombras */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
}
```

---

## Tipografía — escala

| Estilo | Mobile | Desktop | Peso | Familia |
| --- | --- | --- | --- | --- |
| H1 | [size] | [size] | [peso] | [familia] |
| H2 | [size] | [size] | [peso] | [familia] |
| H3 | [size] | [size] | [peso] | [familia] |
| Body | 16px | 16px | 400 | [familia] |
| Small | 14px | 14px | 400 | [familia] |

---

## Historial

- [YYYY-MM-DD] · v1.0 · Variables iniciales

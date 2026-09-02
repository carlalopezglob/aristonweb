---
description: Fase 3 — construir el wireframe HTML de una página a partir del handoff
---

Estamos en **Fase 3 (Construcción)**. Handoff / página: **$ARGUMENTS**

Si no te he pegado el bloque de handoff, pídemelo antes de generar nada.

Contexto que debes cargar (y nada más):

1. El bloque de handoff que te doy.
2. La spec de **cada módulo que nombra el handoff**, parando de leer en `## Notas para UI`.
3. El HTML standalone de esos módulos en `output/modules/<CAT>/` — **un archivo por módulo**, nunca
   una página completa de 600 líneas para "ver el estilo".
4. La sección `## Bloques` de la spec de página **solo si** el handoff remite a ella.

No cargues: `research/`, `_guias/`, la spec de página completa, ni el resto del catálogo.

Orden de trabajo:

1. Si el handoff trae `DEPENDENCIAS PENDIENTES` con módulos por construir: **primero esos**. Su HTML
   standalone en `output/modules/<CAT>/`, más su fila en el índice de la categoría. Después la página.
2. Genera la página en `output/pages/<sección>/<slug>.html` con `<meta name="ux-version">`,
   importando `../../shared/styles.css` y `../../shared/wireframe.js` (defer).
3. Usa las clases y tokens de `shared/styles.css` (`--space-*`, `--radius-*`, `--control-height-md`).
   CSS de página solo para adaptaciones puntuales. No dupliques funciones de `wireframe.js`.
4. **Verifica con `npx serve output` por DOM/JS, nunca con capturas**, en los 3 breakpoints
   (<768 · 768-1199 · ≥1200), incluidas las interacciones del módulo si las tiene.
5. `window.UX_NOTES` solo si te las pido.

Qué puedes ajustar por tu cuenta: otra variante del mismo módulo, añadir un elemento opcional,
retocar el responsive, reordenar dentro de un bloque. **Si el ajuste cambia el módulo, actualiza su
spec y su `## Historial` en esta misma sesión.**

Qué NO puedes hacer sin volver a Fase 2: quitar un bloque, añadir uno nuevo, cambiar un módulo por
otro de categoría distinta, o cambiar qué comunica un bloque. Avísame y paramos.

Al terminar: línea en `_context/changelog-global.md`, `node bin/estado.mjs` y `node bin/check.mjs`.

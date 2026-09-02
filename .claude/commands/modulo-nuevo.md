---
description: Crear un módulo nuevo en el catálogo (spec + HTML + índice), con las comprobaciones
---

Vamos a crear un módulo nuevo: **$ARGUMENTS**

Antes de escribir nada, comprueba en este orden y dime qué encuentras:

1. **¿Ya existe algo parecido en el catálogo?** Lee solo los índices `docs/_registry/*.md`.
   Si hay un candidato, dime si lo que pido es en realidad una **variante** de ese módulo.
2. **¿Lo tiene ya el kit?** `node bin/importar-kit.mjs --listar`. Si sí, no lo construyas:
   propón `node bin/importar-kit.mjs --modulos <CODIGO>`.
3. **¿Pasa el test de agnosticismo?** ¿Serviría en cinco proyectos con contenido distinto? Si el
   nombre que se me ha ocurrido es del tipo "bloque de familias" o "cards de colegios", propón un
   nombre por patrón estructural.

Si de verdad hace falta construirlo:

1. Categoría (existente o nueva de 3 letras) y siguiente número libre.
2. Spec en `docs/_registry/<CAT>/<CAT>-NNN-nombre-en-kebab.md` con la plantilla
   `_guias/plantilla-modulo.md`: Anatomía (con Presencia obligatorio/opcional/condicional),
   Variantes, Comportamiento responsive por breakpoint, Limitaciones, Historial, Notas para UI.
   Si te falta cualquiera de esos datos, **pregúntame antes de escribir**.
3. HTML standalone en `output/modules/<CAT>/<mismo-nombre>.html`: `<meta name="ux-version">`,
   importa `../../shared/styles.css` y `../../shared/wireframe.js`, usa los tokens
   (`--space-*`, `--radius-*`, `--control-height-md`), CSS propio con prefijo de módulo.
4. **Verifícalo con `npx serve output` por DOM/JS en los 3 breakpoints**, interacciones incluidas.
5. Fila en el índice `docs/_registry/<CAT>.md` con su "cuándo usar". Si la categoría es nueva:
   crea su índice y añade la fila en `docs/_registry/_index.md`.
6. `node bin/check.mjs` y línea en `_context/changelog-global.md`.

Un módulo con spec pero sin HTML, o sin fila en el índice, no está terminado: no lo des por hecho.

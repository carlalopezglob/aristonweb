---
description: Fase 2 — diseñar la spec de una página (bloques + módulos) y sacar el handoff
---

Estamos en **Fase 2 (Diseño)** de la página: **$ARGUMENTS**

Si no te he dado nombre de página, pregúntamelo antes de hacer nada.

Contexto que debes cargar (y nada más):

1. `ESTADO.md` — para ver si esta página ya tiene spec empezada.
2. Los **índices** de categoría de `docs/_registry/*.md` — solo las tablas de "cuándo usar".
3. La spec de un módulo concreto **solo cuando sea candidato real** para un bloque.
4. `_context/arquetipos.md` o `research/hallazgos.md` **solo** si hay una duda concreta de criterio.

No cargues: `_guias/`, otras páginas, HTML de módulos, ni el kit entero.

Cómo trabajamos, bloque a bloque:

- Te doy el briefing de la página. Si falta algo importante (objetivo, contenido de un bloque),
  **pregunta antes de escribir**.
- Para cada bloque: propón el módulo del catálogo que encaja. Si ninguno encaja, mira si lo tiene el
  kit (`node bin/importar-kit.mjs --listar`) antes de proponer crearlo.
- Distingue **variante** (cambia contenido o un elemento opcional) de **módulo nuevo** (cambia el
  layout o la jerarquía).
- Si hace falta un módulo nuevo, escribimos su spec aquí mismo, en esta sesión, con la plantilla
  `_guias/plantilla-modulo.md`. Su HTML queda pendiente para Fase 3.
- No inventes contenido real: lo que debe dar el cliente va como placeholder + "Pendiente cliente".

Al terminar:

1. Escribe la spec completa en `docs/_pages/<sección>/<slug>.md` con el esqueleto de
   `_guias/plantilla-pagina.md`.
2. Dame el **bloque de handoff** (formato de `_guias/plantilla-handoff.md`), con
   `DEPENDENCIAS PENDIENTES` si hay módulos por construir.
3. Ejecuta `node bin/estado.mjs` y `node bin/check.mjs`.

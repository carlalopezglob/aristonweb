---
description: Panel del proyecto — regenera ESTADO.md, valida el repo y resume cómo va todo
---

Dame el panel del proyecto, sin abrir specs enteras:

1. `node bin/estado.mjs` — regenera `ESTADO.md`.
2. `node bin/check.mjs` — valida coherencia.
3. `git fetch origin` y dime si mi rama está por detrás de `origin/main`.

Luego resume **en simple**:

- Cuántas páginas hay y en qué estado (listas / en progreso / sin empezar).
- Cuáles tienen spec pero **no** wireframe, que es lo que toca construir.
- Cuántos pendientes de cliente hay y en qué páginas.
- Cuántos módulos hay en el catálogo, por categoría.
- Si `check.mjs` ha sacado errores: cuáles y qué hay que hacer para arreglarlos.

Si algo está roto, propón el arreglo concreto. No lo apliques sin preguntarme.

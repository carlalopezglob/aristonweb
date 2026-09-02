---
description: Consultar el kit de módulos externo e importar solo los que hagan falta
---

Kit de módulos: **$ARGUMENTS**

1. Empieza por `node bin/importar-kit.mjs --listar` (no copia nada) y enséñame el inventario
   agrupado por categoría, marcando los que están incompletos en el kit.

2. Si te he dicho para qué bloque lo quiero, propón **2-3 candidatos** con su código y su "cuándo
   usar", leyendo solo los índices del kit (`<kit>/registry/*.md`). No abras sus HTML todavía.

3. Cuando yo elija, importa **solo esos**:
   `node bin/importar-kit.mjs --modulos <CODIGOS>`
   Recuerda lo que hace el importador: normaliza nombres, quita los paneles de catálogo
   (`kit-states` / `kit-notes`), actualiza `output/shared/styles.css` con la base de tokens del kit
   y regenera los índices.

4. Después: `node bin/check.mjs` y verifica el módulo importado con `npx serve output` por DOM/JS en
   los 3 breakpoints. Si algo se ve mal, suele ser que falta un token en `shared/styles.css`.

5. Dime qué ha entrado y qué quedaría por completar (specs o HTML que el kit no traía).

Si lo que quiero **no** está en el kit, no lo fuerces: dilo y pasamos a `/modulo-nuevo`.

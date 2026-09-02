# 02 — Fase 2: Diseño

> Guía operativa. Lo que tienes que hacer en cada sesión de diseño, en qué orden, y qué produce esta fase.

---

## Qué es esta fase

**Quién la hace:** la UX lead o senior que lleva esa página. Es la fase de mayor carga de criterio: decide qué bloques tiene la página, en qué orden, qué módulo usa cada uno y qué contenido lleva.

**Cuándo:** una vez que `research/hallazgos.md` está completo. Una sesión por página — no se mezclan varias en la misma.

**Qué no hacer aquí:** no construir HTML, no decidir el aspecto visual final del wireframe. Eso se ve por primera vez en Fase 3 — si algo no funciona visualmente, se ajusta allí sin que implique rehacer esta fase.

---

## Cómo se hace, paso a paso

**1. Preparar el briefing de la página.** Bloque a bloque: nombre, qué comunica, contenido si lo tienes, formato o comportamiento esperado. Puede ser texto libre, no hace falta que esté perfecto.

**2. Declarar la fase y compartir el briefing con Claude.** *"Estoy en Fase 2, vamos a diseñar la página X."* Si falta información, Claude pregunta antes de escribir nada — objetivo de la página, contenido de algún bloque, módulo si no lo has indicado.

**3. Decidir el módulo de cada bloque.** Con los índices de módulos a la vista, para cada bloque: ¿hay uno que encaje, hace falta una variante, o hace falta uno nuevo? (ver el criterio más abajo). Se valida bloque a bloque, no toda la página de golpe.

**4. Definir el contenido de cada bloque.** Qué va exactamente ahí — copy propio o contenido pendiente del cliente (ver más abajo). Esto se hace en paralelo al paso 3, bloque a bloque.

**5. Si hace falta un módulo nuevo, definir su spec en este mismo chat.** No hace falta salir de la sesión: se describe el módulo (anatomía, variantes, responsive, restricciones) y Claude genera su spec. El HTML de ese módulo queda pendiente para Fase 3.

**6. Claude rellena la spec completa de la página** con todo lo decidido en los pasos anteriores.

**7. Pedir el bloque de handoff y guardarlo.** *"Dame el bloque de handoff para esta página."* Es lo que arranca la Fase 3.

---

## Dos documentos, no uno

Esta fase produce dos tipos de spec distintos:

- **Spec de página** — arquetipo, objetivo, bloques, qué módulo y contenido lleva cada uno.
- **Spec de módulo** — anatomía, variantes, comportamiento responsivo. Es del catálogo, no de una página concreta.

Tu trabajo es dar la información de cada una; Claude la monta con el formato correcto.

---

## Elegir el módulo

- **Encaja tal cual** → se usa.
- **Encaja casi, con un cambio de contenido o un elemento opcional** (con/sin imagen, con/sin CTA) → es una **variante** del mismo módulo.
- **El layout o la jerarquía cambian** → es un **módulo nuevo**, con spec propia.

Si dudas entre estos tres casos, dilo en el briefing y lo decidís juntas comparando con el índice de la categoría.

Cuando propongas un módulo (nuevo o variante), da también una referencia de formato: descrita en texto, una imagen que te guste, o un frame de Figma. Cualquiera sirve como input para la spec.

**Si es un módulo nuevo**, la spec debe cubrir: qué elementos son obligatorios y cuáles opcionales, qué variantes hay previstas, cómo cambia el layout entre mobile/tablet/desktop, si hay interacciones (hover, expand, carrusel...) y qué restricciones de contenido tiene (mín./máx. de ítems, ratio de imagen). Si no tienes claro alguno de estos puntos, Claude te preguntará antes de escribir la spec.

---

## El contenido de cada bloque

- **Contenido que debe dar el cliente** (testimonios, cifras, fotos reales) — no se inventa: placeholder + "Pendiente cliente".
- **Contenido que redactamos nosotras** (copy, textos descriptivos) — se define aquí mismo.

Ajustes menores de ese contenido pueden resolverse en Fase 3. Decisiones nuevas de contenido (qué comunica el bloque) requieren volver a Fase 2.

---

## Input

El briefing de la página + los índices de módulos (solo la tabla de "cuándo usar"). Opcional: `hallazgos.md` o `arquetipos.md` si hay duda concreta.

Ejemplo de bloque con módulo conocido:
```
ACTUALIDAD POR ÁREAS
Módulo sugerido: CON-006
Título: Historias de nuestros colegios
Contenido: 4-7 últimas noticias del área Colegios. Cada card: imagen, tipo, área, título, fecha.
Formato: Carrusel horizontal con flechas de navegación. CTA "Ver todos" en cabecera.
```

Ejemplo de bloque sin módulo conocido (Claude propone):
```
BUSCADOR CON FILTROS
Contenido: Buscador sobre todo el ecosistema + filtros por Tipo, Área y Categoría.
Formato desktop: campo de búsqueda + filtros como desplegables inline.
Formato mobile: buscador + botón "Filtrar" que abre panel lateral.
Filtros activos: se muestran como chips eliminables. Opción "Borrar todos".
```

---

## Plantillas

- `_guias/plantilla-pagina.md`
- `_guias/plantilla-modulo.md`
- `_guias/plantilla-handoff.md`

> 📎 *(desplegable) Ejemplo de handoff — pega aquí un handoff real completo cuando lo tengas, como referencia)*

---

## Output

El bloque de handoff es lo que pasa a Fase 3 — no la spec completa. Es deliberadamente compacto: Fase 3 no necesita releer todo el criterio de diseño (arquetipo, objetivo, decisiones), solo lo que va a construir, y eso ahorra contexto en la sesión.

El contenido de cada módulo dentro del handoff no tiene un límite estricto de una línea. Si el contenido de un bloque es simple (un título, un CTA), una línea basta. **Si es complejo — una lista de ítems, varios campos, copy largo — no lo fuerces dentro del handoff:** escribe `Ver spec de página → sección Bloques`, y Fase 3 lee esa sección concreta de `docs/_pages/`. El resto de la spec (arquetipo, objetivo, decisiones de diseño) sigue sin cargarse en Fase 3.

La spec de página completa se queda guardada en `docs/_pages/`. Ahí se van acumulando todas las páginas del proyecto — es el catálogo de specs que el siguiente sprint o la siguiente persona va cogiendo según toque.

---

## Checklist de salida — antes de pasar a Fase 3

- [ ] Spec de página rellenada con todos los bloques
- [ ] Cada bloque tiene módulo asignado (o marcado PENDIENTE con módulo nuevo por crear)
- [ ] Módulos nuevos documentados y en el catálogo
- [ ] Contenido pendiente del cliente marcado como tal
- [ ] Bloque de handoff generado y guardado (con referencia a `## Bloques` si algún módulo tiene contenido complejo)
- [ ] `node bin/estado.mjs` ejecutado (regenera ESTADO.md leyendo las specs) y `node bin/check.mjs` sin errores

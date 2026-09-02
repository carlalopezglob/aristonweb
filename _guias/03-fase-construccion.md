# 03 — Fase 3: Construcción

> Guía operativa. Lo que tienes que hacer en cada sesión de construcción, en qué orden, y qué produce esta fase.

---

## Qué es esta fase

**Quién la hace:** cualquier persona del equipo UX que sepa usar Claude Code — no hace falta que sea quien diseñó la página en Fase 2.

**Cuándo:** en cuanto el bloque de handoff de Fase 2 está listo. Una sesión por página, igual que en Fase 2.

**Qué no hacer aquí:** no cambiar el criterio de un bloque (qué comunica, para qué existe) sin volver a Fase 2. Fase 3 construye y ajusta estructura, no redefine contenido ni objetivos — eso pertenece a Fase 2.

---

## Cómo se hace, paso a paso

**1. Declarar la fase y pegar el handoff en Claude Code.** *"Fase 3 — vamos a construir la página X."* Claude Code ya tiene `CLAUDE.md` cargado; con el handoff sabe qué generar, dónde y con qué módulos.

**2. Si hay módulos nuevos pendientes, construirlos primero.** Cuando el handoff tiene `DEPENDENCIAS PENDIENTES`, no se genera la página con huecos: se construye antes el HTML standalone de cada módulo nuevo (`output/modules/<CAT>/`) a partir de su spec, y se añade al índice de su categoría.

**3. Generar el wireframe HTML de la página completa.** Claude lee las specs de los módulos seleccionados (parando en `## Notas para UI`) y monta la página en `output/pages/<sección>/<slug>.html`.

**4. Revisar en el navegador, en los 3 breakpoints.** `npx serve output` — nunca fiarse del preview del editor. Mobile (<768px), tablet (768-1199px), desktop (≥1200px). Comprobar por DOM, no solo visualmente. Verificar interacciones si el módulo las tiene (acordeón, tabs, carrusel, modal).

**5. Ajustar lo que no funcione.** Ver más abajo qué se puede resolver aquí mismo y qué requiere volver a Fase 2. Pedir a Claude ajustes concretos, no "revisa el wireframe entero".

**6. Añadir las anotaciones para UI.** En `window.UX_NOTES`, solo si se piden explícitamente.

**7. Guardar y actualizar el estado.** HTML guardado, spec de página con entrada en el Historial, línea en el changelog, y `node bin/estado.mjs` + `node bin/check.mjs`.

---

## Qué puedes ajustar aquí y qué requiere volver a Fase 2

Es normal que algo definido en Fase 2 no funcione visualmente la primera vez que se ve como HTML real.

**Por tu cuenta:**
- Elegir otra variante del mismo módulo, si la anatomía la cubre
- Añadir un elemento opcional al módulo
- Ajustar el layout responsivo de un módulo
- Reordenar elementos dentro de un bloque

**Requiere volver a Fase 2 antes de proceder:**
- Eliminar un bloque entero de la página
- Añadir un bloque nuevo que no estaba en el handoff
- Cambiar un módulo por otro de categoría distinta
- Modificar qué comunica o qué objetivo tiene un bloque

Cuando el ajuste está en el primer grupo, procede — pero actualiza siempre la spec del módulo para que refleje el estado final. Si cambias algo sin actualizar la spec, la próxima persona que use ese módulo tendrá información incorrecta.

**Al modificar un módulo en Fase 3, actualizar:**
1. `docs/_registry/<CAT>/[módulo].md` — la sección que cambia (Anatomía, Variantes o Comportamiento responsive)
2. `## Historial` del módulo: `[fecha] · v1.X · [qué cambió y por qué se cambió en construcción]`
3. `_context/changelog-global.md` — una línea
4. La sección Bloques de la spec de página si el cambio afecta al contenido del bloque

---

## Anotaciones para UI

Van siempre en `window.UX_NOTES` dentro del HTML — nunca como texto visible en el wireframe. Incluir:

- Comportamientos interactivos esperados (animaciones, transiciones)
- Restricciones del módulo (máximo de ítems, mínimo de cards, etc.)
- Casos edge (qué pasa si el título es muy largo, si no hay imagen)
- Referencia a Figma si hay un frame concreto

```js
window.UX_NOTES = {
  "NombreModulo": "Descripción del comportamiento esperado",
  "Restricción": "Máximo 4 cards en desktop, 2 en mobile",
  "Figma": "https://figma.com/file/..."
};
```

Claude las genera si se las pides. Si no las pides, no las genera.

---

## Input

El bloque de handoff de la página. No hace falta dar de nuevo las specs ni el HTML de los módulos — eso es justo lo que evita el catálogo. El handoff solo indica qué código de módulo va en cada bloque; Claude va al registro (`docs/_registry/` para la spec, `output/modules/` para el HTML) y los lee por su cuenta, directamente del repositorio (parando en `## Notas para UI`).

La única vez que un módulo se "da" es la primera: cuando se define su spec en Fase 2 y se construye su HTML en Fase 3. A partir de ahí queda en el catálogo para siempre — cualquier página futura solo lo referencia por su código, sin redefinirlo.

**Qué no compartir en esta sesión:**
- El contenido de `research/`
- Las guías de `_guias/` — Claude ya las tiene interiorizadas en `CLAUDE.md`
- La spec de página completa — solo su sección `## Bloques`, y solo si el handoff remite a ella para algún bloque con contenido complejo
- Páginas completas de otras secciones "para ver el estilo" — Claude ya importa siempre `output/shared/styles.css` y `wireframe.js`, no necesita ver una página entera para saber cómo se ve el sistema

**Cómo lee la librería de módulos:** Claude nunca carga todos los módulos HTML a la vez. Para copiar el patrón de un módulo concreto, lee solo su archivo standalone en `output/modules/<CAT>/<módulo>.html` (~80-150 líneas) — nunca una página completa que lo use (300-600+ líneas), y nunca el resto de la librería. Si hace falta ver cómo se combinan varios módulos entre sí, se usa `grep -n` para extraer solo ese fragmento, no la página entera.

Si Claude pide algo fuera de esta lista, pregúntate si de verdad lo necesita para la tarea concreta.

---

## Plantillas

- El HTML de cada módulo se genera a partir de su spec en `docs/_registry/` — no hay una plantilla HTML aparte, el patrón sale de la Anatomía documentada.
- Formato de `window.UX_NOTES` — ver ejemplo arriba.

---

## Output

- Wireframe HTML aprobado en `output/pages/<sección>/<slug>.html`
- `window.UX_NOTES` con las anotaciones pedidas
- Specs de módulos actualizadas si hubo cambios durante la construcción
- Spec de página con entrada en el Historial, changelog actualizado, `ESTADO.md` regenerado

**Qué recibe UI:**
- El HTML del wireframe
- Las specs de los módulos usados — especialmente `## Notas para UI` de cada uno
- Acceso al repositorio para leer `window.UX_NOTES`

UI no necesita la spec de página completa, ni `research/`, ni las guías.

---

## Checklist de salida — antes de pasar a UI

- [ ] HTML en `output/pages/<sección>/<slug>.html`
- [ ] Revisado en los 3 breakpoints
- [ ] `window.UX_NOTES` con anotaciones para UI (comportamientos, restricciones, Figma si aplica)
- [ ] Spec de página actualizada (Historial con versión)
- [ ] Changelog actualizado (1 línea)
- [ ] `node bin/estado.mjs` regenerado y `node bin/check.mjs` sin errores
- [ ] Si hay módulos nuevos: están en el catálogo con su spec e HTML

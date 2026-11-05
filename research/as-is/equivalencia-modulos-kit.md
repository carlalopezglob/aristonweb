# Equivalencia — módulos de la auditoría as-is ↔ wireframe-kit

> Cruce de los 24 módulos identificados en `inventario-modulos.md` contra el catálogo del
> `wireframe-kit` (ruta en `proyecto.json` → `kit.ruta`). Sirve para Fase 2: antes de proponer un
> módulo nuevo, comprobar aquí si el kit ya lo cubre.
>
> Verificado código a código contra los índices reales del kit (`wireframe-kit/registry/*.md`) el
> 2026-11-03 — no es una revisión estimada.

| # | Módulo (Ariston, as-is) | Módulo del kit | Nota |
|---|---|---|---|
| 1 | Hero | CAT-CAB-001 | |
| 2 | Contenido media (texto+imagen) | CAT-CON-001 | Variante icono = mismo módulo, cambia el recurso visual |
| 3 | Grid repetible de tarjetas | CAT-CRD-002 (+ CAT-CRD-003 carrusel, CAT-CRD-001 tarjeta suelta) | |
| 4 | Bloque de cifras | CAT-CON-005 | |
| 5 | Banner CTA | CAT-CON-010 | |
| 6 | Galería de imágenes | CAT-CON-013 | |
| 7 | Franja de logos | CAT-CON-011 | |
| 8 | Lista de enlaces | CAT-NAV-006 | Construido este sprint |
| 9 | Bloque de contacto | — | Sin mapeo 1:1 — se compone con CAT-CON-001 + datos, o CAT-FRM-001 si lleva formulario. **Resuelto 2026-11-04:** no hace falta ficha propia, ver `decisiones.md` |
| 10 | Bloque social (iconos) | — | Se valoró como módulo del kit (CAT-COM-013) y se retiró — se compone a mano con CAT-COM-001 cuando haga falta |
| 11 | Formulario | CAT-FRM-001 (+ CAT-FRM-004 si el proceso es multi-paso) | Multi-paso confirmado en CBS (`/solicitud-informacion/`): Google Form embebido, 2 páginas |
| 12 | Encabezado/navegación | CAT-NAV-001 | |
| 13 | Widget flotante | CAT-COM-012 | Construido este sprint |
| 14 | Panel de cookies | CAT-MDL-005 | Construido este sprint |
| 15 | Footer | CAT-NAV-002 | |
| 16 | Lista de datos clave | CAT-CON-017 | Construido este sprint |
| 17 | Lista simple de texto | CAT-CON-009 (marcador "ninguno") | Se valoró como módulo propio (CAT-CON-018) y se retiró — el caso real (icono + texto por ítem) ya lo cubre CAT-CON-009 |
| 18 | Filtros | CAT-FRM-003 (facetado) / CAT-COM-010 (pills simples) | |
| 19 | Paginación | CAT-NAV-004 | |
| 20 | Vídeo embebido (inline) | — | Sin equivalente exacto (CAT-MDL-002 es modal, no inline). Bajo impacto — 1 instancia vista |
| 21 | Callout de dato destacado (con fuente) | CAT-CON-003 (sin el campo "fuente") | Ajuste menor de spec si se necesita, no módulo nuevo |
| 22 | Timeline de hitos con fecha | CAT-CON-008 | |
| 23 | Visor de documento interactivo (flipbook) | CAT-CON-015 | Construido este sprint |
| 24 | Contenedor de pestañas heterogéneo | CAT-CON-016 | Construido este sprint — 💭 su necesidad depende de si T9 se mantiene, ver `propuesta-sistema.md` §6 |

## Huecos reales

Uno, bajo impacto, no urgente — no bloquea Fase 2, se resuelve componiendo módulos existentes
cuando aparezca el caso real:

- **#20 Vídeo embebido inline** — el kit solo tiene vídeo en modal (CAT-MDL-002).

## Historial

- 2026-11-03 · v1.0 · Extraído de `propuesta-sistema.md` §4 a documento propio, para que viva junto
  a `inventario-modulos.md` y sea más fácil de encontrar desde Fase 2. Contenido sin cambios,
  verificado de nuevo contra los índices reales del kit en el momento de moverlo.
- 2026-11-04 · v1.1 · Cerrado el 💭 de la fila #9 (bloque de contacto) — no hace falta ficha propia,
  ver `decisiones.md`. Sale de "Huecos reales": no era un hueco, era una pregunta sin resolver.
- 2026-11-04 · v1.2 · Añadida nota a la fila #11 (Formulario): el caso multi-paso ya no es
  hipotético, confirmado en vivo en CBS (`/solicitud-informacion/`), ver pasada visual en
  `colegio-bs.md`.

# UX Starter — punto de partida para proyectos de wireframes con Claude Code

Plantilla de repositorio para arrancar un proyecto de UX (specs + wireframes HTML) trabajando con
Claude Code, sin tener que reinventar la organización cada vez. Sale de la experiencia real del
proyecto SEK: **el problema no es que Claude no sepa diseñar, es que se le acaba el contexto** por
cargar research, arquetipos y treinta módulos antes de empezar a trabajar.

Este repo resuelve eso con dos cosas: **tres fases con outputs mínimos** entre ellas, y **carga de
contexto por demanda**.

---

## Empezar un proyecto nuevo (10 minutos)

```bash
git clone <url-de-este-repo> mi-proyecto && cd mi-proyecto
git config core.hooksPath .githooks     # bloquea el push directo a main
node bin/check.mjs                      # comprueba que el repo está coherente
```

Luego abre Claude Code en la carpeta y dile: **"Soy nueva en este repo, ayúdame a configurarlo"**.
Te preguntará el nombre del proyecto y las secciones del site, y rellenará `proyecto.json`.

A mano son dos pasos:

1. **`proyecto.json`** — nombre del proyecto, secciones del site y (opcional) ruta al kit de módulos.
2. **`_context/layout-global.md`** — grid, breakpoints y variables CSS del proyecto. Si el cliente
   no tiene aún diseño visual, déjalo con los valores por defecto: son de wireframe en escala de
   grises y funcionan tal cual.

Borra cuando ya no te haga falta el ejemplo: `docs/_pages/_seccion-ejemplo/`,
`docs/_registry/CON/CON-001-*` y `output/pages/_seccion-ejemplo/`.

---

## Las tres fases

| | Fase 1 · Research | Fase 2 · Diseño | Fase 3 · Construcción |
| --- | --- | --- | --- |
| **Quién** | UX lead o quien tenga los docs del cliente | La UX que lleva la página | Cualquiera del equipo con Claude Code |
| **Qué se decide** | Qué sabemos y qué restricciones hay | Qué bloques tiene la página, en qué orden y con qué módulo | Cómo se ve eso en HTML real |
| **Output** | `research/hallazgos.md` | Spec en `docs/_pages/` + **bloque de handoff** | Wireframe en `output/pages/` |

**Una sesión de Claude por fase y por página.** Mezclar páginas o saltar de fase sin cerrar es lo
que agota el contexto. Entre Fase 2 y Fase 3 no se pasa la spec completa: se pasa un **bloque de
handoff** de 20 líneas (`_guias/plantilla-handoff.md`). Eso es el corazón del sistema.

Guías completas, para leer una vez:

- `_guias/00-como-funciona-el-sistema.md` — por qué existe todo esto. **Empieza por aquí.**
- `_guias/01-fase-research.md` · `02-fase-diseno.md` · `03-fase-construccion.md` — el paso a paso
  de cada fase, con su checklist de salida.
- `_guias/04-kit-de-modulos.md` — cómo usar una librería de módulos ya construida.
- `_guias/plantilla-*.md` — plantillas de página, módulo y handoff.

---

## Estructura

```
proyecto.json              config: nombre, secciones del site, ruta al kit
CLAUDE.md                  instrucciones para Claude (lo único que lee siempre)
ESTADO.md                  autogenerado: una fila por página con su estado
docs/_pages/<sección>/     specs de página
docs/_registry/            catálogo de módulos: índice CON.md + carpeta CON/ con las specs
output/                    ÚNICA fuente de wireframes
  ├── pages/<sección>/       páginas
  ├── modules/<CAT>/         módulos standalone
  └── shared/                styles.css + wireframe.js (el sistema compartido)
_context/                  arquetipos, layout global, patrones (PAT-*), mapa de sitio, changelog
research/                  hallazgos, benchmark, links (los PDF del cliente NO van al repo)
_guias/                    documentación para personas — Claude no la lee
bin/                       estado.mjs · check.mjs · importar-kit.mjs
```

---

## Comandos

```bash
npx serve output          # preview de los wireframes (URLs sin .html)
node bin/estado.mjs       # regenera ESTADO.md leyendo las specs y los wireframes
node bin/check.mjs        # valida el repo: enlaces rotos, specs sin HTML, módulos sin índice
node bin/importar-kit.mjs --modulos CON-001,CRD-002   # trae módulos de un kit externo
```

O con npm: `npm run serve` · `npm run estado` · `npm run check` · `npm run importar-kit`.

Dentro de Claude Code hay comandos de barra para lo mismo: `/fase-1`, `/fase-2`, `/fase-3`,
`/modulo-nuevo`, `/estado`, `/kit`, `/subir`.

---

## El kit de módulos

Hay un `wireframe-kit` aparte con ~47 módulos HTML ya construidos y documentados (heroes, grids de
cards, acordeones, formularios, modales…). **No está dentro de este repo a propósito**: pesa y
cargarlo en cada sesión sale caro. Se referencia desde `proyecto.json` y, si el equipo decide
adoptar módulos concretos, se importan con `bin/importar-kit.mjs` — que además les quita los paneles
de catálogo y normaliza los nombres.

Cualquier otra librería vale igual. Lo único que el proyecto necesita es: spec en `docs/_registry/`
+ HTML en `output/modules/`. Ver `_guias/04-kit-de-modulos.md`.

---

## Reglas del equipo

- **Nunca push directo a `main`**: rama + Pull Request, siempre. `git config core.hooksPath .githooks`
  lo bloquea localmente.
- **No se inventa contenido real** (testimonios, cifras, fotos): placeholder + "Pendiente cliente".
- **Las notas para UI van en `window.UX_NOTES`**, nunca visibles en el wireframe.
- **Los documentos del cliente no van al repo**: quedan en Drive/Notion con una línea en
  `research/links.md`.
- **Verificar los wireframes por DOM/JS, no con capturas**: en sesiones largas las capturas salen
  grises y gastan tokens sin aportar nada.

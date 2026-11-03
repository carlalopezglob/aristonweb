# Research — Propuesta de plantillas

> **Qué es este archivo.** Espejo escrito, completo, de los dos frames de "Templates Proposal"
> que se están construyendo en Figma — no un resumen, el contenido real (secuencias de módulos,
> páginas, razonamiento) tal como está en Figma ahora mismo. Se actualiza cada vez que se toca
> cualquiera de los dos frames, para que no exista información que viva solo en Figma.
>
> Dos frames separados a propósito, no combinados todavía:
> - **Institucional** — Figma `3. Templates Proposal — Institutional` (node `6:2`)
> - **Coles Piloto** — Figma `3. Templates Proposal — Coles Piloto` (node `68:167`)
>
> **Por qué separados:** se mezclaron sin querer una vez (2026-11-03) y la propietaria del
> proyecto pidió deshacerlo — institucional y coles se trabajan y se leen por separado hasta que
> se haga explícitamente una versión combinada del sistema completo. No dar por hecho una fusión
> sin que se pida.

---

## Institucional (`6:2`)

**Método (texto de la cabecera del frame):** "Pages that share an (almost) identical module
sequence are grouped into one template; a page with a structurally unique sequence becomes its
own template. This is a proposal to validate — not a final decision."

**Cifras:** 9 páginas auditadas · **5** plantillas candidatas · presupuesto cliente 10–12
(sistema completo) · 15 módulos catalogados (cifra de cuando se auditó institucional, no
actualizada desde entonces — el catálogo compartido ya va por 24, ver `as-is/inventario-modulos.md`).

### T1 — Home
**Páginas:** Home
**Secuencia:** Header → Hero → Card Grid (Pillars) → Featured Quote → Stats Block → CTA Banner →
Card Grid (News) → Footer
**Razonamiento:** Unique sequence — no other page matches it. Kept as its own template.

### T2 — Content Page
**Páginas:** Who we are · Mission, vision & values · Educational Pillars · Global Student
Advisory Board
**Secuencia:** Header → Hero → Content Block (repeated N times) → optional Simple List / Stats
Block / Stat Callout / Card Grid (FAQ) / Contact Block / Timeline / CTA Banner (with steps) →
Footer.
**Razonamiento:** Same skeleton, different number and mix of repeated content blocks. Decision
made this round: Global Student Advisory Board folds in here too (was T6) — its
FAQ/Timeline/Contact Block are all optional slots this template already supports, not a reason
for its own template. Mirrors the same resolution made on the coles-piloto side (T6 — RESOLVED
there), keeping both proposals consistent ahead of the combined system-wide version.

### T3 — Directory — People
**Páginas:** Leadership Team
**Secuencia:** Header → Hero → Anchor Navigation → Card Grid (People, 3 tiers) → Footer
**Razonamiento:** Unique today — but the same shape as any future staff or alumni directory.

### T4 — Directory — Schools
**Páginas:** Find a School
**Secuencia:** Header → Hero → Filters (faceted) → Card Grid (Schools) → Key Facts List → Footer
**Razonamiento:** Structurally close to Directory — People; kept separate for now because of the
faceted filters and Key Facts List.

### T5 — Listing
**Páginas:** Insights · News & Events
**Secuencia:** Header → Hero → optional Filters (simple) → Card Grid (Articles) → Footer
**Razonamiento:** Identical structure on both pages today. Strongest merge candidate of the whole
audit.

### T6 — RESOLVED — Program / Initiative Detail (folded into T2)
**Páginas:** Global Student Advisory Board
**Secuencia:** Header → Hero → Content Block → Stat Callout → Card Grid (FAQ) → Contact Block →
Timeline → CTA Banner (with steps) → Footer — all optional slots now available directly in T2.
**Razonamiento:** Resolved: folds into T2 as its richest variant (uses every optional slot at
once). Decision confirmed after auditing all 3 coles piloto and finding zero pages needing this
exact shape — see the matching resolution on "3. Templates Proposal — Coles Piloto". Row kept
here (not deleted) so the audit trail stays visible. Net template count: 6 → 5.

*(Este frame no tiene bloque "Open Questions"/conclusión final — termina en la tabla.)*

---

## Coles Piloto (`68:167`)

**Alcance (texto de la cabecera del frame):** "Scope: coles piloto ONLY (Alminar + CBS + CEDES,
141 pages) — institucional's own proposal lives separately in frame '3. Templates Proposal —
Institutional' (T1–T6 there, not combined here). Numbering intentionally skips T3/T4/T6: those
are institucional-only templates (Directory — People, Directory — Schools, Program/Initiative
Detail) with zero colegio pages matching them so far — kept out of this view, tracked in the
institucional frame. A combined, system-wide template count comes later once both sides are
reconciled."

**Cifras:** 141 páginas auditadas (Alminar 31, CBS 70, CEDES 40) · **7** plantillas en uso (3
nuevas: T8-T10) · presupuesto cliente 10–12 (sistema completo, no solo coles) · 24 módulos
catalogados (catálogo compartido).

### T1 — Home (flexible)
**Páginas:** Alminar Home · CBS Home · CEDES Home
**Secuencia:** Header → Hero → flexible repeatable zone (Card Grid / Content Block / Stats Block
/ Logo Strip / Image Gallery / Form — any count & order) → optional CTA Banner → Footer.
**Razonamiento:** All 3 colegio homes converge on one flexible skeleton. CEDES is the key
validation case, not just another sample — per the client's kickoff transcript, Alminar and CBS
are clean-slate independent pilots with no inherited template, while CEDES already runs on one of
the client's existing legacy group templates. That CEDES's home still fits confirms the template
generalises to the ~18 remaining schools, most of which (like CEDES) are migrating off an
inherited template rather than starting from zero. Reconciliation with institucional's own Home
template is pending the combined system-wide version.
**Ejemplo (captura en Figma):** CBS — Home

### T2 — Content Page (flexible)
**Páginas (46, verificadas una por una contra su secuencia real de módulos, no estimadas):**
CEDES Nuestra Historia · CEDES Proyecto Educativo y Currículo · CBS Carta del Director · CBS
Ideario · CBS Acerca de Ariston Education · CEDES Quiénes somos · CEDES Primaria / Secundaria /
Bachillerato / Infantil (las 4 páginas de etapa de CEDES) · CEDES Política de Calidad /
Accreditaciones · CEDES Ariston Education · CEDES Enseñanza 100% bilingüe · CEDES Proyecto
Solidario · CEDES Actividades Extraescolares · CEDES Comedor Escolar · CEDES Orientación
Educativa · CEDES Información General de Contacto · CEDES Política de cookies / privacidad /
Aviso legal · CBS Carta de la Directora Ejecutiva · CBS Himno del CBS · CBS Conferencia 2016–2019
(4 archivadas) · CBS Calidad · CBS Instalaciones · CBS Calendario escolar · CBS Comedor · CBS Apps
del CBS · CBS Alumni · CBS Departamento Psicopedagógico y de Apoyo · CBS Acreditaciones · CBS
Inspecciones Nabss · CBS Work Experience · CBS Globot · CBS Expedientes y convalidaciones · CBS
Contacto · Alminar Comedor · Alminar Transporte escolar · Alminar Uniformidad · Alminar Aula
matinal · Alminar Políticas escolares · Alminar Etapas educativas
**Secuencia:** Header → Hero (opcional — ausente en todas las páginas de CBS, presente en las de
CEDES) → repeated Content Block (+ optional Simple List / Stats Block / Stat Callout / Image
Gallery / Social Block-share / List of Links-sidebar / Breadcrumb / Card Grid-'what's next' /
Card Grid-FAQ / Form / Logo Grid / Accordion Expandable) → optional CTA Banner → Footer.
**Razonamiento:** The most reused template among the coles — 46 pages across Alminar, CEDES and
CBS once "Breadcrumb" (CBS Conferencias) and the sidebar/share/related-card slots (CEDES) are
read as optional additions to the same skeleton — verified page by page against each card's real
module sequence, not estimated. 2 pages initially assumed to be T2 turned out to be a different
shape on closer check: CBS "Programa Educativo (overview)" (Hero + Card Grid, no Content Block —
moved to T5) and CEDES "Puertas Abiertas (Open Days)" (has a Form — same page as "Jornada de
Puertas Abiertas", already in T7, not a separate instance). Whether this merges with
institucional's own Content Page template (T2 there too — same shape, not yet reconciled) is a
question for the combined system-wide version. ⚠️ Convergence open question: CEDES's stage pages
(Primaria/Secundaria/Bachillerato/Infantil) land here, but CBS's equivalent stage pages
(EYFS/Primary/Secondary/Sixth Form) land in T8 — same real content (a school stage/curriculum
page), two structurally different as-is shapes (this one has Hero + Key Facts List + Social Share
+ Card Grid; T8's has no Hero, a Simple List of Subjects, Handbooks and a CTA). Not something to
resolve by auditing — it is a Fase 2 decision: which shape becomes the single future standard for
all schools, or whether a new unified shape is designed. See T8. ⚠️ Convergence pattern, 3rd case
found: Alminar writes a real Content Block intro before its service-page lists (Comedor,
Transporte, Uniformidad, Políticas escolares — all added here) — CBS/CEDES often skip it and ship
a bare list instead (CBS Uniforme escolar, CBS/CEDES Transporte, CEDES Políticas Escolares — left
unclassified, see Pendiente). Same "which school's version becomes the standard" question as the
stage-page case above. ⚠️ Same pattern again in legal pages: CEDES's (Aviso legal/Privacidad/
Cookies) have a Content Block + Accordion and count here; CBS's are just a bare "Legal Text
Block", no Content Block, and don't (see Pendiente).
**Ejemplo (captura en Figma):** CEDES — Nuestra Historia

### T5 — Listing
**Páginas:** Alminar Noticias · CBS Conferencias (archivo) · CBS Nuestro Colegio — Servicios
(hub) · CBS Extraescolares (overview hub) · CBS Programa Educativo (overview)
**Secuencia:** Header → Hero → optional Filters (simple or tabbed) → Card Grid (Articles /
Services / Resources) → optional Pagination → Footer.
**Razonamiento:** Generalised "Card Grid (Articles)" to also cover service/resource hubs — CBS's
Servicios hub and Extraescolares overview use the exact same shape (filtered grid linking to
detail pages), just with a tabbed filter instead of simple pills. 5 real instances among the
coles. CBS "Programa Educativo (overview)" added after checking its real module sequence (Hero +
Card Grid linking to the 4 Key Stage pages) — same hub shape as the other hubs here, not the
Content Page shape it was first assumed to be.
**Ejemplo (captura en Figma):** Alminar — Noticias

### T7 — Admissions / Enrolment
**Páginas:** Alminar Admisiones · CBS Admisiones · CBS Admisiones (overview + Por qué CBS) · CBS
Solicitud de Información · CBS Admisiones — 5 secciones (acordeón) · CEDES Contacto Admisiones ·
CEDES Jornada de Puertas Abiertas · CBS Jornadas de Puertas Abiertas · CBS Preguntas Frecuentes
**Secuencia:** Header → Hero (often multichannel CTAs) → flexible content zone (Content Block /
Simple List / Form / Card Grid-numbered steps / Accordion Expandable) → optional CTA Banner →
Footer.
**Razonamiento:** 12 real instances across all 3 coles (verificado página por página, no
estimado) — confirmed as one of the highest-leverage templates in the system, not a 2-page
curiosity. Se añade CBS "Preguntas Frecuentes" (Admissions FAQ) tras la revisión completa. Nota:
CEDES "Puertas Abiertas (Open Days)" y "Jornada de Puertas Abiertas" son la misma página real bajo
dos etiquetas de navegación (captura duplicada confirmada) — cuenta una vez, no dos. ⚠️ Scope
caveat from the E2
interview (Paz Guadamillas, Aniol Javaloyes): in EMEA, the real application/enrolment happens on
an EXTERNAL Orbital portal, not the website — this template covers enquiry, lead-gen and
visit-booking only, NOT document upload, offer or payment. That hand-off needs its own UX
treatment (clear exit point + domain-change messaging), not more modules inside this template.
**Ejemplo (captura en Figma):** CBS — Admisiones

### T8 — NUEVO — Activity / Programme Detail
**Páginas:** CBS Extraescolares — Ballet, Fútbol, Judo… +11 más (15 en total) · CBS EYFS /
Primary / Sixth Form +1 más (4 Key Stages en total)
**Secuencia:** Header → Hero → optional Breadcrumb → Content Block → Simple List (Benefits OR
Subjects) → optional List of Links (Handbooks) → CTA (external form OR CTA Banner) → Footer.
**Razonamiento:** The single most-repeated page shape in the whole system: 19 real instances on
CBS alone (15 extracurricular activities + 4 Key Stages), all sharing one skeleton once
"Benefits" and "Subjects" are read as the same flexible Simple List slot. Previously an open
question ("CBS has a real, repeated detail-page pattern — worth a dedicated template?") — now
confirmed at scale. Every one of the 21+ schools will have activities and stages, so this is
high-leverage even though it only appears on CBS among the 3 piloted sites so far. ⚠️ Convergence
open question: the 4 Key Stage pages here are the same real content as CEDES's Primaria/
Secundaria/Bachillerato in T2, built in a structurally different as-is shape. Both can't stay the
long-term standard for the same page type — see T2 for the full comparison. Flagging for Fase 2,
not resolving it here.
**Ejemplo (captura en Figma):** CBS — Extraescolares / Fútbol

### T9 — NUEVO — Long-form Tabbed Page
**Páginas:** Alminar El Colegio (8 pestañas) · Alminar Proyecto Educativo (11 pestañas)
**Secuencia:** Header → Hero → Tabbed Content Container (#24 — N tabs, each holding any other
module, incl. nested tabs) → Footer.
**Razonamiento:** Given its own template rather than folded into T2, because the owning module
(#24) is a single heterogeneous container, not a sequence of optional modules like every other
template here — a page built this way can't be described as "Content Block repeated," it's "N
tabs of arbitrary content." Only 2 real instances so far (both Alminar), but each compresses what
institucional spreads across many nav pages (El Colegio alone covers Who-we-are + Team +
Facilities + Directions in one URL) — worth tracking separately to see if other coles converge on
it or if it stays an Alminar-specific legacy pattern. Nota: Alminar "Gabinete de Psicología y
Logopedia" también usa el módulo #24 (8 pestañas), pero lo envuelve con su propio Content Block +
Contact Block — no encaja limpiamente en la secuencia mínima de esta plantilla, así que no cuenta
como 3ª instancia. Flaggeado para que no se pierda, no sumado a la cifra.
**Ejemplo (captura en Figma):** Alminar — El Colegio / Quiénes somos

### T10 — NUEVO — Account Access / Login
**Páginas:** Alminar Acceso Familias · CBS Acceso Usuarios
**Secuencia:** Header → Hero (optional) → Form (login — username/password or SSO, platform
varies by school) → optional Card Grid (Quick Access) / CTA Banner → Footer.
**Razonamiento:** Not content in the usual sense — a login gateway to a family/student portal
(Phidias for CBS, unnamed for Alminar). Kept as its own light template rather than squeezed into
T7 Admissions (different purpose: existing families, not prospects) or T2 Content (has a real
Form, not just text). Low design cost — mostly a Form (#11) instance — but worth a named template
since every school will have one and the platform it points to varies.
**Ejemplo (captura en Figma):** CBS — Acceso Usuarios

### Conclusión del frame — "Reading for the coles piloto scope"

7 templates in use across the 3 pilot schools at full site coverage (141 pages): T1, T2, T5,
T7–T10. T3, T4 and T6 are institucional-only (zero colegio pages match them) — tracked separately
in "3. Templates Proposal — Institutional", not counted here. T8 (Activity/Programme Detail) is
the highest-confidence new addition: 19 real instances on CBS alone, the single most-repeated
page shape found anywhere in the audit. T9 (Long-form Tabbed Page) and T10 (Account
Access/Login) have only 2 instances each so far — worth re-checking once more coles are audited to
see if they generalise or stay Alminar/CBS-specific. T7 Admissions now carries an explicit scope
caveat from the E2 interview: it covers enquiry/visit-booking only, the deep funnel lives on an
external portal in EMEA. Reconciling this 7-template coles view against institucional's own 6
templates (T1–T6) into one system-wide count, against the 10–12 client budget, is the next step —
not done in this frame. Updated coverage after verifying T2/T5/T7 page by page (2026-11-03): T1
(3) + T2 (40) + T5 (5) + T7 (12) + T8 (19) + T9 (2) + T10 (2) = **83 of 141 audited pages**
concretely mapped to one of the 7 templates. The other 58 are legal pages (CBS's, structurally
thinner than CEDES's — see T2), duplicate/alias cards, sub-heading "pages" that aren't real
separate URLs, flipbook documents (module #23, not a page template), a 2-instance "Values Card
Grid" pattern (CBS 5 B's + CEDES Nuestra Ética), and 9 genuinely one-off pages that don't match
any of the 7 shapes — see `plantillas.md` → Pendiente for the full list and the open question of
what to do with them. ⚠️ Flagged, not resolved: T2 and T8 both contain "school stage /
curriculum" pages (CEDES's Primaria/Secundaria/Bachillerato vs CBS's EYFS/Primary/Secondary/Sixth
Form) built in two incompatible as-is shapes today. Unlike Home (already validated as one shape
across all 3 colegios), this page type has NOT converged — picking the future standard shape (or
designing a new one) is a Fase 2 decision, not implied by which template a page happens to sit in
here.

---

## Pendiente

- **Decidir el estándar futuro para "página de etapa/currículo"** (Fase 2): CEDES construye estas
  páginas con la forma de T2 (Content Page) y CBS con la forma de T8 (Activity/Programme Detail) —
  mismo contenido real, dos moldes incompatibles hoy. Hay que elegir cuál gana (o diseñar uno
  nuevo) para que los 21+ coles futuros usen todos la misma plantilla aquí, igual que ya se validó
  con Home. Flaggeado en Figma (filas T2, T8 y el bloque de conclusión del frame) — no resuelto.
- ~~Añadir capturas de ejemplo al frame institucional~~ — hecho 2026-11-03: columna "EXAMPLE"
  añadida a las 6 filas de `6:2` (Home, Who we are, Leadership Team, Find a School, Insights,
  Global Student Advisory Board), mismo patrón que Coles Piloto.
- ~~Completar T2~~ — hecho 2026-11-03: 46 páginas (9 CEDES/CBS originales + 31 CEDES/CBS
  verificadas + 6 de Alminar) verificadas una por una contra su secuencia real de módulos, no por
  nombre, y reflejadas en Figma (fila T2 + `3b`) y arriba.
- **Las 3 páginas de servicio sin plantilla (CBS Uniforme escolar, CBS/CEDES Transporte, CEDES
  Políticas Escolares) y las 3 legales de CBS NO son huérfanas sueltas — son el lado "pobre" de
  una divergencia ya confirmada 3 veces** (etapa/currículo, legal, y ahora servicio): Alminar
  escribe un Content Block de verdad antes de sus listas; CBS/CEDES muchas veces no. Misma
  decisión de Fase 2 que las otras dos — no resuelto aquí, solo dejado de clasificar hasta que se
  decida el estándar.
- **Las 5 páginas realmente huérfanas, y si encajarían en otro formato trabajándolas distinto**
  (pregunta de la propietaria del proyecto, 2026-11-03) — comprobado módulo por módulo: las 5
  podrían pasar a T2 sin inventar nada nuevo, **con un único cambio: añadirles un párrafo de
  introducción (Content Block)** delante de lo que ya tienen. Ninguna necesita un módulo que T2 no
  contemple ya:
  - CBS Historia del CBS — tiene Timeline (ya opcional en T2 del lado institucional) → con intro, T2
  - CBS Sistema de casas — tiene Card Grid + Simple List → con intro, T2
  - CBS Logros Académicos — tiene Stats Block (ya opcional en T2) + Carousel → con intro, T2
  - CEDES Instalaciones — tiene Simple List + List of Links-sidebar (ambos ya opcionales en T2) → con intro, T2
  - CEDES Otros Servicios — tiene Simple List (ya opcional en T2) → con intro, T2

  O sea: no es que falte una 8ª plantilla — es que estas 5 páginas (como las de servicio/legal de
  arriba) se construyeron sin párrafo de intro en el cole original. En el rediseño, si T2 exige
  Content Block, estas páginas solo necesitan ese único bloque añadido para encajar sin fricción.
  No se ha aplicado el cambio (es una recomendación de build, no una reclasificación del as-is) —
  queda para cuando se trabajen estas páginas en Fase 2/3.
- **Patrón con 2 instancias, no suficiente para plantilla propia:** CBS "5 B's Valores" y CEDES
  "Nuestra Ética" son ambas una página de Card Grid de valores sin Content Block — mismo molde,
  justo 2 casos. Vigilar si aparece una 3ª en otro cole.
- **Recordatorio para la arquitectura inicial (Fase 2):** el frame `3b` es una galería curada, no
  el inventario completo — p. ej. T8 solo muestra 2 de las 19 páginas reales de actividad/etapa
  (Ballet + Danza Urbana como ejemplo, más los 4 Key Stages y Summer Camp) y T2 solo muestra 2 de
  las 4 Conferencias archivadas. El recuento real por plantilla vive en la tabla de arriba
  (columna "Páginas" de cada T-fila) y en las cifras de cada plantilla, no en cuántas columnas
  tiene `3b` — no dar por hecho que son todas al diseñar el sitemap.
- **13 "páginas" que no son páginas reales**, descontadas de cualquier plantilla (no del total de
  141 auditadas — ver nota siguiente): 10 son subtítulos dentro de la misma página CEDES "Proyecto
  Educativo y Currículo" (confirmado en el DOM — sin anchor, sin tab, un visitante solo hace scroll)
  y 3 son alias/redirects a páginas ya contadas (CEDES "Nuestro Colegio overview"→"school-overview",
  "Vida Escolar overview"→Comedor Escolar, "Contacto overview"→Contacto Admisiones). **No se han
  borrado del Page Audit ni renumerado las cards** — se quedan ahí como evidencia de la
  verificación (cada una documenta por qué no es una página real). Si en algún momento se quiere
  que el "141 páginas auditadas" de las cabeceras sea 100% páginas reales y distintas, el número
  correcto sería 128 (141 − 13) — cambio no aplicado, afecta a varias cabeceras/stats a la vez y
  no se ha pedido.
- T9 en `3b` solo muestra la pestaña 1 de cada página tabulada (Alminar El Colegio 1/8, Proyecto
  Educativo 1/11) como representativa — el resto de pestañas de cada página está en el Page Audit
  de Alminar, no repetido aquí.
- **Reconciliar ambos frames en una versión de sistema completo**, contra el presupuesto de
  10-12 plantillas del cliente. T1/T2/T5 ya están alineados en forma entre los dos lados (mismos
  números, secuencias casi idénticas) — la fusión ahí debería ser mecánica. T7-T10 son
  exclusivamente de coles por ahora. **Aplazado explícitamente** (2026-11-03) — se retoma más
  adelante.
- ~~Confirmar si T9/T10 generalizan a más coles~~ — cerrado 2026-11-03: no se van a auditar más
  coles por ahora (decisión explícita de la propietaria del proyecto), así que se quedan
  confirmadas en 2 instancias cada una con el dato disponible. Si en el futuro se audita otro cole,
  revisar si aparece una 3ª instancia de cualquiera de los dos.
- ~~Patrón "Values Card Grid" (CBS 5 B's + CEDES Nuestra Ética)~~ — mismo cierre: se queda en 2
  instancias, no se audita más por ahora.
- ~~Actualizar la cifra de "15 módulos catalogados" del frame institucional~~ — hecho 2026-11-03:
  ahora dice "24 — MODULES CATALOGUED (SHARED CATALOGUE)".

---

## Historial

- 2026-11-03 · Se cierran varios pendientes sueltos, dejando aparte explícitamente la
  reconciliación institucional+coles en un sistema único (aplazada a petición de la propietaria
  del proyecto, "ahora lo hacemos después"): (1) columna "EXAMPLE" añadida a las 6 filas del frame
  institucional (`6:2`), mismo patrón que coles — el frame crece de 1168 a 1368px vía auto-layout,
  sin tocar nada a mano; (2) cifra de módulos del frame institucional corregida de "15" a "24
  (shared catalogue)"; (3) T9/T10 y el patrón "Values Card Grid" se cierran como "2 instancias
  confirmadas, no se audita más" ya que no habrá más auditoría de coles; (4) se documenta que el
  "141 páginas auditadas" incluye 13 cards que no son páginas reales (ya detectado antes) — no se
  renumera ni se borra nada, solo se dice cuál sería el número correcto (128) si algún día se
  quiere ese nivel de precisión.
- 2026-11-03 · Tras completar T2, se revisan también las 8 páginas de Alminar que seguían sin
  clasificar (fuera del alcance original "+16 de CEDES y CBS"): 6 tienen Content Block real y
  pasan a T2 (Comedor, Transporte escolar, Uniformidad, Aula matinal, Políticas escolares, Etapas
  educativas) — T2 pasa de 40 a 46 páginas. 1 (Extraescolares) ya estaba correctamente excluida
  (es un PDF externo, no una página web). 1 (Gabinete de Psicología y Logopedia) usa el módulo de
  pestañas #24 pero con bloques extra que T9 no define — se flaggea en la fila T9 sin sumarla como
  instancia. Comparando Alminar vs CBS/CEDES para el mismo tipo de página aparece un **3er caso de
  la misma divergencia** ya vista en etapa/currículo y en legal: Alminar escribe Content Block
  antes de sus listas de servicio, CBS/CEDES muchas veces no — flaggeado en la fila T2 de Figma y
  en Pendiente, igual que los otros dos casos. La propietaria del proyecto pregunta si las 5
  páginas realmente huérfanas podrían encajar en otro formato trabajándolas distinto: se comprueba
  módulo por módulo que las 5 ya usan únicamente módulos que T2 contempla como opcionales (Timeline,
  Stats Block, Simple List, List of Links) — solo les falta el párrafo de introducción (Content
  Block) que si se añadiera en el rediseño, encajarían en T2 sin inventar nada. Recomendación
  dejada en Pendiente para Fase 2/3, no aplicada al as-is. También se recorta el frame `3b`
  (propietaria del proyecto, directamente en Figma): T8 de 19 a 7 columnas (2 ejemplos de
  actividad + los 4 Key Stages + Summer Camp) y T2, por el mismo criterio, de 4 a 2 Conferencias
  archivadas — galería representativa, no inventario completo; aviso añadido en Pendiente para que
  no se pierda de vista al hacer la arquitectura inicial.
- 2026-11-03 · Se completa T2 con datos verificados en vez de la estimación "+16 más": se revisa
  el texto real "MODULES IDENTIFIED" de las 66 páginas de CBS+CEDES que quedaban sin clasificar
  (no se adivina por nombre). Resultado: 31 páginas nuevas encajan en T2 de verdad (tienen Content
  Block real) — T2 pasa de 9 a 40 páginas. Por el camino se detectan y corrigen 2 errores: CBS
  "Programa Educativo (overview)" no tiene Content Block (es Hero+Card Grid, igual que los otros
  hubs) → movida a T5 (4→5 instancias). CEDES "Puertas Abiertas (Open Days)" tiene el mismo hash de
  imagen que "Jornada de Puertas Abiertas" (ya en T7) — mismo documento confirmándolo ("Same
  rendered page as Open Days... confirmed duplicate/alias") → no se añade como instancia nueva,
  solo se corrige el conteo de T7 de "~16" (estimado) a 12 (verificado), sumando CBS "Preguntas
  Frecuentes" que sí es nueva. Reflejado en Figma: fila T2/T5/T7 (pills, secuencia, razonamiento)
  y las 33 columnas nuevas en `3b` (`68:293`). Quedan fuera, flaggeadas en **Pendiente**: 9 páginas
  que no encajan en ningún template, un patrón de 2 instancias (Values Card Grid), la divergencia
  CEDES/CBS en páginas legales, y 13 "páginas" que no son páginas reales (subtítulos y alias) y
  deberían restarse del total de 141 si se quiere que sea 100% páginas reales — nada de esto se ha
  resuelto, solo documentado para decidir.
- 2026-11-03 · La propietaria del proyecto señala que T2 y T8 contienen, bajo nombres de template
  distintos, el mismo tipo real de página — "etapa/currículo" (CEDES Primaria/Secundaria/
  Bachillerato vs CBS EYFS/Primary/Secondary/Sixth Form) — y pregunta si eso tiene sentido de cara
  al objetivo del rediseño (un sistema único para los 21+ coles, no una tipología distinta por
  cole). Se verifica comparando las secuencias de módulos reales de ambos grupos de páginas: son
  estructuralmente distintas hoy (CEDES tiene Hero + Key Facts List + Social Share + Card Grid;
  CBS no tiene Hero y usa Simple List de Subjects + Handbooks + CTA — la misma forma que sus
  páginas de actividad extraescolar, confirmado comparando con "Extraescolares — Fútbol"). La
  clasificación en T2/T8 es correcta por esqueleto estructural (coherente con la metodología del
  proyecto), pero eso no resuelve la pregunta real: de cara al futuro, "etapa/currículo" debería
  converger en una única plantilla para todos los coles (como ya pasó con Home), y hoy no converge
  — es una decisión de Fase 2 pendiente, no algo que el audit de Fase 1 deba zanjar. Se flaggea
  explícitamente en Figma (texto ⚠️ añadido en las filas T2 y T8, cruzado entre ambas, más una
  línea en el bloque de conclusión "Reading for the coles piloto scope" del frame `68:167`) y aquí
  en **Pendiente**.
- 2026-11-03 · Se detecta que existía un tercer frame en Figma, `3b. Full Page References by
  Template — Coles Piloto` (`68:293`), construido antes de esta ronda de trabajo y desactualizado:
  su cabecera decía literalmente que solo T1 tenía páginas de coles auditadas y los otros 6
  templates no tenían nada que agrupar — ya no era cierto. Se rellena con 47 páginas nuevas
  repartidas en 6 grupos nuevos (T2: 9, T5: 4, T7: 11, T8: 19, T9: 2, T10: 2), cada una con su
  propia captura real reutilizada del Page Audit correspondiente (mismo hash de imagen que ya
  estaba subido, sin recapturar nada). A diferencia de T1 (que usa un stack de 5-7 capturas por
  página, el scroll completo), estas 47 usan 1 sola captura por página — decisión explícita de la
  propietaria del proyecto ("reusar capturas y añadir más si se necesitan") para no tener que
  volver a navegar y capturar scroll completo de 47 páginas. T8 se reconstruyó a partir de los
  nombres reales de las 19 cards de CBS (14 Extraescolares + CBS Summer Camp + EYFS/Primary/
  Secondary/Sixth Form) para que cuadrara exactamente con "19 instancias" ya documentado. T2 se
  dejó deliberadamente incompleto (9 de ~25) porque las "+16 más" nunca se desglosaron por nombre
  en ningún sitio — añadirlas habría significado inventar cuáles son. Cabecera del frame
  actualizada para reflejar esto. Pendiente: completar T2 si se identifican las 16 páginas
  restantes, y aplicar el mismo tratamiento al frame institucional si se pide.
- 2026-11-03 · Se añade una columna "Example" a las 7 filas de la tabla de Coles Piloto (`68:167`)
  en Figma, con una captura real reutilizada de las cards del Page Audit correspondiente (mismo
  hash de imagen, sin volver a capturar ni a subir nada — así no hay riesgo de que Figma recolecte
  la imagen original) más una etiqueta colegio/página. Una imagen por plantilla: T1 CBS-Home, T2
  CEDES-Nuestra Historia, T5 Alminar-Noticias, T7 CBS-Admisiones, T8 CBS-Extraescolares/Fútbol, T9
  Alminar-El Colegio/Quiénes somos, T10 CBS-Acceso Usuarios. Las filas crecen de 1140 a 1340px de
  ancho, dentro de los 1364px del frame — sin recortes. Reflejado aquí con un campo **Ejemplo** por
  plantilla. Pendiente el mismo tratamiento en el frame institucional.
- 2026-11-03 · Se detecta y corrige que el frame de Coles Piloto mezclaba páginas/cifras de
  institucional (pills de Home/Who we are/Mission-vision-values/Educational Pillars/Insights/News
  & Events, y las filas T3/T4/T6 que son 100% institucional) — se separan los dos frames. Se
  añaden 3 plantillas nuevas al lado de coles: T8 (Activity/Programme Detail, 19 instancias en
  CBS — la más repetida del sistema), T9 (Long-form Tabbed Page, Alminar, usa el módulo nuevo
  #24), T10 (Account Access/Login). T7 Admisiones recibe la advertencia de alcance de la
  encuesta E2 (portal externo en EMEA). Se resuelve T6 (Program/Initiative Detail, antes
  "candidata a fusionar, pendiente de Fase 2") → se fusiona en T2, **en los dos frames**
  (institucional y coles), para que ambos lados queden consistentes antes de la versión
  combinada. Candidatas netas: institucional 6→5, coles 7 (T6 no contaba ahí, ya era
  institucional-only).
- 2026-11-03 · Creado este archivo con un resumen en tabla; **reescrito el mismo día** como
  espejo completo (secuencias de módulos y razonamiento verbatim, no solo tabla-resumen) a
  petición explícita de la propietaria del proyecto — el registro escrito debe reflejar todo lo
  que hay en Figma, no solo un índice.

# Inventario maestro de módulos — catálogo por tipología estructural

## Método

Un módulo se define por su **esquema de campos** (qué tipos de contenido
acepta: título, subtítulo, texto, imagen, CTA/links, repetición de items...),
no por su propósito de negocio ni por el contenido que lleva puesto. Si la
misma estructura de campos aparece en otro sitio con algún campo opcional
vacío (p. ej. sin CTA), **sigue siendo el mismo módulo**, no uno nuevo — solo
se anota como variante. Dos bloques solo se consideran módulos distintos
cuando su esquema de campos es realmente distinto (p. ej. "texto+imagen" vs.
"grid repetible de tarjetas").

**Estado:** cubre las 4 homes + cuatro tandas de páginas internas.
**Institucional está auditado al 100% de sus 9 páginas de nav** (home, Who
we are, Mission/vision/values, Leadership team, Educational pillars,
Global Student Advisory Board, Insights, News & events, Find a school).
**Los 3 coles piloto están al 100% de su navegación mapeada** (toda página
alcanzable desde el menú, auditoría profunda solo en las estructuralmente
relevantes) — ver detalle en `colegio-alminar.md`, `colegio-bs.md` y
`colegio-cedes.md`, y el resumen de la 4ª tanda más abajo.

## Catálogo de tipologías — base (de la fase 1, homes)

### 1. Cabecera de sección / Hero
**Campos:** Título · Subtítulo · Texto · Imagen de fondo (opcional) · lista de CTAs (opcional, 1-N, cada CTA con texto + tipo de canal opcional: página interna / teléfono / WhatsApp / email) · lista de puntos destacados anidada (opcional)

| Sitio | Instancia | Imagen fondo | Nº de CTAs | Puntos destacados |
|---|---|---|---|---|
| Institucional | Hero home | ✅ | 1 | — |
| Alminar | Hero home | — | 1 | — |
| CBS | Hero home | — | — | ✅ (3 pilares) |
| CEDES | Hero home | — | — | — |
| Institucional | Hero "Leadership Team" | ✅ | 1 (ancla, no CTA real) | — |
| Institucional | Hero "Find a School" | ✅ | — | — |
| CBS | Hero "Admisiones" | — | **5** (página / visita / WhatsApp / email / teléfono) | ✅ (3 pilares, sección aparte) |

→ Confirmado con páginas internas: el Hero soporta de 0 a varios CTAs, y los
CTAs pueden tener un "canal" (ir a página, llamar, WhatsApp, email) en vez de
solo enlazar a otra URL. Esto es relevante para el campo de datos del CTA,
no para el módulo en sí.

### 2. Contenido media (texto + imagen)
**Campos:** Título (opcional) · Subtítulo (opcional) · Texto · Imagen (opcional) · CTA/links (opcional)

| Sitio | Instancia | Título | Imagen | CTA |
|---|---|---|---|---|
| CEDES | "Enseñanza 100% bilingüe" | ✅ | ✅ | — |
| CBS | "Entorno natural" | ✅ | — | ✅ (x2) |
| Alminar | "Bloque de compromiso" | ✅ | — | — |
| Institucional | Bloque de cita | — | ✅ (retrato) | — |
| Alminar | "Bloque de captación" (admisiones) | ✅ | — | — (el CTA es el formulario debajo) |
| CEDES | Secciones por etapa (school-overview) | ✅ (subtítulo) | — | ✅ ("Descubre más...") |
| Institucional/CBS/CEDES | Bio completa de persona (variante) | ✅ (nombre) | ✅ (foto) | — |
| Institucional | Misión / Visión / Safeguarding (mission-vision-values) | ✅ | — (icono en su lugar) | — |
| Institucional | 4 módulos de audiencia (Who we are: Students/Parents/Teachers/Schools) | ✅ | ✅ | solo 1 de 4 |
| Institucional | "The Ariston Quotient (AQ)" (educational-pillars) | ✅ | ✅ (logo de marca) | — |

→ Nueva variante confirmada: el campo "imagen" de este módulo puede ser un
**icono** en vez de una foto (Misión/Visión/Safeguarding) — sigue siendo el
mismo esquema de campos, solo cambia el tipo de recurso visual.

→ Confirmado: las "secciones por etapa" de CEDES en páginas internas usan
este módulo repetido verticalmente, no un grid — mismo contenido
(Infantil/Primaria/Secundaria/Bachillerato) que en Alminar/CBS se resuelve
como grid de tarjetas (#3). Es la prueba de que **el mismo contenido puede
vivir en dos módulos distintos según la página**, y confirma que no hace
falta un módulo "selector de etapas" dedicado: con Contenido Media + Grid de
tarjetas ya cubrimos ambos casos.

### 3. Grid repetible de tarjetas
**Campos del contenedor:** Título (opcional) · Texto intro (opcional) · CTA de grupo (opcional) · paginación (opcional) · modo de presentación (grid / carrusel / lista vertical — ver nota transversal)
**Campos por tarjeta:** Icono/imagen (opcional) · Número (opcional) · Título (opcional) · Subtítulo (opcional) · Texto (opcional) · Link/CTA (opcional, puede abrir modal en vez de navegar)

| Sitio | Instancia | Nº tarjetas | Icono/imagen | Número | Subtítulo | Texto | Link |
|---|---|---|---|---|---|---|---|
| Institucional | Pilares educativos | 3 | ✅ | — | — | ✅ | — |
| Institucional | Últimas noticias | 3 | ✅ (+fecha) | — | fecha | — | ✅ |
| Alminar | Servicios | 7 | ✅ | — | — | — | ✅ |
| Alminar | Mosaico "experiencia única" | 4 | ✅ | — | — | — | ✅ (3/4) |
| CBS | Key Stages | 4 | ✅ | ✅ | — | ✅ | ✅ |
| CBS | Proceso de admisión (5 pasos) | 5 | — | ✅ | — | ✅ | — |
| CBS | 3 pilares (home y admisiones) | 3 | — | — | — | ✅ | — |
| CEDES | Accesos rápidos (home) | 3 | ✅ | — | — | — | ✅ |
| CEDES | "Datos clave" (home) | 4 | ✅ | — | — | ✅ | — |
| CEDES | "¿Y ahora qué?" (historia / school-overview) | 3 | ✅ | — | — | — | ✅ |
| CEDES | "Servicios adicionales" (school-overview) | 10 | — | — | — | ✅ | — |
| Institucional | Tarjetas de persona (Leadership) | 6–10 | ✅ (foto) | — | ✅ (cargo) | ✅ (bio, solo en "Educational Leadership") | ✅ (algunas abren modal) |
| Institucional | Tarjetas de colegio (Find a School) | 19 | ✅ | — | ✅ (ubicación) | ✅ (curriculum, edad, idioma) | ✅ |

→ Con páginas internas se confirma aún más fuerte la hipótesis de la fase 1:
**procesos numerados (timeline de pasos), tarjetas de persona y tarjetas de
colegio son el mismo módulo**, no tipologías nuevas — solo cambia qué
combinación de campos opcionales se usa y si se presenta en grid o en
columna vertical (eso es una decisión de layout, no de esquema de datos).

### 4. Bloque de cifras (stats)
**Campos del contenedor:** Título (opcional) · Texto intro (opcional) · CTA (opcional)
**Campos por item:** Número/cifra · Etiqueta · Icono/logo (opcional)

| Sitio | Instancia | Nº items | Icono/logo |
|---|---|---|---|
| Institucional | Comunidad global | 3 | — |
| CBS | Logros académicos | 1 cifra + 3 stats | ✅ (logo Cambridge) |
| Institucional | "Our global presence" (Who we are) | 4 | ✅ (icono) |

Confirma el patrón, sin variante nueva.

### 5. Banner CTA
**Campos:** Título · Texto breve (opcional) · Imagen de fondo (opcional) · CTA

Sin novedades. Sigue abierto el caso límite: ¿se funde con el Hero (#1) como
variante compacta?

### 6. Galería de imágenes
**Campos del contenedor:** Título (opcional) · modo de presentación (estática / carrusel)
**Campos por imagen:** Imagen · Pie de foto (opcional) · Link (opcional)

CEDES ("Nuestra historia") confirma el modo carrusel explícito: aparece un
control "Previous/Next" envolviendo un grupo de imágenes — ver nota
transversal sobre carrusel como variante de presentación, no módulo nuevo.

### 7. Franja de logos/sellos
Sin novedades relevantes en páginas internas.

### 8. Lista de enlaces (navegación / columnas / sidebar / anclas)
**Campos:** Título de columna (opcional) · Lista de enlaces (texto + link), anidación opcional en 1-3 niveles · destino del link (página interna / ancla en la misma página / archivo descargable / externo)

Nuevas variantes confirmadas en páginas internas, mismo esquema de campos:
- **Navegación en página (anchor nav):** Institucional "Leadership Team" —
  3 enlaces que hacen scroll a secciones de la misma página, no son pestañas
  reales.
- **Navegación lateral (sidebar):** CEDES "Nuestra Historia" — lista de
  páginas hermanas de "Quiénes somos", con la actual resaltada.
- **Lista de enlaces relacionados:** CEDES "Proyecto Educativo" — viñetas
  simples a páginas relacionadas.
- **Link a documento descargable:** CBS admisiones — un enlace a Google Docs
  ("Condiciones generales") en vez de a una página. Mismo módulo, el destino
  del link es un archivo en vez de una URL de página.

→ Todas son el mismo módulo #8 en distintas ubicaciones/densidades. No hace
falta un módulo nuevo para "menú lateral" ni para "ancla en página".

### 9. Bloque de contacto
Sin novedades relevantes.

### 10. Bloque social (iconos)
**Campos por item:** Icono · Link

Nueva variante con intención distinta pero mismo esquema de campos:
- **Bloque de compartir (share):** CEDES ("Nuestra Historia" y "Proyecto
  Educativo") — 4-5 iconos para compartir la página actual (Facebook,
  LinkedIn, Twitter/X, WhatsApp, email). Visualmente es el mismo patrón
  icono+link que el bloque social de seguir en redes, pero el link es
  dinámico (comparte la URL actual) en vez de fijo a una cuenta. **Nota para
  desarrollo:** aunque el diseño sea el mismo módulo, el comportamiento
  (share intent vs. link fijo) necesita lógica distinta — documentarlo como
  variante de comportamiento, no crear un módulo de diseño nuevo.

### 11. Formulario
**Campos:** Título (opcional) · Texto intro (opcional) · Campos de formulario · Checkbox legal (opcional) · CTA de envío

Confirmado que existe en página de Admisiones en Alminar y CBS (ambos
mencionan el formulario o enlazan a él), pero en ningún caso el fetch de
texto reveló los campos concretos (probablemente cargado vía shortcode/
iframe que no se captura como texto plano). **Pendiente de pasada visual**
para documentar los campos reales del formulario de admisiones.

### 12. Encabezado / navegación (composite)
Sin cambios de esquema; confirmado el patrón de buscador + login en CEDES
también en páginas internas (se repite en cada página, no solo en home).

### 13. Widget flotante
Sin novedades (solo CBS).

### 14. Panel de cookies
Sin novedades.

### 15. Footer (composite)
Sin novedades de esquema.

## Tipologías nuevas detectadas en páginas internas

### 16. Lista de datos clave (pares etiqueta → valor)
**Campos del contenedor:** Título (opcional)
**Campos por item:** Etiqueta · Valor (texto corto)

| Sitio | Instancia | Ejemplo de pares |
|---|---|---|
| Institucional | "Key facts about our school" (ficha de colegio en Find a School) | Age Range, Language of instruction, Tuition Fees, Qualifications, Curriculum |

Distinto del bloque de cifras (#4) porque el valor es texto libre (p. ej.
"IB", "5-12") y no una cifra destacada con tipografía grande — son datos de
ficha técnica, no estadísticas de marca.

### 17. Lista simple de texto
**Campos del contenedor:** Título (opcional) · numeración (opcional: ninguna / bullets / numerada)
**Campos por item:** Texto (sin imagen, sin icono, sin link individual)

| Sitio | Instancia |
|---|---|
| Institucional | "Facilities" (ficha de colegio) — lista de instalaciones, longitud variable |
| CBS | "¿Por qué elegir CBS?" — ~15 afirmaciones breves |
| CBS | "Requisitos" / "Documentación" (reserva de plaza, inscripción) — listas numeradas de condiciones |

Distinto del grid de tarjetas (#3) porque no hay envoltorio visual de
tarjeta (sin fondo/borde/icono propio): es una lista de texto plano, aunque
el contenedor pueda tener título.

### 18. Filtros
**Campos:** uno o más criterios de filtro (cada uno: etiqueta + lista de opciones, tipo select o chips/pills) · botón reset (opcional) · contador de resultados (opcional) · mensaje de estado vacío (opcional)

| Sitio | Instancia | Tipo |
|---|---|---|
| Institucional | Find a School | Facetado: 4 criterios (Region, Country, Curriculum, Age Range) + reset + contador "19 schools" + estado vacío |
| Institucional | News & Events | Simple: pills "All / News / Events", con estados vacíos por tipo |

Dos variantes del mismo módulo: **facetado** (varios selects combinables,
con contador) y **simple** (una fila de categorías tipo pestaña). Se usa
siempre junto a un módulo #3 (el grid que filtra).

### 19. Paginación
**Campos:** página actual · enlaces a páginas siguientes/anteriores (numéricos o "cargar más")

| Sitio | Instancia |
|---|---|
| Alminar | Listado de noticias — paginación numérica (1, 2, 3, …, 5) |

Institucional (News & Events) no tiene paginación: muestra 12 tarjetas en
una sola página. Es un módulo ligero, casi una opción de configuración del
contenedor del grid (#3) más que un módulo con contenido propio — se deja
catalogado aparte porque tiene su propio patrón visual (números, flechas),
pero en la propuesta final podría implementarse como una propiedad del
módulo #3 en lugar de un módulo independiente.

## Tipologías nuevas — 2ª tanda (institucional: páginas restantes)

### 20. Vídeo embebido
**Campos:** Vídeo (embed, p. ej. YouTube) · Título (opcional) · Texto (opcional)

| Sitio | Instancia |
|---|---|
| Institucional | "Who we are" — vídeo embebido sin título ni texto propio, como bloque independiente entre la intro y el bloque de cifras |

Módulo mínimo — de momento solo se ha visto sin título/texto, pero se deja
el campo como opcional por si aparece en otra página con descripción.

### 21. Callout de dato destacado (con fuente)
**Campos:** Icono · Título/subtítulo corto · Texto con el dato o estadística · Nota al pie con link a fuente externa (opcional)

| Sitio | Instancia | Nº de apariciones |
|---|---|---|
| Institucional | "Did you know?" en los 3 pilares de Educational Pillars | 3 |
| Institucional | "Did you know?" en Global Student Advisory Board | 1 |

Se repite igual 4 veces en 2 páginas distintas — suficiente recurrencia para
ser su propia tipología y no una variante de Contenido Media (#2): la clave
es que siempre cita una fuente externa (nota al pie enlazada), algo que
ningún otro módulo del catálogo hace.

### 22. Timeline de hitos con fecha
**Campos del contenedor:** Título (opcional)
**Campos por hito:** Fecha (mes/año) · Título · Descripción (opcional)

| Sitio | Instancia |
|---|---|
| Institucional | "A year on the Global Student Advisory Board" — 5 hitos con fecha real (cierre de solicitudes, notificación, reuniones) |

**Esto es genuinamente nuevo** y matiza la nota transversal de más abajo
sobre "historia sin timeline": aquí sí hace falta un módulo con un campo de
**fecha real** por item (no solo un número de orden, como en el Grid de
tarjetas #3) — por eso no se puede resolver con #3. Candidato a usarse en
procesos con calendario explícito (admisiones, comités, programas con
fechas), no solo en páginas de "historia".

## Tipologías nuevas — 6ª tanda (CBS: revisión puntual 2026-10-28)

### 23. Visor de documento interactivo (flipbook)
**Campos:** Documento fuente (PDF/imágenes paginadas) · Número de páginas ·
Controles de lectura (zoom in/out, página anterior/siguiente, ir a página,
marcador, compartir, pantalla completa) · Título de la página contenedora

| Sitio | Instancia |
|---|---|
| CBS | "Dossier Informativo" (`/dossier-informativo/`, embebe `/3d-flip-book/dossier-informativo-cbs/`) — 22 páginas |
| CBS | "English Dossier" (`/3d-flip-book/english-dossier/`) — 24 páginas, mismo documento en inglés |
| CBS | "Informe Nabbs CBS 2025" (`/3d-flip-book/informe-nabbs-cbs-2025/`) — 7 páginas, informe de inspección NABSS |
| CBS | "Dossier CBS Outdoor Adventures" (`/3d-flip-book/dossier-cbs-outdoor-adventures/`) — 14 páginas |

**Reabre el catálogo, cerrado en 22 tipos desde la 5ª tanda.** Se descartó
tratarlo como variante de Vídeo embebido (#20) a propósito: #20 es un
contenedor de embed pasivo (vídeo/mapa) sin estado ni controles propios —
el flipbook en cambio es un **visor con estado** (página actual, zoom,
marcadores), más parecido en naturaleza a Pestañas de contenido (patrón ya
anotado en notas transversales) que a un simple embed. Mismo criterio que
ya se usó para separar Timeline (#22) de Grid de tarjetas (#3): el campo
de estado/paginación real es lo que obliga a un esquema propio, no el
contenido (da igual que el documento sea un dossier, un informe o un
folleto — incluso en 2 idiomas distintos del mismo dossier, es el mismo
módulo).

Encontrado vía `/3d-flip-book-sitemap.xml` (sitemap propio del plugin
WordPress que genera el visor) — hay un archivo índice
(`/3d-flip-book/`, listado tipo blog de los 4 documentos) y 4 documentos
individuales; solo uno de los 4 (Dossier Informativo) tiene además una
página de aterrizaje propia con bloque de contacto — los otros 3 solo
existen en la URL cruda del visor.

## Tipologías nuevas — 7ª tanda (Alminar — auditoría de módulos de los
coles, NO de institucional)

> **Fuente de este hallazgo:** auditoría de páginas de **Alminar** (uno de
> los 3 coles piloto), no de la web institucional. Se marca explícitamente
> porque más adelante se hará un resumen que distingue qué módulos salieron
> de institucional vs. de los coles.

### 24. Contenedor de pestañas de página completa (tab switcher)
**Campos:** N pestañas, cada una con: Etiqueta de pestaña · Panel de
contenido (cualquier combinación libre de otros módulos del catálogo,
incluyendo pestañas anidadas) · Pestaña activa por defecto (opcional)

| Sitio | Instancia |
|---|---|
| Alminar | "El Colegio" (`/el-colegio/`) — 8 pestañas: Quiénes somos (texto), Formación Integral Humana (texto), Modelo educativo (texto), Etapas educativa (con 4 sub-pestañas anidadas), Excelencia educativa (texto), Instalaciones (con 6 sub-pestañas anidadas + galería), Equipo (Grid de tarjetas de personas), Cómo llegar (mapa embebido) |
| Alminar | "Proyecto Educativo" (`/proyecto/`) — 11 pestañas, contenido igual de heterogéneo (bloques de texto, Stats Block, Accordion anidado, galerías, listas) |

**Por qué es un módulo nuevo y no una variante de #17/#3 (revierte la
clasificación de la 3ª tanda para este caso concreto):** cuando "pestañas
de contenido real" se vio por primera vez en Psicoabaco (CBS/Alminar
Gabinete de Psicología), las 8 pestañas compartían **un único esquema**
(cada una era una Lista simple de condiciones tratadas) — ahí sí era
correcto llamarlo variante de presentación de #17, igual que un carrusel
o un acordeón. **El caso de Alminar "El Colegio" es distinto de raíz:**
cada pestaña contiene un módulo (o varios) completamente diferente del
resto — texto, grid de personas, mapa, pestañas anidadas. No es "el mismo
módulo repetido en formato pestaña", es un **contenedor que conmuta entre
módulos heterogéneos** — estructuralmente más parecido a un router de
página que a una variante de carrusel. El esquema de campos (N paneles de
contenido libre, no N items del mismo tipo) es genuinamente distinto al
de cualquier módulo ya catalogado.

**Nota de alcance:** esto NO reclasifica Psicoabaco, que sigue
correctamente como variante de #17. Solo aplica cuando el contenedor de
pestañas conmuta entre módulos de distinto tipo entre sí, no cuando
repite el mismo módulo N veces.

## 4ª tanda — auditoría de sitio completo de los 3 coles piloto

Con el alcance ampliado a "lista completa de páginas, auditoría profunda
solo en las relevantes" (Alminar ~12 páginas de nav, CBS ~55 entre
páginas de nav y detalle de actividad, CEDES ~27), se auditó en
profundidad una muestra de cada patrón repetido y en superficie el resto.
**Cero módulos nuevos** — el catálogo se mantiene en 22 tipologías. Esto
confirma con la muestra más grande hasta ahora que clasificar por esquema
de campos (no por contenido) escala bien: incluso con sitios enteros
auditados, lo único nuevo son variantes de presentación y confirmaciones
de módulos existentes.

### Pendientes cerrados

- **Formulario de admisiones (#11), campos reales:** confirmado por fin en
  CEDES "Contacto Admisiones" y "Open Days" (`contact-us/contacto-admisiones`,
  `nuestro-colegio/school-life/open-days`): Nombre (obligatorio), Apellidos
  (opcional), Email (obligatorio), Teléfono (opcional), desplegable de
  Etapa (Infantil/Primaria/Secundaria/Bachillerato), botón de envío. Mismo
  esquema de campos ya previsto en el módulo #11 — no cambia el catálogo,
  pero cierra la pieza más importante que quedaba pendiente desde la 1ª
  tanda. Alminar y CBS siguen sin confirmar (formularios cargados vía
  iframe/script no capturado como texto).
- **CEDES "Contacto" 404:** resuelto — la URL correcta es `/contact-us`
  (con sub-páginas `/contact-us/contacto-admisiones` y
  `/contact-us/información-general-de-contacto`), no `/contacto`.

### Nuevas variantes confirmadas (mismos módulos, no nuevas tipologías)

- **Pestañas de contenido real (no solo filtro):** Alminar "Gabinete de
  Psicología y Logopedia" usa 8 pestañas con contenido distinto por
  pestaña (no un filtro que reordena un grid, como en CBS Servicios, sino
  paneles de contenido independientes). Es una variante de presentación
  del mismo tipo que el carrusel o el acordeón — **no es un módulo
  nuevo**, pero se añade a las notas transversales porque es la primera
  vez que aparece con contenido real (antes solo se había visto como
  relleno de plantilla en CBS "Proyecto Educativo → Deporte").
- **Filtro de pestañas sobre un grid (#18, variante simple):** CBS
  "Servicios" confirma la variante simple de Filtros ya catalogada
  (pills/pestañas, no facetado) aplicada a un hub de recursos con mensaje
  de "sin resultados" — mismo esquema, nuevo contexto.
- **Lista de datos clave (#16) en contexto de horario/tarifas:** CEDES
  "Infantil" y los módulos de transporte escolar de los 3 coles confirman
  que el esquema etiqueta→valor también cubre horarios y tarifas, no solo
  fichas de colegio — sin cambio de esquema.
- **Timeline con fechas (#22) fuera de institucional:** CBS "Historia del
  CBS" confirma el mismo módulo con 3 hitos reales (2009/2010/2026) —
  refuerza que el módulo #22 es reutilizable en cualquier página de
  historia con fechas concretas, no solo en Global Student Advisory
  Board.
- **Grid de tarjetas (#3) con destino a vídeo o archivo:** confirmado en
  el archivo de Conferencias de CBS (miniatura+título→vídeo) y en los
  menús descargables de Comedor (imagen→PDF) en los 3 coles — mismo
  principio ya generalizado en el módulo #8 para listas de enlaces, ahora
  confirmado también aplicable al campo "link" de una tarjeta de grid.

### Patrones de página (no de módulo) para la propuesta de plantillas

- **~~Página larga de una sola pieza con navegación de anclas~~ →
  corregido a Tabbed Content (2026-10-28):** la pasada de texto inicial
  describió "El Colegio" y "Proyecto Educativo" de Alminar como páginas
  únicas largas con anclas de scroll. La pasada visual con clic real
  (ver `colegio-alminar.md` § Historial) confirma que es el mismo módulo
  **Tabbed Content** ya documentado más arriba para Psicoabaco — una URL,
  pero cada clic sustituye el panel de contenido completo, no un
  scroll-jump. El Colegio mantiene 8 paneles (6 pestañas horizontales +
  sidebar de 3, con anidamiento de 2º nivel en "Etapas educativa" e
  "Instalaciones"); Proyecto Educativo se corrige de "14-16 bloques" a 11
  pestañas reales (3 de los bloques antiguos eran contenido anidado dentro
  de un solo panel, no pestañas propias). No cambia el catálogo de 22
  tipologías — Tabbed Content ya estaba catalogado — pero sí confirma que
  el patrón de página "long-form con anclas" **no existe como tal en
  Alminar**: donde parecía haber anclas, hay pestañas reales. Queda como
  patrón de página genuino, sin embargo, el caso de "Etapas educativas"
  (`/etapas-educativas/`, ver tabla de nivel ligero en `colegio-alminar.md`)
  y CEDES "Nuestra Historia", que sí usan Contenido Media repetido en
  prosa — esos no se han re-verificado con clic y siguen clasificados como
  anclas/scroll hasta pasada visual.
- **Página de detalle de actividad/departamento repetida:** confirmado
  como patrón real (no hipotético) en CBS: 15 páginas de actividad
  extraescolar con idéntico esquema (migas de pan, texto+lista de
  ventajas, horario, CTA externo) y páginas de etapa/Key Stage (EYFS/
  Primary/Secondary/Sixth Form) y de departamento (Psicopedagógico) con
  esquema propio pero repetible. Es exactamente el caso de uso que
  justifica una plantilla "detalle de actividad/departamento" aparte de
  la plantilla de contenido genérico.

## 5ª tanda — verificación cruzada contra el catálogo visual de Figma (103 páginas)

Petición directa de Carla: antes de reestructurar el frame "2. Module
Catalogue — Coles Piloto (ampliado)" en dos niveles (YA CONTEMPLADOS
compacto / NUEVOS con ficha completa), se extrajo el texto "MODULES
IDENTIFIED" de las **103 tarjetas** de página ya construidas en Figma
(Alminar 12, CBS 61, CEDES 30 — página "Audit", frames "1. Page Audit —
ALMINAR/CBS/CEDES") y se cruzó cada etiqueta distinta contra las 22
tipologías de este documento, usando el mismo criterio de siempre
(esquema de campos, no contenido).

**Resultado: 0 módulos nuevos.** Todas las etiquetas resuelven a una de
las 22 tipologías ya existentes. La mayoría ya venía anotada en la propia
tarjeta de Figma ("reuses #3", "reuses #16", "reuses #17", "reuses #8");
las que no tenían esa anotación se resuelven así:

- **Breadcrumb / migas de pan** (CBS, 15 páginas de detalle de actividad
  + páginas de etapa): mismo esquema que Lista de enlaces (#8) — una
  variante horizontal con el nivel actual resaltado, igual que el
  sidebar de CEDES "Nuestra Historia" ya catalogado como variante de #8.
  No es un módulo nuevo, es una orientación distinta del mismo esquema.
- **Map** (CBS "Instalaciones" — confirmado también en el as-is como
  "Contenido Media + mapa de ubicación + enlaces de interés"): el mapa
  embebido tiene el mismo esquema que Vídeo embebido (#20) — un
  contenedor de embed con título/texto opcionales — solo cambia el tipo
  de recurso incrustado (mapa en vez de vídeo), igual que el campo
  "imagen" de #2 puede ser un icono. Variante de #20, no módulo nuevo.
- **Accordion Expandable** (CEDES, páginas legales "Política de
  privacidad" y "Aviso legal"): la propia nota transversal de más abajo
  ya clasifica el acordeón junto al carrusel y las pestañas como
  variante de presentación de un módulo repetible (#3 Grid de tarjetas o
  #17 Lista simple) — no es un módulo nuevo.
- **FAQ List** (CBS "Preguntas Frecuentes"): el as-is la describe como
  "lista de preguntas/respuestas en texto corrido (sin acordeón visible
  en el fetch)" — es Lista simple de texto (#17), sin envoltorio de
  tarjeta ni icono. Distinto de "Card Grid (FAQ)" (CBS "Departamento
  Psicopedagógico", #3), que sí usa tarjetas — mismo nombre de negocio,
  dos módulos distintos según si hay o no chrome de tarjeta, exactamente
  el criterio que ya separa #3 de #17 en este documento.
- **Legal Text Block** (CBS/CEDES, páginas de aviso legal / privacidad /
  cookies): Contenido Media (#2) con solo el campo de texto poblado — el
  as-is ya las describe como "página legal estándar", sin campos nuevos.
- **Logo Grid** (CBS "Sistema de casas" y similares): Franja de
  logos/sellos (#7) en modo rejilla en vez de fila — el campo
  "modo de presentación" de #7 ya contempla estática/carrusel; rejilla es
  el mismo tipo de variante, no un módulo nuevo.
- **Carousel** y **Tabbed Content (8 panels)**: ya cubiertos por las
  notas transversales existentes (carrusel = variante de presentación de
  un módulo repetible; pestañas de contenido real = ya confirmado en la
  4ª tanda para Alminar Gabinete de Psicología).

**Conclusión:** el catálogo sigue cerrado en 22 tipologías incluso tras
cruzar la totalidad de las 103 páginas auditadas visualmente en Figma,
no solo el texto plano de los as-is. Confirma por tercera vez (fase 1,
4ª tanda, y ahora esta verificación cruzada) que clasificar por esquema
de campos escala y que el catálogo está efectivamente estable. Los
módulos #7 (Logo Strip), #11 (Form), #13 (Floating Widget), #14 (Cookie
Banner) y #19 (Pagination) obtuvieron en los coles piloto su primer
ejemplo visual real (antes solo estaban documentados en texto desde la
fase 1) — no son nuevos, pero sí fue la primera vez que se pudo construir
una ficha visual completa para ellos, y así se refleja en el frame de
Figma reestructurado.

## Notas transversales (patrones que NO son módulos nuevos)

Estas observaciones son importantes para no inflar el catálogo:

- **Timeline / proceso por pasos** (CBS, "Proceso de admisión" en 5 pasos):
  reutiliza exactamente el esquema del Grid de tarjetas (#3) en su variante
  numerada — lo único que cambia es que se presenta en columna vertical en
  vez de en grid horizontal. **No es un módulo nuevo**, es una opción de
  layout de #3.
- **Carrusel/slider** (franja de sellos en Alminar, galería en CEDES
  "Nuestra Historia"): es una forma de presentar los items de un módulo
  repetible (#3, #6, #7) paginados de uno en uno con flechas, en vez de
  todos visibles a la vez. **No es un módulo nuevo**, es una variante de
  presentación aplicable a cualquier módulo repetible.
- **Bloque de compartir**: mismo esquema que el bloque social (#10), con
  comportamiento distinto (ver nota en #10).
- **Historia del colegio sin timeline formal** (CEDES): confirma que no es
  *obligatorio* modelar un timeline para contar una historia — con Contenido
  Media (#2) repetido como texto corrido ya se cubre. **Pero el caso
  contrario también existe**: la página del Global Student Advisory Board sí
  necesita un timeline real con fechas (#22) — así que el módulo #22 queda
  en el catálogo como pieza aparte, reservada para procesos con calendario
  explícito, no para "contar historia" en general.

## Lectura actualizada para la propuesta de módulos/plantillas

Con siete tandas de auditoría (homes + 2 rondas de páginas internas +
sitio completo de los 3 coles piloto + dos revisiones puntuales
posteriores, una sobre CBS y otra sobre Alminar), con institucional al
100% y los 3 coles piloto también al 100% de su navegación, el catálogo
pasa a **24 tipologías** (15 base + 4 de la 2ª tanda + 3 de la 3ª tanda +
**0 nuevas en la 4ª tanda** + **2 nuevas en revisiones puntuales
posteriores, ambas encontradas en los coles, ninguna en institucional**:
el visor de documento flipbook #23 — CBS — y el contenedor de pestañas de
página completa #24 — Alminar), cómodamente por debajo del límite de 30
— y eso que la 4ª tanda cubrió más páginas que las tres anteriores juntas
(~94 páginas de nav entre los 3 coles piloto).

Los hallazgos #23 y #24 son un recordatorio útil: "catálogo cerrado" no
significa "no volver a auditar". El flipbook apareció porque vive en
rutas (`/3d-flip-book/...`) generadas por un plugin, fuera del menú de
navegación normal y por tanto fuera del alcance de la auditoría de
sitemap original. El contenedor de pestañas (#24) es distinto: **estaba
a la vista desde el principio** (Alminar "El Colegio"/"Proyecto
Educativo"), pero se había clasificado mal — la nota transversal de la
3ª tanda decía "pestañas con contenido real... no es un módulo nuevo,
variante de carrusel/acordeón", generalizando desde el caso de Psicoabaco
(8 pestañas, mismo esquema cada una) a un caso estructuralmente distinto
(pestañas con módulos heterogéneos entre sí). **Esa nota transversal
queda corregida**: ver #24 arriba para el criterio correcto —la
corrección NO afecta a Psicoabaco, que sigue siendo variante de #17.

Dicho esto, sigue siendo la confirmación más fuerte hasta ahora de que
clasificar por esquema de campos (y no por contenido) escala: el
catálogo está efectivamente cerrado salvo hallazgos puntuales, y lo que
sigue apareciendo son variantes de presentación genuinas (filtro por
pestañas sobre un grid homogéneo, que sí sigue siendo variante de #18) y
patrones de página (long-form con anclas — ahora resuelto como #24,
detalle de actividad/departamento repetido) — ver 4ª tanda arriba.

Casos límite aún abiertos:
- ¿Banner CTA (#5) es un módulo propio o una variante compacta del Hero (#1)?
- ¿Galería (#6) y Grid de tarjetas (#3) convergen en un único módulo cuando
  la tarjeta se reduce a imagen+link?
- ¿Paginación (#19) se modela como módulo propio o como propiedad de
  configuración del Grid de tarjetas (#3)?
- ¿Las pestañas de contenido real (Alminar Psicoabaco) y el filtro por
  pestañas (CBS Servicios) merecen una nota de implementación propia
  (como el bloque de compartir vs. social, #10) aunque no sea un módulo
  de diseño distinto?

## Pendiente para cerrar el inventario

- **Formularios:** cerrado parcialmente en la 4ª tanda — CEDES confirma el
  esquema real de campos (Nombre, Apellidos, Email, Teléfono, Etapa).
  Alminar y CBS siguen sin confirmar (formularios vía iframe/script no
  capturados como texto) — sigue pendiente pasada visual o acceso directo
  del cliente para esos dos sitios.
- **Institucional: completo** (9/9 páginas de nav). Quedan solo páginas de
  detalle (un artículo de Insights, una noticia de News & Events) sin abrir
  — probablemente mismo patrón, bajo prioridad.
- **Los 3 coles piloto: completos** (100% de páginas de nav mapeadas,
  auditoría profunda en las estructuralmente relevantes — ver 4ª tanda y
  los 3 as-is individuales). Quedan solo páginas de detalle de noticias
  individuales (mismo patrón que Alminar Noticias) sin abrir, bajo
  prioridad.
- Pasada visual con capturas en los 4 sitios — sigue pendiente por el
  fallo del navegador integrado en esta sesión. Prioridad alta en las
  páginas de formulario de Alminar y CBS (único hueco real de contenido
  que queda).
- Con el catálogo de tipologías prácticamente cerrado, el siguiente paso
  es mapear qué combinación de módulos compone cada una de las 10-12
  plantillas de página (número oficial del kickoff deck del cliente) —
  la 4ª tanda ya aporta dos patrones de página candidatos (long-form con
  anclas; detalle de actividad/departamento repetido) que no estaban
  explícitos antes.

## Historial

- 2026-11-03 · Catálogo pasa de 22 a **24 tipologías** — se añaden #23
  (Visor de documento interactivo/flipbook, encontrado en CBS) y #24
  (Contenedor de pestañas de página completa, encontrado en Alminar,
  corrige la nota transversal de la 3ª tanda que lo había descartado como
  variante). **Ambos hallazgos vienen de la auditoría de módulos de los
  coles, ninguno de institucional** — relevante para el resumen
  comparativo institucional-vs-coles pendiente. Pendiente: reflejar #23 y
  #24 en el frame "Module Catalogue" de Figma, que todavía muestra el
  recuento antiguo (22 contemplados / 0 nuevos).

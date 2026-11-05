# Auditoría — CEDES (Albacete)

**URL:** https://www.colegiocedes.com/
**Fecha de revisión:** 2026-10-22
**Método:** lectura de contenido/estructura (WebFetch) — pendiente pasada visual.

## Home

1. **Header:** selector de idioma (ES/EN), logo → home, iconos de menú +
   búsqueda + idioma + "Login".
2. **Menú principal (mega-menú):**
   - Quiénes somos: Nuestra Ética, Nuestra Historia, Política de Calidad
     (→ `/about-us/accreditaciones`), Ariston Education.
   - Nuestro Colegio: Currículo, Infantil, Primaria, Secundaria, Bachillerato,
     Proyecto Solidario, Instalaciones.
   - Vida Escolar: Extraescolares, Autobús Escolar, Comedor, Orientación
     Educativa, Políticas Escolares, Puertas Abiertas, Otros Servicios.
   - Contacto (con subenlace Contacto Admisiones).
   - Jornada de Puertas Abiertas (enlace directo).
   - Admisiones (enlace directo a Contacto Admisiones).
3. **Hero:** H1 "Colegio Privado Bilingüe en Albacete" + subtítulo
   (único privado de ciudad/provincia) + 3 párrafos (trayectoria desde 1932,
   comunidad bilingüe, visión centrada en el alumno).
4. **Tarjetas de acceso rápido (3):** Visión general del currículo / Nuestra
   historia / Una educación bilingüe — imagen + enlace cada una.
5. **"Datos Clave sobre CEDES" (4 bloques foto+texto):** educación integral,
   comunidad acogedora (profesores ex-alumnos), único colegio privado
   Infantil→Bachillerato de la zona, fluidez en inglés.
6. **"Enseñanza 100% bilingüe":** texto sobre inmersión, 50% horario en
   inglés, profesores nativos, separación de idiomas por profesor/asignatura
   + imagen.
7. **"Connect with us":** enlaces a FB e IG.
8. **Footer:** logo + link a Ariston Education (nueva pestaña); columna
   Contacto (general + admisiones); columna Horarios (apertura centro,
   Infantil/Primaria, madrugadores, ESO/Bachillerato); Dirección; Canal de
   Ética; copyright; legal (cookies, privacidad, aviso legal); selector de
   idioma repetido al final.

## Módulos candidatos detectados

- Header con búsqueda + login + selector idioma (único de los 3 coles con
  "Login" visible en header)
- Mega-menú por bloques temáticos (similar patrón a CBS, distinta
  nomenclatura)
- Hero de texto largo (3 párrafos) sin imagen destacada evidente en el fetch
- Grid de accesos rápidos (3 tarjetas imagen+enlace)
- Grid "datos clave" (4 bloques foto+texto, sin iconos ni CTA)
- Bloque de texto + imagen (bilingüismo) — mitad texto largo, mitad imagen
- Bloque social simple (solo enlaces, sin feed)
- Footer con bloque de horarios detallados (poco común en los otros 2 coles)
- Canal de Ética como enlace propio en footer

## Notas

- Es el único de los 3 coles con "Login" y buscador en el header.
- El endorsement de Ariston está en el menú ("Quiénes somos → Ariston
  Education") y en el footer — doble presencia, distinto a Alminar/CBS.
- Footer con horarios es un módulo específico de este sitio, a decidir si se
  generaliza como módulo opcional de plantilla.
- Comparte con CBS el patrón de mega-menú por bloques temáticos, pero CEDES es
  más plano (sin submenús de 3er nivel tan extensos como "Conferencias" en CBS).

## Páginas internas revisadas

- **Nuestra Historia** (`/about-us/nuestra-historia` — la ruta
  `/quienes-somos/nuestra-historia` usada originalmente en este doc daba
  404, corregido durante la captura de pantallas): sin timeline formal
  (fechas narradas en prosa), un carrusel de imágenes ("Previous/Next"),
  navegación lateral de páginas hermanas, bloque de compartir (share) y
  tarjetas "¿Y ahora qué?". Ver notas transversales en el inventario
  (timeline y carrusel no son módulos nuevos).
- **Proyecto Educativo y Currículo** (`/nuestro-colegio/school-overview` —
  la ruta `/nuestro-colegio/curriculo` usada originalmente en este doc daba
  404, corregido durante la captura de pantallas): secciones por etapa
  como texto repetido (no grid, no acordeón), lista de 10 servicios
  adicionales (título+párrafo, sin icono), lista de enlaces relacionados,
  bloque de compartir, tarjetas "¿Y ahora qué?". **Actualización
  2026-10-28:** los 10 servicios adicionales se auditaron en vivo y
  recibieron cada uno su propia tarjeta en Figma — ver Changelog para el
  detalle del mecanismo real (no es anchor nav ni pestañas) y el porqué.
- **Contacto:** la URL probada (`/contacto`) devolvió 404 — **resuelto**:
  la URL correcta es `/contact-us` (ver tarjeta deep de Contacto
  Admisiones más abajo, que confirma la ruta real `/contact-us/...`).

- **Infantil** (`/nuestro-colegio/infantil`, muestra representativa de las
  4 páginas de etapa — Infantil/Primaria/Secundaria/Bachillerato, mismo
  patrón): hero + introducción del programa + sección por franja de edad
  con **tabla de horario diario** y un resumen de "datos clave" (tarifas,
  horario mínimo, extras) — confirma el módulo Lista de datos clave (#16,
  ya visto en la ficha de colegio de Find a School institucional) en un
  contexto nuevo (horario/tarifas), más Lista de enlaces relacionados,
  bloque de compartir (#10) y tarjetas "¿Y ahora qué?" (#3). Sin módulos
  nuevos — auditada en profundidad como muestra del patrón "página de
  etapa" que pide el propietario del proyecto.
- **Contacto Admisiones** (`/contact-us/contacto-admisiones`): **resuelve
  el pendiente histórico del formulario de admisiones** — formulario real
  confirmado con campos Nombre (obligatorio), Apellidos (opcional), Email
  (obligatorio), Teléfono (opcional) y un desplegable de Etapa
  (Infantil/Primaria/Secundaria/Bachillerato), botón de envío. Mismo
  esquema que el módulo Formulario (#11) ya catalogado — no es un módulo
  nuevo, pero cierra una pieza pendiente importante del inventario (ver
  nota en `inventario-modulos.md`). Nota aparte: la página muestra un
  teléfono de admisiones inconsistente entre el cuerpo y el botón de
  llamada — posible bug de contenido a reportar al cliente, no un hallazgo
  de módulo.

## Páginas internas — nivel ligero (reutilizan módulos ya catalogados)

| Página | URL | Categoría de nav | Nota |
|---|---|---|---|
| Quiénes somos (overview) | `/about-us` | Quiénes somos | Contenido Media / grid de accesos a las sub-páginas. |
| Nuestra Ética | `/about-us/nuestra-ética` | Quiénes somos | Hero + 5 valores (foto+texto) — Grid de tarjetas (#3). |
| Política de Calidad / Accreditaciones | `/about-us/accreditaciones` | Quiénes somos | Contenido Media (acreditaciones). |
| Ariston Education | `/about-us/ariston-education` | Quiénes somos | Contenido Media (mismo texto de grupo que institucional). |
| Nuestro Colegio (overview) | `/nuestro-colegio` | Nuestro Colegio | Grid de tarjetas a sub-páginas (currículo, etapas). |
| Primaria | `/nuestro-colegio/primaria` | Nuestro Colegio | Mismo patrón que la ficha deep de Infantil. |
| Secundaria | `/nuestro-colegio/secundaria` | Nuestro Colegio | Idem. |
| Bachillerato | `/nuestro-colegio/bachillerato` | Nuestro Colegio | Idem. |
| Enseñanza 100% bilingüe | `/nuestro-colegio/enseñanza-100-bilingüe` | Nuestro Colegio | Contenido Media (mismo bloque que el de home, con más detalle). |
| Proyecto Solidario | `/nuestro-colegio/proyecto-solidario` | Nuestro Colegio | Contenido Media (bloque de texto duplicado) + tarjetas. |
| Vida Escolar (overview) | `/nuestro-colegio/school-life` | Vida Escolar | Grid de tarjetas a las sub-páginas de servicios. |
| Actividades Extraescolares | `/nuestro-colegio/school-life/actividades-eextraescolares` | Vida Escolar | Contenido Media / listado de actividades. |
| Autobús Escolar | `/nuestro-colegio/school-life/autobús-escola` | Vida Escolar | Lista de datos clave (#16) por ruta, mismo patrón que CBS/Alminar transporte. |
| Comedor Escolar | `/nuestro-colegio/school-life/comedor-escolar` | Vida Escolar | Mismo patrón que Comedor de Alminar/CBS. |
| Instalaciones | `/nuestro-colegio/school-life/instalactiones` | Vida Escolar | Lista simple (#17) de características + sidebar de páginas hermanas. |
| Políticas Escolares | `/nuestro-colegio/school-life/políticas-escolares` | Vida Escolar | Lista de enlaces a documentos, mismo patrón que Alminar. |
| Orientación Educativa | `/nuestro-colegio/school-life/orientación-educativa` | Vida Escolar | Contenido Media (departamento de orientación). |
| Puertas Abiertas | `/nuestro-colegio/school-life/open-days` | Vida Escolar | Fechas + formulario de visita privada (mismo esquema de Formulario #11, con desplegable de etapa) + enlaces relacionados. |
| Otros Servicios | `/nuestro-colegio/school-life/servicios` | Vida Escolar | Lista simple de 4 servicios adicionales (compra de libros, aula matinal, etc.). |
| Contacto (overview) | `/contact-us` | Contacto | Contenido Media + accesos a sub-páginas de contacto — es la página que antes daba 404 en `/contacto`. |
| Información General de Contacto | `/contact-us/información-general-de-contacto` | Contacto | Contenido Media + datos de contacto. |
| Jornada de Puertas Abiertas (enlace directo de nav) | `/próxima-jornada-de-puertas-abiertas` | Acceso directo de nav | Mismo contenido que Vida Escolar → Open Days (posible duplicado/alias de la misma página). |
| Política de cookies | `/política-de-cookies-2` | Legal (footer) | Página legal estándar. |
| Política de privacidad | `/política-de-privacidad` | Legal (footer) | Página legal estándar. |
| Aviso legal | `/aviso-legal` | Legal (footer) | Página legal estándar. |

## Elementos de navegación excluidos (no son páginas auditables)

- **Login**: re-examinado en la pasada de utilidad/login (2026-10-28) tras el
  hallazgo de Alminar. A diferencia de Alminar (botón "FAMILIAS" real en
  header → `/mi-cuenta/` con formulario funcional), el "Login" que este doc
  recogía del fetch inicial **no es una página real ni un icono accionable**:
  es un panel off-canvas huérfano (`#login-navigation`) presente en el HTML
  pero sin ningún botón/icono del header que lo abra (el header solo tiene
  Menú, Buscador e Idioma — confirmado inspeccionando el DOM en vivo), y su
  contenido está vacío (solo un `<h2>` "Login" y los mismos enlaces de idioma
  duplicados, sin formulario). `/mi-cuenta/` devuelve 404 en este dominio. No
  se añade tarjeta — no hay página que auditar.
- **Buscador** (icono de header): no es una página, es un campo de
  búsqueda.
- **Canal de Ética** (footer): confirmado en la pasada de utilidad/login
  (2026-10-28) — el enlace del DOM en vivo apunta a un dominio externo con
  token de sesión propio (plataforma de denuncias de terceros), no a una
  página de colegiocedes.com. Se mantiene fuera del inventario de páginas.

## Pendiente

- ~~Confirmar si "Jornada de Puertas Abiertas" (acceso directo) y "Vida
  Escolar → Open Days" son la misma página con dos URLs o contenido
  realmente distinto~~ — **resuelto 2026-11-04**, ver Changelog.
- ~~Pasada visual (capturas) en cuanto el navegador funcione~~ —
  **resuelto 2026-11-04**, ver Changelog.

## Changelog

- 2026-10-28: Pasada de utilidad/login + claridad de secciones-ancla
  (en paralelo a la misma pasada en Alminar). "Login" del header
  re-examinado a fondo: no es un icono real ni una página navegable (panel
  off-canvas huérfano sin trigger ni formulario, `/mi-cuenta/` da 404) —
  no se añade tarjeta nueva, ver detalle en "Elementos de navegación
  excluidos". Revisadas las 30 tarjetas existentes por la misma ambigüedad
  que Alminar (secciones nombradas que podían leerse como páginas
  perdidas): solo **Proyecto Educativo y Currículo** la tenía de verdad (10
  servicios adicionales listados en texto corrido en una sola URL) y recibió
  el bloque "SECTIONS ON THIS PAGE (ANCHOR NAV — one URL, no separate
  pages)" en Figma, con su descripción principal recortada; "Nuestra
  Historia" se descartó tras verificar en vivo que sus enlaces son a
  páginas hermanas reales ya catalogadas (Quiénes somos, Nuestra Ética,
  Política de Calidad, Ariston Education), no anclas internas. Total: 30/30
  tarjetas, sin cambio en el conteo ni en la numeración.
- 2026-10-28 (2ª pasada, a petición directa de la propietaria del
  proyecto): la propietaria pidió que, en vez del bloque de nota "SECTIONS
  ON THIS PAGE (ANCHOR NAV — one URL, no separate pages)" añadido en la
  pasada anterior sobre la tarjeta "Proyecto Educativo y Currículo", cada
  uno de los 10 "servicios adicionales" listados tuviera su propia tarjeta
  de auditoría — porque, a su juicio, llegar a una sección concreta
  (por pestaña, por ancla o por cualquier navegación interna) equivale a
  llegar a un destino distinto desde la perspectiva de la persona
  visitante, aunque técnicamente sea una sola URL.

  **Verificación en vivo del mecanismo real (antes de construir nada):**
  se inspeccionó el DOM en vivo de `/nuestro-colegio/school-overview`
  (HTML crudo vía `curl`, confirmado visualmente con capturas reales en
  el navegador). Resultado: **ninguno de los tres mecanismos aplica.**
  No es "Anchor Navigation" (no existe ningún `id` ni fragmento de URL en
  ninguno de los 10 ítems — se comprobó la lista completa de `id=` del
  documento y no hay ninguno asociado a ellos) y no es "Tabbed Content"
  (no hay `role="tab"`, `aria-selected` ni ningún JS que oculte/muestre
  paneles). Los 10 ítems son, literalmente, un título en negrita seguido
  de un párrafo, repetidos dentro de **un único bloque WYISWYG de texto
  corrido** (`<section class="flexible-section flexible-section--wysiwyg">`),
  sin ningún contenedor ni separación por ítem en el HTML — ni siquiera
  hay `<li>` o `<div>` individuales. Visualmente, en el navegador, los 10
  aparecen uno detrás de otro en el mismo scroll continuo, exactamente
  como cualquier párrafo largo de una página: la persona visitante no
  puede "navegar" a un ítem concreto (no hay clic, no hay ancla que
  saltar), solo puede desplazarse y leer. Esto es distinto del caso
  Alminar "Gabinete de Psicología y Logopedia" (pestañas reales
  confirmadas) y del caso Institucional "Leadership Team" (anclas reales
  confirmadas) — aquí no se confirmó ningún mecanismo de navegación
  interna, ni pestaña ni ancla.

  Dado que la justificación de la propietaria depende explícitamente de
  que exista "una pestaña, un enlace ancla, o cualquier navegación en
  página", y se confirmó que no existe ninguno de los tres, esto se
  documenta aquí como una discrepancia a tener en cuenta: los 10 ítems
  no son técnicamente "destinos alcanzables" de la misma forma que en
  los casos de Alminar/Institucional citados como precedente. Aun así,
  **se construyeron las 10 tarjetas según lo pedido** — el criterio de
  "unidad de contenido auditable por separado" para comparación a nivel
  de plantilla sigue siendo válido independientemente del mecanismo de
  navegación — pero cada tarjeta nueva documenta honestamente, en su
  propio campo de URL/nota, que no existe ancla ni pestaña real para ese
  ítem (ver tarjetas en Figma, categoría "NUESTRO COLEGIO" →
  "↳ Sections within /nuestro-colegio/school-overview").

  **Cambios en Figma** (página "Audit", frame "1. Page Audit — CEDES"):
  - Se eliminó el bloque de nota "SECTIONS ON THIS PAGE" de la tarjeta
    "Proyecto Educativo y Currículo" y se reescribió su descripción y su
    lista de módulos para reflejar que los 10 servicios ahora tienen
    tarjeta propia (la tarjeta de overview se mantiene — cubre hero,
    intro, los 4 teasers de etapa que enlazan a las páginas de etapa ya
    catalogadas, enlaces relacionados, compartir y "¿Y ahora qué?").
  - Se añadieron 10 tarjetas nuevas (Inglés, Programa Cambridge, Programa
    para alumnos internacionales, Aprendizaje cooperativo, Aprendizaje
    por proyectos, Programa de alfabetización digital, Plan lector,
    Programa de competencias sociales, Programa de laboratorio, Aulas
    temáticas), cada una con captura real de su sección, misma forma de
    tarjeta que el resto del frame (340×220 miniatura, 14px de radio,
    sombra), título real, URL compartida + nota honesta sobre la
    ausencia de ancla/pestaña, descripción basada en el texto real de la
    página, y "MODULES IDENTIFIED" = Content Media (#2, título en negrita
    + párrafo, sin imagen ni CTA) + nota explícita de que ni Anchor
    Navigation ni Tabbed Content aplican. Agrupadas bajo el sub-label
    "↳ Sections within /nuestro-colegio/school-overview" dentro de la
    categoría NUESTRO COLEGIO.
  - Se evaluaron también las 4 secciones por etapa (Infantil/Primaria/
    Secundaria/Bachillerato) que aparecen en esta misma página de
    overview: **no recibieron tarjeta propia**, porque son teasers
    breves (3 párrafos cortos) que enlazan mediante CTA de texto
    ("Descubre más en nuestra página X") a las 4 páginas de etapa reales,
    que ya están auditadas como tarjetas independientes desde la 4ª
    tanda del inventario (`/nuestro-colegio/infantil`, `/primaria`,
    `/secundaria`, `/bachillerato`). A diferencia de los 10 servicios,
    estas 4 secciones sí tienen un destino real y ya catalogado al que
    apuntan — duplicar la tarjeta sería redundante.
  - **Renumeración global:** las 40 tarjetas del frame se renumeraron de
    forma consecutiva ("CEDES — PAGE N/40") en el mismo orden de lectura
    de siempre (categorías de arriba a abajo, tarjetas de cada grid por
    fila). Total de página CEDES: **30 → 40** (−1 tarjeta combinada
    "Proyecto Educativo y Currículo" con el bloque de nota, que se
    mantuvo editada pero no se contó como nueva; +10 tarjetas de
    servicios).
  - Nota para el inventario de módulos: `inventario-modulos.md` (línea
    ~87) registra "CEDES | 'Servicios adicionales' (school-overview) | 10
    | ... " bajo el módulo #3 (Grid repetible de tarjetas, variante lista
    vertical). La inspección en vivo de esta pasada sugiere que encaja
    mejor como variante mínima de Content Media (#2) — no hay ningún
    contenedor repetible en el HTML, es texto corrido con negritas — pero
    no se tocó ese fichero en esta pasada (fuera del alcance asignado:
    solo frame CEDES + este as-is). Pendiente de revisión conjunta.
- 2026-11-04: Pasada visual. **"Jornada de Puertas Abiertas" confirmada
  como alias:** `/próxima-jornada-de-puertas-abiertas` redirige a
  `/nuestro-colegio/school-life/open-days` — es la misma página con dos
  URLs, no contenido duplicado; no hace falta tratarla como página
  independiente. Home revisado visualmente: Hero + grid de accesos
  coincide con lo ya documentado por texto, sin hallazgos nuevos.

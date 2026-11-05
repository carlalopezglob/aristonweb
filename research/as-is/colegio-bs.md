# Auditoría — CBS (Colegio Británico de Sevilla)

**URL:** https://colegiobs.eu/
**Fecha de revisión:** 2026-10-22
**Método:** lectura de contenido/estructura (WebFetch) — pendiente pasada visual.

## Home

1. **Barra superior:** "Back", logo, "Trabaja con nosotros", teléfono, email,
   "Acceso de usuarios", redes (WhatsApp, FB, IG, X, YouTube).
2. **Menú principal (mega-menú, se repite como barra inferior):**
   - Inicio.
   - Conózcanos: Carta del Director, Carta de la Directora Ejecutiva,
     Ideario, Historia, Acerca de Ariston Education, 5 B's Valores CBS,
     Himno, Puertas Abiertas, Conferencias (archivo histórico 2016–2019),
     Calidad.
   - Nuestro colegio: Servicios (comedor, uniforme, extraescolares, summer
     camp, outdoor adventures, apps, calendario, shop), Instalaciones, Acceso
     Usuarios.
   - Programa Educativo: Key Stages (EYFS/Primary/Secondary/Sixth Form),
     Departamentos, Logros Académicos, Inspecciones Nabss, Acreditaciones,
     Sistema de casas, Work Experience, Globot.
   - Admisiones: Por qué CBS, Solicitud de Información, Dossier, FAQ,
     Contacto.
   - Noticias.
   - Selector idioma (bandera).
3. **Hero:** "Discover CBS" / "Somos el Británico de Sevilla" + subtítulo +
   párrafo + 3 pilares (currículo británico, comunidad internacional, de
   Sevilla al mundo).
4. **Formulario de contacto:** "Estamos aquí para ayudarte" — lead-gen con
   checkbox de privacidad.
5. **Key Stages (4 tarjetas numeradas):** Early Years / Primary / Secondary /
   Sixth Form, cada una con imagen, número, título, texto, CTA "Descubre...".
6. **Logros académicos:** cifra destacada (19 Outstanding Learner Awards) +
   logo Cambridge + 3 stats + CTA + carrusel de alumnos premiados.
7. **Entorno natural:** 3 keywords + 2 CTAs (Puertas Abiertas / WhatsApp) +
   galería de 3 imágenes con pie de foto.
8. **Acreditaciones y reconocimientos:** bloque NABSS + Cambridge
   (acreditaciones oficiales, con CTA externo) + lista de premios/años.
9. **Noticias:** título + carga dinámica ("Cargando...") + CTA "Ver todas" +
   avisos de financiación europea (NextGenerationEU).
10. **Footer:** logo + contacto + redes; logo Ariston Education (endorsement,
    con link a aristonedu.com); columnas "Enlaces de interés" y "Entorno CBS";
    copyright + crédito agencia (Rebrandea).
11. **Widget flotante de WhatsApp** (Joinchat).

## Módulos candidatos detectados

- Barra superior de contacto + redes + accesos (trabajo, usuarios)
- Mega-menú multinivel (el más complejo de los 4 sitios)
- Hero con 3 pilares destacados
- Formulario de contacto / lead-gen con checkbox RGPD
- Grid de etapas numeradas (Key Stages) con CTA individual
- Bloque de cifra destacada + logo de acreditación + stats + CTA
- Bloque "entorno/campus" con keywords + CTAs dobles + galería con pie de foto
- Bloque de acreditaciones oficiales (logo + texto + CTA externo)
- Lista de premios/reconocimientos (texto, sin tarjetas)
- Sección de noticias con carga dinámica + avisos institucionales
  (financiación)
- Footer con endorsement del grupo + columnas temáticas
- Widget de chat flotante (WhatsApp)

## Notas

- Es el sitio con navegación más compleja (mega-menú de 5 niveles,
  "Conferencias" como archivo histórico 2016–2019 — posible contenido legacy a
  evaluar si se migra).
- Único de los 3 coles con formulario de lead-gen en el home.
- Único con widget de chat flotante.
- El endorsement de Ariston aparece en el footer, igual que Alminar.

## Páginas internas revisadas

- **Admisiones:** hero con 5 CTAs multicanal (página/visita/WhatsApp/email/
  teléfono), 3 pilares, bloque de filosofía, lista de ~15 afirmaciones
  ("¿Por qué elegir CBS?"), bloque "Atención personalizada" (4 sub-bloques),
  **proceso de admisión en 5 pasos numerados** (mismo esquema que el grid de
  tarjetas, en vertical), bloques de Reserva de plaza/Inscripción con listas
  de requisitos/plazos/documentación, 1 documento descargable (Google Docs).
  No hay formulario embebido ni FAQ en la propia página (enlazan a páginas
  aparte). Ver #1, #3, #17 en el inventario. **Corrección 2026-10-28:** las
  5 "secciones" (Queremos conoceros · Solicitud de información ·
  Preinscripción · Reserva de plaza y matriculación · Inscripción) NO son
  anchor-scroll — son paneles de un **acordeón WPBakery** (`vc_tta-accordion`,
  solo un panel `vc_active` a la vez); ver Changelog y el inventario de
  módulos (#"Accordion Expandable").

- **Nuestro Colegio → Servicios** (`/nuestro-colegio/servicios/`): hub de
  recursos con **filtro por pestañas** (All / Day-to-day / Access &
  communication / Academic support / Beyond the classroom — variante
  simple del módulo Filtros #18) que reorganiza un grid de tarjetas (#3)
  por categoría, con mensaje de "sin resultados" y banners intermedios
  por tema. Sin módulos nuevos, pero es el mejor ejemplo de un patrón
  "índice/directorio" en el sitio (comparable a Find a School /
  News & Events de institucional) — relevante para la propuesta de
  plantillas.
- **Programa Educativo → Secondary** (`/programa-educativo/secondary/`,
  muestra representativa de las 4 páginas de Key Stage — EYFS/Primary/
  Secondary/Sixth Form, mismo patrón): bio de la coordinadora de etapa,
  bloques por Key Stage (KS3/KS4) con **listas de asignaturas separadas**
  (obligatorias KS3, opcionales/core KS4 — Lista simple #17), objetivos de
  ciclo, metodología, enlaces a manuales (handbook) descargables (Lista de
  enlaces #8, destino a documento) y CTA a Admisiones/FAQ. Mismo catálogo
  de módulos que el resto del proyecto — se audita en profundidad como
  muestra del patrón "página de etapa/departamento" que pide el
  propietario del proyecto, no por introducir un módulo nuevo.
- **Extraescolares → Baloncesto** (`/nuestro-colegio/extraescolares/baloncesto/`,
  muestra representativa de las 15 páginas de actividad extraescolar):
  migas de pan, texto de descripción + lista numerada de 6 ventajas
  (Lista simple numerada #17), horario en texto, CTA a formulario de
  inscripción **externo** (sin formulario embebido), solo logotipos (sin
  fotos de la actividad). Confirma el patrón de "página de detalle de
  actividad" — mismo esquema para las 14 restantes, ver tabla de nivel
  ligero.
- **Departamento Psicopedagógico y de Apoyo** (`/departamento-psicopedagogico-y-apoyo/`):
  página de departamento con 5 áreas de servicio, bloque "quiénes somos"
  del equipo externo (Sigma Orienta), lista de 4 objetivos compartidos,
  **FAQ de 11 preguntas** (Grid de tarjetas tipo FAQ, #3) y formulario de
  contacto con checkbox de privacidad (#11). Sin módulos nuevos — auditada
  en profundidad como el ejemplo más claro de "página de departamento"
  del proyecto.
- **Admisiones → Por qué CBS** (`/por-que-cbs-colegio-britanico-sevilla/`):
  página larga tipo landing de argumentario (currículo británico,
  metodología, Sixth Form, bienestar, valores, campus, comunidad,
  acreditaciones NABSS/Cambridge) con múltiples CTAs de cierre. Mismo
  catálogo de módulos (Contenido Media, Lista simple, Grid de tarjetas,
  bloque de acreditaciones ya visto en home) — se trata como sub-paso de
  Admisiones digno de auditoría profunda porque CBS, a diferencia de
  Alminar, reparte el argumentario de admisiones en una página dedicada
  separada de `/admisiones/`.

## Páginas internas — nivel ligero (reutilizan módulos ya catalogados)

| Página | URL | Categoría de nav | Nota |
|---|---|---|---|
| Carta del Director | `/conozcanos/carta-del-director/` | Conózcanos | Contenido Media (texto + foto). |
| Carta de la Directora Ejecutiva | `/conozcanos/carta-de-la-directora-ejecutiva/` | Conózcanos | Contenido Media. |
| Ideario | `/conozcanos/ideario/` | Conózcanos | Contenido Media / Lista simple de principios. |
| Historia del CBS | `/conozcanos/historia-del-cbs/` | Conózcanos | **Timeline con fechas reales** (2009/2010/2026) — confirma el módulo #22 ya catalogado en institucional, no es nuevo. |
| Acerca de Ariston Education | `/acerca-de-ariston-education/` | Conózcanos | Contenido Media (mismo texto de grupo que institucional). |
| 5 B's Valores CBS | `/5bs-valores-cbs/` | Conózcanos | Lista simple / Grid de tarjetas de valores. |
| Himno del CBS | `/himno-del-cbs/` | Conózcanos | Contenido Media (vídeo/letra). |
| Jornadas de Puertas Abiertas | `/conozcanos/jornadas-puertas-abiertas/` | Conózcanos | Contenido Media + CTA. |
| Conferencias del CBS (archivo) | `/conozcanos/conferencias-del-cbs/` | Conózcanos | Listado tipo Grid de tarjetas con miniatura+título, inscripción externa — archivo histórico. |
| Conferencia 2019 — educación emocional | `/conozcanos/conferencias-del-cbs/conferencia-educativa-2019-educacion-emocional/` | Conózcanos | Mismo patrón de página legacy que el resto del archivo. |
| Conferencia 2018 — nutrición y hábitos | `/conozcanos/conferencias-del-cbs/conferencia-educativa-2018-nutricion-habitos/` | Conózcanos | Idem. |
| Conferencia 2017 — acoso escolar | `/conozcanos/conferencias-del-cbs/conferencia-educativa-2017-acoso-escolar/` | Conózcanos | Idem. |
| Conferencia 2016 — claves de educación | `/conozcanos/conferencias-del-cbs/conferencia-educativa-2016-claves-de-educacion/` | Conózcanos | Idem. |
| Calidad | `/conozcanos/calidad/` | Conózcanos | Contenido Media (acreditaciones de calidad). |
| Instalaciones | `/nuestro-colegio/instalaciones/` | Nuestro Colegio | Contenido Media + mapa de ubicación + enlaces de interés. |
| Uniforme escolar | `/nuestro-colegio/uniforme-escolar/` | Nuestro Colegio | Lista simple por tipo de prenda. |
| Calendario escolar | `/nuestro-colegio/calendario-escolar/` | Nuestro Colegio | Contenido Media / calendario embebido. |
| Comedor | `/nuestro-colegio/comedor/` | Nuestro Colegio | Mismo patrón que Alminar Comedor. |
| Transporte escolar | `/nuestro-colegio/transporte-escolar/` | Nuestro Colegio | Lista de datos clave (#16) por ruta. |
| Extraescolares (overview) | `/nuestro-colegio/extraescolares/` | Nuestro Colegio | Grid de tarjetas (#3) que enlaza a las 15 páginas de actividad. |
| Extraescolares — Ballet / Multideporte / Fútbol / Flamenco / Alemán / Francés / Judo / Danza Urbana / Bádminton / Natación / Tenis / Taller de Arte / Saxofón / Ajedrez | `/nuestro-colegio/extraescolares/{slug}/` (14 URLs) | Nuestro Colegio | Mismo patrón que la ficha deep de Baloncesto — sin auditoría de contenido en profundidad por unidad. |
| CBS Summer Camp | `/campamentos-de-verano-en-ingles-sevilla/` | Nuestro Colegio | Contenido Media tipo landing. |
| Apps del CBS | `/apps-del-cbs/` | Nuestro Colegio | Contenido Media + enlaces de descarga de apps. |
| CBS Alumni | `/cbs-alumni/` | Nuestro Colegio | Contenido Media / comunidad de antiguos alumnos. |
| Programa Educativo (overview) | `/programa-educativo/` | Programa Educativo | Grid de tarjetas (#3) a los 4 Key Stages. |
| EYFS | `/programa-educativo/eyfs/` | Programa Educativo | Mismo patrón que la ficha deep de Secondary. |
| Primary | `/programa-educativo/primary/` | Programa Educativo | Idem. |
| Sixth Form | `/programa-educativo/sixth-form/` | Programa Educativo | Idem. |
| Logros Académicos | `/logros-academicos-cbs/` | Programa Educativo | Bloque de cifras (#4) + carrusel — mismo patrón que home. |
| Inspecciones Nabss | `/inspecciones-nabss/` | Programa Educativo | Contenido Media (acreditación). |
| Acreditaciones | `/programa-educativo/acreditaciones/` | Programa Educativo | Contenido Media + logos. |
| Sistema de casas | `/sistema-de-casas/` | Programa Educativo | Grid de tarjetas (4 casas) + Lista simple de méritos (bronce→diamante). |
| Work Experience | `/programa-educativo/work-experience/` | Programa Educativo | Contenido Media. |
| Globot | `/globot/` | Programa Educativo | Contenido Media (programa de robótica). |
| Expedientes y convalidaciones | `/programa-educativo/expedientes-convalidaciones/` | Programa Educativo | Contenido Media / Lista simple de requisitos. |
| Solicitud de Información | `/solicitud-informacion/` | Admisiones | Página del formulario de lead-gen real — campos no capturados por el fetch de texto (iframe/script), sigue pendiente de pasada visual. |
| Dossier Informativo | `/dossier-informativo/` | Admisiones | Bloque "¿Hablamos?" de contacto + privacidad — el dossier en sí no se capturó como texto. |
| Preguntas Frecuentes | `/admisiones/preguntas-frecuentes/` | Admisiones | Lista de preguntas/respuestas en texto corrido (sin acordeón visible en el fetch). |
| Contacto | `/contacto/` | Admisiones | Contenido Media + datos de contacto. |
| Aviso legal | `/aviso-legal/` | Legal (footer) | Página legal estándar. |
| Política de privacidad | `/politica-privacidad/` | Legal (footer) | Página legal estándar. |
| Política de cookies | `/politica-cookies/` | Legal (footer) | Página legal estándar. |

## Elementos de navegación excluidos (no son páginas auditables)

- ~~**Acceso Usuarios / Acceso de usuarios** (`/acceso-usuarios/`): portal de
  login.~~ Reincorporada el 2026-10-28 como tarjeta de formato uniforme
  (categoría ACCESO, CBS — PAGE 62/62) — es un portal de login/acceso, pero
  el propietario del proyecto pidió incluir este tipo de páginas igual que
  el resto, descritas honestamente como login/acceso. Ver Changelog.
- **Shop / Checkout** (`/checkout/`, `/order-confirmation/`,
  `/order-failed/`): flujo de e-commerce (tienda de uniformes), no
  contenido editorial.
- **Noticias**: no existe página estática propia en el sitemap — el home
  la carga dinámicamente ("Cargando..."); no hay nav page dedicada que
  auditar más allá de lo ya descrito en el home.
- **Versión en inglés** (`/en/...`, ~45 URLs duplicadas): mismo contenido
  que su equivalente en español, solo cambia el idioma — no se cuenta
  como página adicional.
- **Páginas de desarrollo/test**: `/404-error-page/`, `/login-customizer/`,
  `/prueba-formulario/` — utilidades internas, no contenido de nav.

## Pendiente

- ~~Confirmar campos reales del formulario de Solicitud de Información~~ —
  **resuelto 2026-11-04**, ver Changelog.
- ~~Pasada visual (capturas) en cuanto el navegador funcione~~ —
  **resuelto 2026-11-04**, ver Changelog.
- ~~Capturas reales de las 5 tarjetas nuevas de sección de Admisiones~~ —
  **resuelto 2026-10-28** (pasada posterior, mismo día): capturadas las 5
  con el acordeón expandido panel a panel (Queremos conoceros, Solicitud
  de información, Preinscripción, Reserva de plaza y matriculación,
  Inscripción), subidas directamente a cada nodo de tarjeta y notas
  "[Screenshot pending]" eliminadas.

## Changelog

- 2026-10-28: Pasada de utilidad/login + claridad de secciones-ancla (en
  paralelo a la misma pasada en Alminar y CEDES). "Acceso de usuarios" /
  "Acceso Usuarios" del header y del submenú "Nuestro colegio" —
  previamente excluido como portal de login, ver "Elementos de navegación
  excluidos" — se añade como tarjeta nueva (formato uniforme, captura real
  de pantalla): **Acceso Usuarios** (`/acceso-usuarios/`), categoría nueva
  **ACCESO**, CBS — PAGE 62/62. Es un hub "Área de familias" con bloque de
  login a Phidias (Google o usuario/contraseña), accesos rápidos a otras
  páginas ya catalogadas y un apartado de apps — descrito honestamente como
  página de login/acceso, no de contenido. Revisadas las 61 tarjetas
  existentes por la misma ambigüedad que Alminar (secciones nombradas que
  podían leerse como páginas perdidas): la nav de CBS está mayormente
  repartida en páginas individuales, así que casi ninguna tarjeta lo tenía;
  solo **Admisiones** (`/admisiones/`) resultó ser una página única con
  secciones ancladas de verdad (otros CTAs del sitio enlazan a
  `/admisiones/#anchor`, incluida una sección "Solicitud de información"
  que coincide de nombre con la página real `/solicitud-informacion/`) y
  recibió el bloque "SECTIONS ON THIS PAGE (ANCHOR NAV — one URL, no
  separate pages)" listando Queremos conoceros · Solicitud de información ·
  Preinscripción · Reserva de plaza y matriculación · Inscripción, más
  "Anchor Navigation" añadido a MODULES IDENTIFIED. Se descartaron por lo
  mismo: Home (lista de módulos genérica, sin nav de anclas), "Nuestro
  Colegio — Servicios" (filtro por pestañas sobre un único grid, ya descrito
  sin ambigüedad) y "Admisiones — Por qué CBS" (landing larga de una sola
  pieza pero sin mecanismo de anclas real: comprobado en vivo que ningún
  heading tiene ancla ni hay CTA externo que apunte a una sección concreta).
  Total: 62/62 tarjetas, numeración renumerada de principio a fin
  (`CBS — PAGE n/61` → `CBS — PAGE n/62`).

- 2026-10-28 (segunda pasada): **se deshace la decisión anterior de usar un
  bloque de nota** para las 5 secciones de Admisiones — a petición explícita
  de la propietaria del proyecto, cada sección pasa a tener su propia
  tarjeta individual (misma razón que ya aplicaba a Alminar "El Colegio":
  desde la perspectiva de la visitante, llegar a un ancla/sección concreta
  —vía CTA externo o nav propia de la página— equivale a llegar a un
  destino distinto, aunque técnicamente sea una sola URL). Se eliminó la
  tarjeta única **Admisiones** (`CBS — PAGE 54/62`, con el bloque "SECTIONS
  ON THIS PAGE") y se sustituyó por 5 tarjetas nuevas, agrupadas bajo la
  etiqueta "↳ SECTIONS WITHIN /ADMISIONES/ (SAME SHARED URL — ACCORDION
  PANELS, NOT SEPARATE ROUTES)" dentro de la misma categoría ADMISIONES:
  **Queremos conoceros** (`/admisiones/#1707828285529-8fb33500-62d3`,
  `CBS — PAGE 54/66`), **Solicitud de información**
  (`/admisiones/#1707827302535-d421b5da-db48`, 55/66), **Preinscripción**
  (`/admisiones/#1707827258912-c7759c7a-cb1f`, 56/66), **Reserva de plaza y
  matriculación** (`/admisiones/#1707827258927-7352d87f-e631`, 57/66) e
  **Inscripción** (`/admisiones/#1707827379934-f9d424d5-7fdc`, 58/66).

  **Corrección de mecanismo (hallazgo clave):** antes de reconstruir, se
  verificó en vivo el HTML real de `/admisiones/` (la navegación del panel
  de navegador quedó bloqueada en esta sesión, así que se usó `curl` sobre
  el HTML crudo en su lugar — ver "Pendiente"). El bloque de nota anterior
  afirmaba que las 5 secciones eran "self-link anchor-ids... no un interfaz
  de pestañas" con CTAs externos apuntando a anclas concretas. **Esto era
  incorrecto**: el HTML muestra que las 5 (en realidad 6, ver nota) son
  paneles `<div class="vc_tta-panel" id="...">` dentro de un contenedor
  `vc_tta-accordion` de WPBakery — **un acordeón real, no anchor-nav**: solo
  el primer panel tiene la clase `vc_active` (visible) al cargar la página;
  el resto está colapsado y requiere clic para expandirse (no están todos
  visibles simultáneamente en un scroll continuo, que era el criterio para
  descartar pestañas). Tampoco se encontró ningún CTA externo (home,
  footer, u otra página) que enlace a `/admisiones/#<id>` — los únicos
  enlaces a esos fragmentos son los self-links de cada título de panel
  (patrón estándar de WPBakery, no navegación real desde fuera). El panel
  "Queremos conoceros" en realidad son 2 paneles de acordeón separados
  (`QUEREMOS CONOCEROS` + `Y QUE VUESTROS HIJOS NOS CONOZCAN`); se mantuvo
  como una sola tarjeta por fidelidad a los 5 nombres que pidió la
  propietaria, mencionando el segundo panel en la descripción. Se detectó
  además texto publicitario ajeno ("correas de smartwatch") inyectado al
  final del panel "Queremos conoceros" — posible contenido spam/comprometido
  en el HTML en vivo, anotado en la tarjeta mas no gestionado.

  **MODULES IDENTIFIED** de las 5 tarjetas nuevas usa **"Accordion
  Expandable"** (ya catalogado para CEDES "Política de privacidad"/"Aviso
  legal", ver inventario de módulos) como mecanismo de acceso, no "Anchor
  Navigation" (que queda descartado para esta página) ni la etiqueta
  genérica "Tabbed Content" (que en este proyecto se reserva para pestañas
  horizontales de verdad, p. ej. Alminar "Gabinete de Psicología" — el
  widget de CBS es verticalmente colapsable, acordeón, no una barra de
  pestañas). No es un módulo nuevo: sigue siendo variante de presentación
  ya prevista en el catálogo de 22 tipologías.

  **Renumeración completa:** 62 → 66 tarjetas (`CBS — PAGE n/62` →
  `CBS — PAGE n/66`) en las 66 tarjetas del frame, sin huecos ni
  duplicados.

- 2026-10-28 (tercera pasada): revisión puntual pedida por la propietaria
  sobre 5 puntos concretos. Resultado:
  - **Formulario de Contacto** (`/contacto/`): ya estaba correctamente
    documentado ("Contact details and a contact form" + módulo "Contact
    Form") — no hacía falta cambio.
  - **Formulario de reserva de visita en Admisiones**: confirmado en vivo
    que el CTA "Visita nuestro colegio" de `/admisiones/` lleva a
    `/conozcanos/jornadas-puertas-abiertas/` — **la misma URL** que la
    tarjeta ya existente "Jornadas de Puertas Abiertas" (ver hallazgo de
    la propietaria: "open days con página que es la misma que la de
    solicitar visita", confirmado). Esa página tenía descrito solo un
    "CTA Banner" genérico, pero al hacer clic en "Solicita tu visita" se
    despliega un **formulario real multi-sección** (datos de contacto,
    fecha preferida de visita, edades de los hijos, etapa educativa de
    interés, curso de incorporación) — corregido a módulo **Form**.
  - **"Revista"**: identificada como el **visor de documento interactivo
    (flipbook)** del plugin WordPress "3D FlipBook" — no estaba en el
    menú de navegación visible, se encontró vía `/3d-flip-book-sitemap.xml`
    (5 URLs: 1 archivo índice + 4 documentos). **Esquema de campos
    genuinamente distinto** de cualquier módulo ya catalogado (tiene
    estado propio: página actual, zoom, marcador — no es un embed pasivo)
    → **reabre el catálogo de módulos, nuevo #23** "Visor de documento
    interactivo (flipbook)", documentado en `inventario-modulos.md`.
    Solo 1 de los 4 documentos (Dossier Informativo) tenía ya página de
    aterrizaje propia catalogada (`/dossier-informativo/`, corregida para
    citar el módulo #23 en vez de "Content Block" genérico); se añaden
    4 tarjetas nuevas en categoría nueva **RECURSOS (3D FLIPBOOK)**: 3D
    FlipBook Archive (índice), English Dossier, Informe Nabbs CBS 2025,
    Dossier CBS Outdoor Adventures.
  - **"No veo Secondary"**: confirmado que **sí existe** — `Card —
    Programa Educativo — Secondary` (ficha deep, con bio de coordinadora
    de etapa) ya estaba en el frame antes de esta pasada; probablemente
    se perdió de vista entre las 66 tarjetas. Sin cambios.

  **Renumeración completa:** 66 → 70 tarjetas (`CBS — PAGE n/66` →
  `CBS — PAGE n/70`), 4 tarjetas nuevas numeradas 67-70/70.
- 2026-11-04: Pasada visual de `/solicitud-informacion/`. **Hallazgo
  nuevo:** el formulario es un **Google Form embebido, multi-paso
  (página 1 de 2)** — no un formulario nativo. Página 1 capturada: Nombre
  completo del padre/madre/tutor, Teléfono, Nombre completo del alumno/a,
  Fecha de nacimiento del hijo/a, Curso/año de inscripción (desplegable),
  Centro educativo de procedencia, Cómo conoció CBS (desplegable),
  Observaciones (texto libre). No se avanzó a la página 2 para no forzar
  el flujo del formulario real del cliente. Corrige el módulo a
  `CAT-FRM-004` (multi-paso), no solo `CAT-FRM-001`. Home revisado
  visualmente, coincide con lo documentado por texto.

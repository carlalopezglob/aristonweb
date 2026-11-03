# Research — Hallazgos

> **Qué es este archivo.** Es el único documento de la carpeta `research/` que puede consultarse en Fase 2. No es un dump de notas: es una síntesis estructurada que Claude puede leer en 2 minutos y extraer criterio de diseño de ella.
>
> **Quién lo rellena.** La persona que lidera la Fase 1 (Research), al terminarla. No se rellena durante la investigación — se rellena al final, cuando ya sabes qué importa.
>
> **Cuándo se actualiza.** Solo si aparece información nueva que cambia alguna de las decisiones ya tomadas. Anotar la fecha y el motivo al pie.

---

## 0. El proyecto, en una frase

Una plataforma multi-tenant (`aristonedu.com` + `/<cole>`) con **10-12 plantillas de página y hasta 30 módulos**, construida por GUT para la institucional + 3 coles piloto (Alminar, CEDES, CBS), que el **equipo central de Ariston** (no GUT) despliega después, sin ayuda de agencia, al resto de su cartera — **21 coles / 28 campus / 9 países** a fecha de agosto 2026, con ambición de llegar a 80+.

---

## 1. Lo que sabemos de los usuarios

- Perfil principal: familias en proceso de elegir o confirmar colegio — Admisiones es el CTA de máxima prioridad en las 3 webs de cole.
- Perfil secundario: la propia red (futuros coles a integrar, partners, prensa, talento) — la web institucional existe también para esto, no solo para familias.
  - **Matiz de posicionamiento (encuesta previa E1, Nerea Lorenzo):** los coles interesados en
    unirse al grupo deben poder contactar, pero "la web debe cuidarse en cómo reflejar esto, ya
    que no queremos parecer un agregador de colegios" — esta ruta secundaria debe quedar
    claramente subordinada a las familias, no competir visualmente con ellas.
- El grupo tiene **drivers muy distintos por mercado**: Budapest es 80% familias expatriadas, Albacete (CEDES) 90% locales — el cliente ya lo sabe y lo ha identificado como riesgo de diseño (ver §3).
- **Encuesta real de percepción tras el anuncio de la unión a Ariston** (`Ariston_Perception_Insights_schools_1stlaunch_wave.pdf`, 13 coles / 5 regiones, Heads of School + MAC leads, 22 sep–7 oct 2026) — no es una entrevista de Sprint 0, es investigación de mercado ya cerrada del cliente:
  - **Personal muy favorable (70% positivo), familias más cautas (55% positivo)** — ningún cole reportó reacción negativa, pero la mitad de las familias están "indiferentes o a la espera".
  - **"Nivel de detalle" es lo peor valorado tanto por personal como por familias** (3.25/4 y 3.17/4, las notas más bajas de toda la encuesta) — las familias piden pasos concretos y planes para su cole, no solo mensajes de tranquilidad. Implicación directa de contenido: cualquier plantilla que anuncie/explique la pertenencia a Ariston necesita un bloque de "qué cambia y qué no para mi hijo", no solo posicionamiento de marca.
  - **⚠️ Tensión real con el pilar "AI Fluency" de la marca:** en 3 de 13 coles, el personal pregunta cómo se enseñará la IA y por quién, y **muchas familias piden explícitamente MENOS tecnología, no más** ("Most parents would like their children to use less technology, not more, so AI as a pillar needs explaining"). Esto no invalida el posicionamiento oficial (AQ = EQ + IQ), pero sí indica que la web no puede simplemente declarar "somos el grupo de la IA" sin explicar/aterrizar qué significa en el aula — candidato fuerte para cómo se redacta el módulo de Pilares Educativos.
  - **Baja notoriedad de marca, confirma la prioridad de SEO/GEO ya registrada en §2:** en 1 cole, búsquedas online de "Ariston" antes de la comunicación oficial devolvían resultados no relacionados y alimentaban especulación.
  - Otros temas recurrentes: fatiga por cambios (reestructuraciones/cambios de dirección coincidiendo con la adquisición, 3 coles), preocupación por ratio/tamaño de clase y apoyo SEND (2 coles), estabilidad a largo plazo ante cierres en el mercado local (1 cole). Tono que genera confianza: "cercano, no corporativo" (2 coles) — coincide con el tono "humano, no corporativo" ya pedido en la guía de marca y en la encuesta E1.
- Posicionamiento declarado: un escalón por debajo de grupos como North Anglia/Cognita (centrados en expats), apuntando sobre todo a **familias locales** — aunque los coles heredados de adquisiciones previas (p. ej. red "Orbital") todavía se posicionan como "colegio internacional" y hay que reconducirlos.

**Preguntas sin responder:**
- ¿El sistema debe ser multi-idioma desde el día uno? La institucional ya tiene EN/ES; el diseño tiene que soportar también árabe (RTL) y alemán (palabras compuestas largas) aunque ningún piloto actual use esos idiomas — lo pidió el propio cliente en el kickoff.
- ¿Quién redacta/mantiene el contenido una vez montada la plantilla? Respondido en parte: el **equipo central de Ariston** tiene la propiedad de creación de sitios/páginas/navegación/idiomas/publicación; los **usuarios de cole** solo reutilizan plantillas y módulos aprobados — **no pueden crear módulos nuevos ni cambios estructurales**. Roles: Administrator, Editor, Reviewer, Translator.

---

## 2. Lo que aprendimos del benchmark y del as-is

> Detalle completo en `research/benchmark.md` (6 competidores + 3 grupos propios representativos) y `research/as-is/` (institucional + Alminar/CEDES/CBS). Aquí solo las decisiones.

- **El catálogo de módulos converge rápido clasificando por esquema de campos** (no por contenido): con homes + una ronda de páginas internas ya salen ~19 tipologías, muy por debajo de las 30 permitidas.
- **"Etapas educativas" sigue siendo el módulo menos resuelto**, tanto en nuestro as-is como en el benchmark del cliente (Orbital: tablas Key Stage; Merited: tabs en home; CBS: subpáginas) — máxima prioridad para estandarizar.
- **El dato de analítica confirma problemas reales de producto, no solo de diseño:**
  - Alminar: el tag de conversión de "Admissions Enquiry" está **roto** (0 leads trackeados este año vs. 1.396 el anterior) y las páginas de familias actuales (comedor, mi cuenta) superan en tráfico a las propias páginas del cole.
  - CBS: el tráfico de pago se multiplicó ×4 (17%→43% de las sesiones) pero el engagement cayó de 52%→31% y la tasa de leads se **redujo a la mitad** (2,9%→1,3%) — síntoma clásico de landing page desalineada con la campaña: necesita plantilla propia de "página de campaña".
  - CEDES: patrón sano — las familias navegan por etapa y luego consultan ("Admissions contact" es la 2ª página más visitada, 91% engagement) — confirma que una plantilla de etapa sólida + ruta de contacto a un clic es lo que funciona.
  - Institucional (aristonedu.com): 52% del tráfico es "Direct" (probablemente interno/sin etiquetar — hay que filtrarlo desde el día uno) y ya hay un 2,6% de sesiones vía asistentes de IA con la sesión más larga de todas (105s) — **hay que diseñar contenido pensando también en GEO** (structured data, headings claros, hechos citables por cole), no solo en SEO clásico.
- **Benchmark de competencia (6 grupos):** Nord Anglia es el más "templado" (nav idéntica en toda la red, CTA persistente, logo de grupo como trust anchor); GEMS es el más fuerte en transparencia de admisiones (tarifas, urgencia, referidos); ningún grupo —ni propio ni competidor— ha resuelto breadcrumbs. La sección más débil en los grupos propios del cliente es, de forma consistente, **Parents Area** (sin segmentar, duplicada entre menús).
- **Referencias de diseño del propio cliente, fuera del sector educativo, con el mismo modelo
  `dominio/sub-sitio` propuesto** (encuesta previa E1, Paz Guadamillas): **Four Seasons**
  (plantilla común + expresión local por hotel, CTA de reserva siempre a mano — el paralelismo
  más directo con `aristonedu.com/colegio`), **Equinox** (fichas de club con plantilla común, CTA
  principal siempre visible), **Bright Horizons** (grupo de escuelas infantiles, público similar —
  buscador de centro por cercanía siempre en cabecera). Dentro del sector, el cliente también cita
  **GEMS Education** (buscador completo con mapa/país/currículo) y **SEK Education Group** (cada
  cole con web propia dentro de un sistema visual común); Nerea añade **Nord Anglia** como su
  preferida. Candidatas a moodboard de la fase de Diseño.
- **El propio cliente arrastra al menos 3 plantillas heredadas distintas** (Orbital, Merited, CBS como grupos representativos de su cartera) — es la prueba de que sin un sistema único, cada adquisición añade una plantilla más. Es literalmente el problema que este proyecto resuelve.

---

## 2.1 Recorrido real de admisiones (encuesta previa E2, Aniol Javaloyes / Paz Guadamillas / Emmanuel Franco / Carlota Vázquez — EMEA y AME)

> Cuestionario previo a la sesión E2 del 4 nov 2026, parcialmente respondido (varias preguntas
> quedan "a profundizar en la sesión"). Detalle completo en `entrevistas.md` §1.

- **⚠️ Hallazgo que cambia el alcance de la plantilla de Admisiones (EMEA, Paz Guadamillas):** en
  la mayoría de webs EMEA, **la solicitud y la matrícula NO se hacen en la web — se hacen en un
  portal externo de Orbital** (ej. BIC: `portal.orbital.education/bic/login`). La web solo enlaza
  a ese portal desde Admisiones; ahí la familia crea cuenta, sube documentación, recibe oferta y
  paga. **Esto es un cambio de dominio a mitad del recorrido**, que el propio cliente dice que hay
  que tener en cuenta tanto en experiencia como en medición. Implicación directa: la plantilla de
  Admisiones de este proyecto cubre el **enquiry/lead-gen y la visita**, no el funnel profundo
  (documentación, oferta, pago) — eso vive fuera del sistema que estamos diseñando, al menos en
  EMEA. Pendiente confirmar en la sesión en vivo si esto cambia con el rollout o se mantiene.
- **AME funciona distinto y mayormente fuera de la web también** (Emmanuel Franco): bot de
  WhatsApp captura el lead → aparece automático en ChatWoot con los datos del formulario →
  asesor asignado. Tests de perfilamiento en Habilmind, propuesta económica con 3 días de validez,
  pago vía "colaboranet". Confirma el mismo patrón que EMEA desde otro ángulo: **la web es la
  puerta de entrada (captura el lead), pero la gestión del proceso ocurre en herramientas
  externas** (CRM/WhatsApp/portales), no en el propio sitio.
- **2 tipos de campaña de captación, con implicación de contenido (EMEA, Aniol):** "Book a visit"
  (sin fecha de fin, activa casi todo el año) vs. "Open Day/Open House/Open Week" (con fecha de
  fin concreta) — ambas convergen en el mismo objetivo: que la familia reserve una visita
  personalizada. Confirma y detalla el patrón de plantilla "visita personalizada" ya auditado en
  el as-is de CBS (`Jornadas de Puertas Abiertas` = `Solicita tu visita`).
- **El propio cliente ya está simplificando formularios activamente** (Aniol): en curso, reduce
  campos/clics y pone enlaces directos desde el home en los coles más críticos (Magno, BIC,
  Alminar, Brit) — alinea con lo que hagamos: formulario corto, pocos campos, acceso directo
  desde Home, no enterrado en sub-páginas.
- **Cada cole tiene su propio "Parent Persona"**, a veces distinto incluso entre etapas del mismo
  cole (ej. Albacete: búsqueda directa y fuerte en Bachillerato, más débil en Infantil) — matiza
  aún más el hallazgo ya registrado de drivers distintos por mercado.
- Pendiente de la sesión en vivo (no respondido aún en el cuestionario): puntos exactos de pérdida
  de familias en el funnel, métricas/informes de EMEA, comentarios finales de ambas regiones.

---

## 3. Restricciones y condicionantes del cliente

- **10-12 plantillas de página, hasta 30 módulos** (número oficial del kickoff deck — ligera corrección sobre el "12-15" inicial).
- **GUT construye la base + 3 pilotos** (corporate + Alminar/CEDES/CBS); **el equipo central de Ariston despliega el resto** (hasta 80+ coles) de forma autónoma, sin developers. GUT entrega también el framework de migración y el tooling de carga masiva.
  - **Los 3 pilotos no parten del mismo punto** (confirmado en la transcripción del kickoff, Paz Guadamillas, 1:03:14): **Alminar y CBS son independientes** — no comparten plantilla con ningún otro cole del grupo, son casos "desde cero". **CEDES, en cambio, ya pertenece a uno de los templates de grupo existentes** (uno de los heredados de adquisiciones previas, ver más arriba "3 plantillas heredadas distintas"). Implicación para el diseño: la plantilla Home/sistema no puede validarse solo con Alminar/CBS como "caso limpio" — CEDES aporta la señal de qué partes de una plantilla heredada sobreviven la migración y cuáles no, y es el piloto más representativo del reto real de los 18+ coles restantes (que en su mayoría también parten de una plantilla heredada, no de cero).
- **Quality bar obligatorio en todas las webs:** Core Web Vitals, **WCAG 2.2 AA**, seguridad y GDPR, SLA de hosting gestionado, SEO/GEO, integraciones API-first.
  - **Seguridad, detallada en la encuesta previa de E1 (David Vindel, Global Head of PR &
    Thought Leadership):** parches regulares de plataforma/plugins/temas (los plugins
    abandonados son el punto débil más común — ver el propio hallazgo del "3D FlipBook" de CBS,
    un plugin fuera de la nav principal); 2FA + contraseñas únicas + revocar accesos al salir
    colaboradores/agencias; auditoría de terceros (hosting, analítica, forms, chat — cada
    proveedor es una puerta de entrada); HTTPS + WAF + anti-DDoS; backups automáticos fuera del
    sitio con restauración probada; monitorización de malware/cambios de archivo; **inventario
    actualizado de todos los sitios/dominios del grupo** (un microsite de cole olvidado puede
    dañar toda la marca); formación anti-phishing; responsable con nombre + presupuesto de
    mantenimiento + pentests periódicos. Para PR/comunicación: plan de incidentes con
    notificación RGPD en 72h.
- **Restricción de imagen de alumnos con impacto directo en diseño** (encuesta previa E1, Paz
  Guadamillas): no existe hoy consentimiento a nivel de grupo para usar imágenes de
  alumnos/personal en la web corporativa (cada cole sí recaba el suyo para la suya propia) — por
  eso aristonedu.com usa imágenes generadas con IA. El **AI Act europeo** exige poder etiquetar
  visiblemente el contenido generado con IA. Implicaciones de diseño: la web de grupo debe
  funcionar bien sin rostros de alumnos/personal (espacios, actividades, planos generales) al
  menos al principio, y el gestor de activos debe registrar por imagen consentimiento, caducidad
  y si es IA, para poder etiquetarla o retirarla de golpe de todas las webs si hiciera falta.
- **Calendario:** piloto (corporate + 3 coles) en marzo 2027. **Change freeze abril–junio 2027** (época de exámenes y campañas de admisión — no se puede tocar producción live en esa ventana, solo auditorías read-only). Después, oleadas de ~3 coles al mes.
- **Modelo de marca: "endorsed brand"** — cada cole mantiene nombre, color de acento e identidad propia dentro del sistema (ya hay ejemplos WIP: World Academy Tirana en naranja, Magno en verde, Britannica en cian, todos con el lockup "A Member of Ariston Education"). Ariston explícitamente NO quiere ser como North Anglia, donde la marca del grupo domina sobre la del cole.
- **Idioma/RTL:** el sistema de diseño tiene que soportar árabe (right-to-left) y textos largos en alemán, aunque ningún piloto actual los use.
- Pendiente de cliente: brand guideline completo (está en desarrollo, grupo muy reciente — fundado ~mayo 2026), fotografía propia (hoy todas las imágenes de aristonedu.com son "AI Generated"/"AI Modified").

---

## 4. Decisiones de contenido globales

- **Posicionamiento oficial (de material de marca del cliente, no inferido):** "the world's first global schools platform founded in the AI era" — 3 pilares: **AI Fluency**, **Human Power Skills**, **Voice of the Student** (framework interno: AQ = EQ + IQ). 7 valores core + compromiso explícito de Safeguarding.
- **"Currículo" es el contenido más crítico y más difícil de generalizar**, según el propio cliente (lo dijo Nerea Lorenzo en el kickoff): cada cole tiene currículo distinto (nacional mexicano, británico, español, dual americano...) y a veces cambia por etapa dentro del mismo cole. "Montessori" en marketing no implica currículo Montessori real — es terminología comercial. La plantilla de Currículo tiene que ser genérica de verdad (el propio equipo de UX lo señaló en el kickoff: si se diseña pensando solo en los 3 pilotos, "les vamos a hacer unos monstruos" al resto de coles).
- Mientras no haya cifras/datos reales confirmados por colegio: placeholder + "Pendiente cliente", nunca inventar.
- **Guía de marca — recibida 2026-10-30 (`ARISTON_GUIDELINES_WIP_260909.pdf`, versión 0.1, 60
  páginas).** Ya NO está pendiente, pero sigue siendo un work-in-progress real: varias secciones
  del índice están literalmente vacías todavía (solo el título, sin contenido) — **Our AI Image
  Policy, AI Image Labeling, Our Style, Composition, Illustration Style, Do's and Don'ts**
  (Visual Language) e **Iconography, UI Elements, Graphic Devices, Applications** (Graphic
  System). No inventar contenido para esas secciones — son huecos reales del propio cliente, no
  nuestros.

  **Color system (con valores exactos, ya usable):**
  | Color | Uso | HEX | RGB | CMYK / PMS |
  |---|---|---|---|---|
  | Ariston Blue / Dark Navy | Principal — máxima presencia siempre | `#03253A` | 3/37/58 | PMS 296C · CMYK 97/77/50/56 |
  | Deep Blue | Soporte (jerarquía, capas) | `#0F4365` | 15/67/101 | CMYK 98/73/37/24 |
  | Medium Blue | Soporte | `#145987` | 20/89/135 | CMYK 94/66/25/7 |
  | Bright Cyan | Acento — solo para destacar un dato/CTA puntual | `#00C6FF` | 0/198/255 | CMYK 63/1/0/0 |
  | Warm Sand | Acento neutro (fondos/superficies) | `#E2DDBF` | 226/221/191 | CMYK 11/9/27/0 |
  | Neutral Grey | Acento neutro | `#DADADA` | 218/218/218 | CMYK 13/10/11/0 |

  **Tipografía (4 fuentes, cada una con rol fijo — no intercambiables):**
  - **Isidora** (Medium/SemiBold) — titulares y subtítulos únicamente. Expresiva, es "la voz de la
    marca cuando lidera".
  - **Atkinson Hyperlegible Next** (Book/Medium/Bold) — cuerpo de texto, la tipografía principal
    de lectura larga. **Dato importante: es la propia tipografía del Braille Institute, diseñada
    específicamente para lectores con baja visión** — la guía la justifica explícitamente por
    accesibilidad/equidad ("no reader is left behind"). Refuerza directamente el requisito WCAG
    2.2 AA ya registrado en §3 — no hace falta elegir una fuente accesible aparte, la de marca ya
    lo es. Licencia abierta, sin coste.
  - **Axiforma** (Bold) — uso deliberadamente limitado: **solo** el tagline y la URL
    `aristonedu.com`, porque comparte geometría con el logotipo. No usar en ningún otro contexto.
  - **Arial** — fuente de respaldo "system-safe" solo para PowerPoint/Word/Email cuando las
    fuentes de marca no se pueden incrustar. Nunca en la web.

  **Arquitectura de marca, con nombre oficial (confirma y formaliza lo ya sabido del kickoff):**
  modelo **Masterbrand + Portfolio-Brand**. Ariston Education es el masterbrand, siempre presente;
  cada cole es un "portfolio brand" que conserva identidad/legado propios, respaldado por el
  endorsement **"A Member of Ariston Education"** (regla de construcción: altura del lockup =
  158% de la altura del wordmark de Ariston; alineación izquierda o centrada según el formato).

  **Narrativa de marca — copy oficial ya redactado, usable directamente** (no placeholder): existen
  3 versiones listas (1 frase / 1 párrafo / 100 palabras) que explican qué es Ariston Education.
  Útiles tal cual para footer, meta description, o bloque "about" de la plantilla Home/Quiénes
  somos — evita que el equipo de contenido tenga que redactar desde cero.

  **7 valores de marca** (nombre oficial, más específicos que el "7 valores core" ya registrado
  arriba): Academic rigour with integrity · Personalisation over uniformity · Character alongside
  excellence · Global perspective, locally grounded · Excellence as a journey, not a fixed outcome
  · Long-term thinking over quick wins · Resilience.

  **Dirección fotográfica — 2 modos distintos, cada uno con su propio uso de IA (matiza y
  extiende el hallazgo de consentimiento de imagen de la encuesta E1):**
  - **Campaign Imagery** (elevada, art-directed): hero banners, campañas de admisiones,
    cabeceras de web, folletos. Usa IA para *extender* fotografía real con el mismo control y
    calidad que una producción completa — nunca para fabricar un mundo que no existe. Estándar:
    "believability" (debe parecer un campus real).
  - **Lifestyle Imagery** (documental, real): vida de campus, graduaciones/eventos (con
    consentimiento), historias de alumnos, testimonios, comunicaciones internas, anuarios. **La
    IA se usa aquí específicamente para proteger la identidad de los menores — generar o alterar
    caras de niños para impedir su identificación** cuando no hay consentimiento — no solo para
    "evitar rostros" como se había registrado antes. Esto es más matizado que el hallazgo previo
    de la encuesta E1 y debería guiar cómo se diseña el gestor de activos (cada imagen necesita
    saber si es lifestyle+anonimizada vs. campaign+generada, no son la misma etiqueta).

  **Sistema de grid y patrón** (Brand Graphic System): el grid de toda la retícula deriva del
  corte diagonal de la letra "A" del símbolo — reparte el lienzo en filas/columnas con ese ángulo
  como regla de construcción. El patrón decorativo (retícula de triángulos) es el mismo ángulo
  repetido, pensado como fondo/textura de baja prioridad visual (portadas, separadores de
  sección), nunca como elemento que compita con el contenido. Relevante para la fase de Diseño al
  definir el grid base de las plantillas.

  Contacto del cliente para dudas de marca: Mauro Bisso, Global Head of Brand
  (mauro.bisso@aristonedu.com) — ya identificado en la encuesta E1 como responsable de
  aprobación on-brand junto a Paz y Nerea.

---

## Historial

- 2026-10-23 · v1.0 · Hallazgos iniciales tras auditoría as-is de institucional + 3 coles piloto.
- 2026-10-27 · v2.0 · Incorpora material oficial del cliente (kick-off deck, transcripción del kickoff, benchmark de competencia de julio 2026): footprint real (21 coles/28 campus/9 países), gobernanza (equipo central vs. usuarios de cole), quality bar, calendario y change freeze, posicionamiento/marca oficial, y hallazgos de analítica real (tag roto en Alminar, paid traffic sin convertir en CBS). Pendiente: resto de páginas internas del as-is, pasada visual, entrevistas E1-E4 y workshop de cierre (12 nov).
- 2026-10-27 · v2.1 · Matiz confirmado en la transcripción del kickoff: Alminar y CBS son pilotos independientes (sin plantilla heredada), CEDES parte de un template de grupo ya existente — relevante para validar la plantilla Home/sistema contra un caso de migración real, no solo casos "desde cero".
- 2026-10-29 · v2.2 · Incorpora la encuesta previa de E1 (Dirección del grupo — Nerea, Paz, Mauro,
  David): requisito de etiquetado de imágenes IA (AI Act) por falta de consentimiento de alumnos a
  nivel de grupo, bloque completo de requisitos de ciberseguridad, matiz de posicionamiento sobre
  no parecer "agregador de colegios", y referencias de diseño del cliente (Four Seasons, Equinox,
  Bright Horizons, GEMS, SEK, Nord Anglia). Detalle completo en `entrevistas.md` §1.
- 2026-10-30 · v2.3 · Recibida la guía de marca oficial del cliente (v0.1, WIP): paleta de color
  exacta, sistema tipográfico de 4 fuentes (Atkinson Hyperlegible como cuerpo, elegida por
  accesibilidad), arquitectura Masterbrand/Portfolio-Brand con reglas de endorsement, narrativa de
  marca lista para usar, 7 valores oficiales, dirección fotográfica Campaign vs. Lifestyle (la IA
  en Lifestyle se usa para anonimizar menores sin consentimiento, no solo para evitar rostros), y
  grid/patrón basados en el ángulo de la "A" del símbolo. Quedan genuinamente vacías: AI Image
  Policy, AI Image Labeling, Our Style, Composition, Illustration Style, Do's and Don'ts,
  Iconography, UI Elements, Graphic Devices, Applications — no inventar contenido ahí.
- 2026-11-02 · v2.4 · Incorpora la encuesta real de percepción post-anuncio (13 coles/5 regiones):
  tensión entre el pilar "AI Fluency" y que las familias piden menos tecnología; "nivel de
  detalle" como el aspecto peor valorado. Incorpora también la encuesta previa (parcial) de E2
  Marketing y Admisiones: hallazgo de que en EMEA la solicitud/matrícula vive en un portal externo
  de Orbital fuera de la web, lo que acota el alcance real de la plantilla de Admisiones al
  enquiry/lead-gen y la visita. Detalle en `entrevistas.md` §1.

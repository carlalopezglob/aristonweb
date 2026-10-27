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
- El grupo tiene **drivers muy distintos por mercado**: Budapest es 80% familias expatriadas, Albacete (CEDES) 90% locales — el cliente ya lo sabe y lo ha identificado como riesgo de diseño (ver §3).
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
- **El propio cliente arrastra al menos 3 plantillas heredadas distintas** (Orbital, Merited, CBS como grupos representativos de su cartera) — es la prueba de que sin un sistema único, cada adquisición añade una plantilla más. Es literalmente el problema que este proyecto resuelve.

---

## 3. Restricciones y condicionantes del cliente

- **10-12 plantillas de página, hasta 30 módulos** (número oficial del kickoff deck — ligera corrección sobre el "12-15" inicial).
- **GUT construye la base + 3 pilotos** (corporate + Alminar/CEDES/CBS); **el equipo central de Ariston despliega el resto** (hasta 80+ coles) de forma autónoma, sin developers. GUT entrega también el framework de migración y el tooling de carga masiva.
- **Quality bar obligatorio en todas las webs:** Core Web Vitals, **WCAG 2.2 AA**, seguridad y GDPR, SLA de hosting gestionado, SEO/GEO, integraciones API-first.
- **Calendario:** piloto (corporate + 3 coles) en marzo 2027. **Change freeze abril–junio 2027** (época de exámenes y campañas de admisión — no se puede tocar producción live en esa ventana, solo auditorías read-only). Después, oleadas de ~3 coles al mes.
- **Modelo de marca: "endorsed brand"** — cada cole mantiene nombre, color de acento e identidad propia dentro del sistema (ya hay ejemplos WIP: World Academy Tirana en naranja, Magno en verde, Britannica en cian, todos con el lockup "A Member of Ariston Education"). Ariston explícitamente NO quiere ser como North Anglia, donde la marca del grupo domina sobre la del cole.
- **Idioma/RTL:** el sistema de diseño tiene que soportar árabe (right-to-left) y textos largos en alemán, aunque ningún piloto actual los use.
- Pendiente de cliente: brand guideline completo (está en desarrollo, grupo muy reciente — fundado ~mayo 2026), fotografía propia (hoy todas las imágenes de aristonedu.com son "AI Generated"/"AI Modified").

---

## 4. Decisiones de contenido globales

- **Posicionamiento oficial (de material de marca del cliente, no inferido):** "the world's first global schools platform founded in the AI era" — 3 pilares: **AI Fluency**, **Human Power Skills**, **Voice of the Student** (framework interno: AQ = EQ + IQ). 7 valores core + compromiso explícito de Safeguarding.
- **"Currículo" es el contenido más crítico y más difícil de generalizar**, según el propio cliente (lo dijo Nerea Lorenzo en el kickoff): cada cole tiene currículo distinto (nacional mexicano, británico, español, dual americano...) y a veces cambia por etapa dentro del mismo cole. "Montessori" en marketing no implica currículo Montessori real — es terminología comercial. La plantilla de Currículo tiene que ser genérica de verdad (el propio equipo de UX lo señaló en el kickoff: si se diseña pensando solo en los 3 pilotos, "les vamos a hacer unos monstruos" al resto de coles).
- Mientras no haya cifras/datos reales confirmados por colegio: placeholder + "Pendiente cliente", nunca inventar.
- Tono de voz / guía de marca completa: aún no disponible — pendiente de sesión con Mauro Bisso (Global Head of Branding).

---

## Historial

- 2026-10-23 · v1.0 · Hallazgos iniciales tras auditoría as-is de institucional + 3 coles piloto.
- 2026-10-27 · v2.0 · Incorpora material oficial del cliente (kick-off deck, transcripción del kickoff, benchmark de competencia de julio 2026): footprint real (21 coles/28 campus/9 países), gobernanza (equipo central vs. usuarios de cole), quality bar, calendario y change freeze, posicionamiento/marca oficial, y hallazgos de analítica real (tag roto en Alminar, paid traffic sin convertir en CBS). Pendiente: resto de páginas internas del as-is, pasada visual, entrevistas E1-E4 y workshop de cierre (12 nov).

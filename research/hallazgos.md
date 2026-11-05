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
  - **Confirmado y ampliado en la sesión en vivo de E1 (30 oct 2026, 60 min — Mauro Bisso, David
    Vindel, Nerea Lorenzo, Paz Guadamillas):** el grupo coincide en una sola tarea para la web
    corporativa — que la familia entienda qué es Ariston y **llegue a la web de su colegio en el
    menor número de clics posible**. "Find a School" tiene que estar visible desde cualquier
    página, con filtros de país/ciudad/etapa/currículo/idioma, y la propuesta de valor va en la
    primera pantalla. **"La web del grupo no debe competir con la del colegio por la conversión"
    (Paz)** — la corporativa descubre y deriva, el colegio convierte; coincide con el hallazgo ya
    registrado de recorrido de admisiones (§2.1).
  - **Audiencias priorizadas explícitamente (Nerea, Paz):** 1) familias que valoran un colegio;
    2) colegios/partners que podrían unirse al grupo; 3) talento docente y corporativo; 4)
    inversores y medios — estas dos últimas no condicionan el tono ni la experiencia principal,
    van a footer/menú secundario con destino propio.
  - **Cómo se descubre Ariston, en la práctica:** la familia llega a Ariston desde el footer del
    colegio y desde espacios físicos, no al revés — las campañas de captación son de cada colegio,
    en su propio nombre, nunca del grupo (Nerea). Las notas de prensa sí comunican como Ariston.
  - **Recorridos de navegación diferenciados por audiencia: sin resolver.** Paz los pide (rutas
    secundarias por tipo de visitante); Nerea no ve la necesidad. Se acordó resolverlo por el
    propio modelo de navegación del sistema, no como una decisión aparte. Los perfiles de familia
    detallados quedan pospuestos a la sesión E2.
  - **El buscador "Find a School" tiene casos de producto concretos que resolver, no solo diseño
    visual:** varios colegios del grupo comparten ciudad (Doha, Tirana, Sevilla, Estado de México)
    — el buscador necesita ayudar a comparar entre ellos, en modo neutro (que aparezcan los
    colegios, no una tabla comparativa). Y hay colegios con más de un campus bajo el mismo nombre
    (BIC: Sant Agustí y Sa Porrassa) — la propuesta del cliente es **una web por colegio con
    selector de campus, no una web por campus**, pendiente de validar. Agrupar por localización es
    lo habitual, aunque también se agrupa por currículo. Colegios en proceso de M&A (adquisición)
    son confidenciales hasta el cierre — deben poder contactar sin que la web parezca un
    agregador, mismo matiz que el ya registrado arriba.
- El grupo tiene **drivers muy distintos por mercado**: Budapest es 80% familias expatriadas, Albacete (CEDES) 90% locales — el cliente ya lo sabe y lo ha identificado como riesgo de diseño (ver §3).
- **Encuesta real de percepción tras el anuncio de la unión a Ariston** (`Ariston_Perception_Insights_schools_1stlaunch_wave.pdf`, 13 coles / 5 regiones, Heads of School + MAC leads, 22 sep–7 oct 2026) — no es una entrevista de Sprint 0, es investigación de mercado ya cerrada del cliente:
  - **Personal muy favorable (70% positivo), familias más cautas (55% positivo)** — ningún cole reportó reacción negativa, pero la mitad de las familias están "indiferentes o a la espera".
  - **"Nivel de detalle" es lo peor valorado tanto por personal como por familias** (3.25/4 y 3.17/4, las notas más bajas de toda la encuesta) — las familias piden pasos concretos y planes para su cole, no solo mensajes de tranquilidad. Implicación directa de contenido: cualquier plantilla que anuncie/explique la pertenencia a Ariston necesita un bloque de "qué cambia y qué no para mi hijo", no solo posicionamiento de marca.
  - **⚠️ Tensión real con el pilar "AI Fluency" de la marca:** en 3 de 13 coles, el personal pregunta cómo se enseñará la IA y por quién, y **muchas familias piden explícitamente MENOS tecnología, no más** ("Most parents would like their children to use less technology, not more, so AI as a pillar needs explaining"). Esto no invalida el posicionamiento oficial (AQ = EQ + IQ), pero sí indica que la web no puede simplemente declarar "somos el grupo de la IA" sin explicar/aterrizar qué significa en el aula — candidato fuerte para cómo se redacta el módulo de Pilares Educativos.
  - **Baja notoriedad de marca, confirma la prioridad de SEO/GEO ya registrada en §2:** en 1 cole, búsquedas online de "Ariston" antes de la comunicación oficial devolvían resultados no relacionados y alimentaban especulación.
  - Otros temas recurrentes: fatiga por cambios (reestructuraciones/cambios de dirección coincidiendo con la adquisición, 3 coles), preocupación por ratio/tamaño de clase y apoyo SEND (2 coles), estabilidad a largo plazo ante cierres en el mercado local (1 cole). Tono que genera confianza: "cercano, no corporativo" (2 coles) — coincide con el tono "humano, no corporativo" ya pedido en la guía de marca y en la encuesta E1.
- Posicionamiento declarado: un escalón por debajo de grupos como North Anglia/Cognita (centrados en expats), apuntando sobre todo a **familias locales** — aunque los coles heredados de adquisiciones previas (p. ej. red "Orbital") todavía se posicionan como "colegio internacional" y hay que reconducirlos.

- **Matiz sobre el perfil "local" en AME, corregido en vivo por el propio cliente (sesión E2,
  Emmanuel Franco):** no es que el usuario mexicano busque poco por sí mismo — es que **no se fía
  de lo que lee y busca confirmación activa** por canal conversacional, incluso cuando la
  información ya está disponible ("les puedes poner la dirección en una publicidad y de todas
  formas te van a preguntar dónde están ubicados"). El driver real es confianza/verificación, no
  pereza — cambia la solución de diseño (reforzar confirmación visible, no solo simplificar
  contenido).
- **Trabajo de síntesis de audiencias en marcha, confirmado por el propio equipo de UX Research en
  la sesión E2 (Begoña):** tras E1+E2 (encuestas + sesiones en vivo), se van a destilar 4-5 perfiles
  generales de audiencia y se enviarán al cliente para validar antes de construir las entrevistas
  de usuarios sintéticos (E3, 6 nov) — Jaime se comprometió a enviar un documento propio de "Parent
  Persona" por colegio de EMEA (pendiente de recibir, candidato más fiable que inferir solo de la
  conversación).

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
  `dominio/sub-sitio` propuesto** (confirmado en la sesión en vivo de E1, Paz Guadamillas —
  ampliando lo ya apuntado en la encuesta previa): **Four Seasons** (plantilla común + expresión
  local por hotel, CTA de reserva siempre a mano, "reservar siempre a mano" — el paralelismo más
  directo con `aristonedu.com/colegio`), **Equinox** (fichas de club con plantilla común, CTA
  principal siempre visible, "Join Today"), **Bright Horizons** (grupo de escuelas infantiles,
  público similar — "Find a Center" siempre en cabecera, buscador por cercanía, la marca como
  garantía). Dentro del sector, el cliente también cita **GEMS Education** (buscador completo con
  mapa/país/currículo, red bajo un sistema) y **SEK Education Group** (cada cole con web propia
  dentro de un sistema visual común); Nerea añade **Nord Anglia** como su preferida. Criterio
  explícito del cliente para elegir referencia: "experiencia común orientada a conversión donde el
  grupo se reconozca sin restar protagonismo al centro" — y ningún entrevistado dio como ejemplo
  una web a la que *no* quieran parecerse. Candidatas a moodboard de la fase de Diseño.
- **El propio cliente arrastra al menos 3 plantillas heredadas distintas** (Orbital, Merited, CBS como grupos representativos de su cartera) — es la prueba de que sin un sistema único, cada adquisición añade una plantilla más. Es literalmente el problema que este proyecto resuelve.
- **Valoración de la web actual, directamente de las 4 personas que la encargaron (sesión en vivo
  E1):** no hay consenso, y eso es dato en sí mismo — Paz la ve como "MVP, el look & feel puede
  cambiar"; Nerea, "pesada, mucho texto, masas de color oscuras"; Mauro, "limpia y minimalista,
  mantener — mejorar espaciados, blancos y tipografía, la foto necesita más narrativa"; David
  reporta que los colegios dicen "wow" al verla. **Lo que falta, según el propio cliente:**
  buscador más útil y visible (mapa, etapa, idioma), recorridos de navegación claros, más
  formularios, más módulos, contenido estructurado para SEO/GEO, y que el equipo central pueda
  gestionar autonomía sin necesitar desarrollo (Paz) — confirma directamente el hallazgo de
  gobernanza ya registrado en §1 (Preguntas sin responder) y en §3.

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
- ~~Pendiente de la sesión en vivo (no respondido aún en el cuestionario): puntos exactos de
  pérdida de familias en el funnel, métricas/informes de EMEA, comentarios finales de ambas
  regiones.~~ **Resuelto 2026-11-04** — sesión en vivo E2 celebrada, ver bullets siguientes y
  detalle completo en `entrevistas.md` §1 ("Síntesis de la sesión en vivo — E2").
- **⚠️ Matiza un hallazgo ya registrado — el canal "EMEA llamada / AME WhatsApp" no es una
  diferencia regional estable, es una limitación de tooling con fecha de caducidad (Aniol
  Javaloyes, Paz Guadamillas):** hoy EMEA no usa WhatsApp porque su CRM actual (HubSpot) no tiene
  integración nativa y genera "vacíos de información de qué es lo que ha ocurrido con la familia"
  (Aniol) — no es una preferencia cultural. Al migrar a **Open Apply** (que sí integra WhatsApp de
  forma nativa), Paz confirma que el canal **"en EMEA va a pasar seguramente en un corto plazo"**.
  Implicación de diseño: el patrón de CTA de contacto no debe fijarse por región de forma
  permanente — debe soportar "Enquire now" (formulario) y WhatsApp coexistiendo, no excluyentes
  ("no debería ser un problema ni un stopper en este momento", Paz).
- **Restricción legal explícita en EMEA (Aniol, LOPD):** contactar a una familia en España sin
  checkbox explícito de consentimiento previo es "impensable" — el formulario necesita esa casilla
  antes de poder contactar. En AME, el problema es el inverso — desconfianza real en dejar datos en
  un formulario (Carlota: "México no vive la mejor seguridad del mundo... la gente es mucho más
  desconfiada en llenar un formulario"), motivo por el que un flujo conversacional con un asesor
  con nombre (WhatsApp) convierte mejor que un formulario frío.
- **Decisión confirmada sobre el application form de Orbital en EMEA (Paz, Aniol):** hoy ese
  formulario pesado de aplicación está público en los coles Orbital ("eso es una locura", Aniol) —
  **decisión: deja de ser público.** El formulario de cara a la web pasa a ser el de
  inquiry/book a visit (ligero); el application form queda como paso posterior, fuera del
  recorrido principal — confirma con decisión real, no solo como hallazgo, lo ya registrado sobre
  el portal externo de Orbital.
- **Caso real en AME que confirma el mismo patrón desde otro ángulo (Carlota):** al adquirir el
  colegio Brit, un formulario de aplicación extenso previo a la visita fue identificado como
  "stopper para la venta" y fue de lo primero que se eliminó.
- **Métrica real de conversión WhatsApp→CRM en AME (Emmanuel Franco):** entre el 20-30% de las
  conversaciones de WhatsApp acaban rellenando el formulario (varía por colegio); el resto se
  resuelve por interacción directa del asesor, que introduce los datos manualmente.
- **Propuesta de homologación de "lead válido" sin cerrar (Carlota):** 4 campos mínimos para que un
  contacto cuente como lead en CRM — nombre, teléfono, email + un 4º campo que no logró recordar
  en sesión. Queda abierto.
- **⚠️ Tercer actor de gobernanza no contemplado en el modelo ya cerrado de §1/§4 (Carlota, Jaime):**
  en AME, el reenrollment es responsabilidad 100% del director/Head of School de cada colegio, no
  del equipo de marketing/admisiones. En EMEA, en cambio, la retención se apoya en contenido propio
  de la web (blog, newsletter, redes) gestionado por el equipo de comunicación ("la web es parte
  también de esta parte", Jaime) — el modelo "Global MAC vs. coles" no recoge hoy a la dirección
  académica del colegio como actor con peso real sobre contenido de retención.
- **Cifras reales de capacidad/retención, con asimetría fuerte entre regiones:** AME (Carlota) —
  retención 87-92%, un colegio al 140% de su meta de nuevo ingreso, 44 grupos abiertos/22 ya
  saturados ("happy problems" de infraestructura, no de demanda). EMEA (Aniol) — rotación
  significativa ligada a movilidad de familias expatriadas (ej. Mallorca puede perder 40 alumnos de
  golpe si un gobierno extranjero repatría a sus familias); **sin cifra agregada** — sigue siendo
  hueco real de dato.
- **Tour virtual de instalaciones — confirmado fuera de alcance, con pregunta de formato abierta
  (Oisin, cerrando el tema con Paz/Aniol/Carlota/Jaime):** ni EMEA ni AME tienen uno real hoy (AME
  tiene algún recorrido puntual "arcaico"; EMEA ninguno, viable quizá en Qatar a futuro por capex).
  **Decisión:** "Instalaciones" es módulo básico obligatorio, pero un visor 360°/Matterport queda
  fuera de alcance de este proyecto — el módulo debe admitir incrustar uno después (iframe/widget)
  si un colegio lo construye por su cuenta. **Sin resolver:** ¿exploración por menú de etapa/aula/
  instalación (propuesta Paz) o vídeo narrado corto (propuesta Carla) en vez de un visor de flechas
  360°? Aniol se posiciona en contra del formato de flechas por experiencia propia negativa.
- **Confirma a nivel de implementación (no solo de estrategia) el modelo masterbrand ya cerrado en
  §4 (Paz, con el dolor real de Aniol como contraste):** Aniol describe como problema real encajar
  elementos de marca dentro de la estructura de bloques rectangulares de una web de cole (caso
  propio, cluster Ágora). Paz confirma el modelo vigente para este proyecto: **plantilla máster con
  customización a nivel de CSS** (principalmente color) — "todo bebe de la misma estructura de
  marca".
- **Ambición de escala cuantificada, refuerza la necesidad de autonomía sin developers ya registrada
  en §1/§3 (Jaime):** Ariston es hoy ~24-25 coles, objetivo 100 coles en 3-5 años — "la gente que
  estamos aquí no podemos hacernos cargo de 100 páginas web, van a tener que ser los mismos
  colegios."
- **Mayor pain point de AME, de cierre de sesión (Emmanuel Franco):** "la experiencia de usuario...
  es nuestro pie cojo totalmente" — sitios heredados, estructuralmente arcaicos, con miedo del
  propio proveedor a tocar el código. Pide que la web se sienta "premium" desde el primer instante.
- **Advertencia explícita de no usar el as-is de EMEA como referencia de diseño (Aniol):** "no uses
  el benchmark de las páginas que hay a día de hoy en los coles, por lo menos en los de EMEA... se
  hicieron varias cagadas" — resultado de errores de un cluster previo (Ágora), no un patrón a
  conservar.
- **Pendiente de recibir del cliente:** documento de "Parent Persona" por colegio EMEA (Jaime);
  ejemplo de competencia de un desplegable "hijo 2" en formulario multi-hijo (Aniol); mecánica
  técnica concreta de la migración WhatsApp/Open Apply en EMEA (sin fecha).

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
  **Ampliado en la sesión en vivo de E1:** el material disponible hoy es lo ya publicado en la web
  actual más el Hero Film y grabaciones del equipo — son, según Mauro, "lo más cercano a Ariston"
  que existe. **No hay DAM ni repositorio único de activos** (pregunta de GUT sin respuesta
  todavía). Migrar a fotografía real depende de producción local y permisos, caso a caso (Mauro).
  Mauro confirmó en el cierre de la sesión que está preparando una guía propia de cómo fotografiar
  a los alumnos, pensada para equipos de colegio sin fotógrafo ni diseñador — **se acordó una
  sesión aparte específica de imagen** (la organiza Carla con Oisin y Alex) ante el riesgo real de
  "maqueta bonita → web real pobre" sin material que la sostenga.
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

  **Arquitectura de marca confirmada en vivo por las 4 personas de dirección (E1, 30 oct):**
  modelo **endorser brand**, descrito con las mismas palabras por Mauro, David, Nerea y Paz por
  separado — "el colegio lidera, Ariston respalda, ambos parte de un mismo sistema". **Dos
  niveles de navegación** (`aristonedu.com` y `aristonedu.com/colegio`) con transición clara: la
  familia tiene que saber siempre dónde está y poder volver. "Ariston es sello de confianza, no
  una capa extra de navegación" (Paz). El grupo aporta visión global, propuesta diferencial y
  credibilidad de red (conocimiento, formación docente, recursos); el colegio mantiene nombre,
  identidad, reputación local y propuesta educativa — **Ariston no es la narrativa dominante del
  colegio** (Nerea). Al pasar de una web a otra tiene que sentirse "una misma familia de ideas",
  visual y narrativa, aunque cada centro conserve su propia voz (Mauro). Dónde vive Ariston dentro
  de la web de un colegio: footer y "About Us" (Nerea) — acompañamiento y soporte, el endorsement
  en el footer, abierto a la recomendación del propio equipo de UX/UI; lo que de verdad importa en
  la página del colegio es su misión, visión, valores y storytelling (Mauro).
  - **Intocables vs. abierto a decisión de diseño, dicho explícitamente por el dueño de la marca:**
    wordmark, icono y patrones no se tocan; el resto depende de la arquitectura UX/UI — "nothing
    is off the table as long as it makes strategic sense and builds on the system" (Mauro). El
    sistema visual (paletas y tipografías) es común a nivel de sistema en la mayoría de los casos;
    narrativa y fotografía varían por colegio (ejemplo citado en sesión: Montessori vs. británico).
    Caso de prueba apuntado para validar el sistema de capas: un colegio con color identitario
    fuerte propio (Paulo VI).
  - **Guía de marca — alcance, plazos y custodia, confirmados en sesión (antes no se sabía):**
    alcance (David) cubre marca corporativa, colegios endosados y todos los puntos de contacto
    (web, Insights, redes, prensa, eventos, señalética, admisiones, uniformes, merchandising);
    usuarios: equipos de comunicación/marketing, directores y admisiones, docentes, agencias;
    idiomas inglés y español como mínimo, "adaptar, no traducir". Plazos: la guía de colegio está
    en creación o refresco, disponible a finales de 2027 — **los pilotos entran en marzo 2027 sin
    guía de colegio todavía**, solo con la de Ariston Corp (acotada, en expansión — se ampliará
    con lo que se use en esta web y luego pasará a guidelines). Custodia: **no existe brand
    guardianship formal** — aprueban Paz y Nerea, validando con Mauro (Paz).

  **Propuesta de valor, pilares y cifras — matiz importante de consistencia interna:** el
  posicionamiento "primer grupo global de colegios nacido en la era de la IA" y el framework
  AQ = EQ + IQ (rigor académico + inteligencia emocional + competencia en IA) los confirma David
  explícitamente en sesión. Pero **los 3 pilares (Human Power Skills, AI Fluency, Student Voice)
  no tienen un orden de prioridad compartido entre los 4 entrevistados** — David pone la IA
  primero; Nerea prefiere "visión global compartida" e IA práctica/responsable con la persona en
  el centro; Mauro justifica la disrupción visual precisamente por "la era de la IA". La propia
  sesión de kickoff ya había avisado de que el claim envejece y de no querer ser "los colegios de
  la IA" — la salida de David en esta sesión lo confirma: hablar de la IA desde el niño, **"prueba
  antes que promesa"**. Esto refuerza directamente, con voz del propio cliente, la tensión del
  pilar AI Fluency ya registrada en §1 (encuesta de percepción: las familias piden menos
  tecnología, no más). Implicación de contenido: ningún módulo, titular o historia debería hablar
  de IA sin su contraparte humana al lado.
  - **Las cifras del grupo no tienen una fuente única — hallazgo de proceso, no solo de dato** (lo
    señala la propia Nerea, que pide unificarlas): David cita 19 colegios, presencia en EMEA y
    América, más de 11.000 alumnos; Paz cita 21 colegios, 28 campus, 9 países, regiones AME/EMEA/
    APAC; el kickoff había dado 22 (19 ya en la web). Mientras no se unifiquen, cualquier cifra que
    se muestre en la web necesita verificarse contra una fuente acordada, no copiarse de aquí sin
    más.

  **Personalidad, tono y lo que debe sentir la familia:** frase resumen del propio David —
  **"aquí mi hijo va a estar preparado para el futuro sin dejar de ser niño"** — tecnología y
  futuro (AI Fluency) junto a lo humano (Human Power Skills). David describe 3 momentos del
  recorrido: los primeros 10 segundos piden calidez y confianza ("aquí conocen a mi hijo por su
  nombre", nunca sensación de centro tecnológico frío ni institución rígida); durante, curiosidad
  y asombro ("no había visto aprender así", alumnos usando IA con criterio, sin miedo a
  equivocarse); al salir, seguridad sobre el futuro ("esto le va a abrir puertas"), con una idea
  concreta del camino de su hijo. Nerea pide que nunca se sienta "pieza de un negocio" ni
  corporación genérica — y refuerza lo ya registrado: nunca agregador de colegios.

  | Ariston es… | …pero no es |
  |---|---|
  | Humana y cercana | Blanda o poco exigente |
  | Visionaria con la IA | Tecnófila ni fría |
  | Exigente y ambiciosa | Elitista ni competitiva a cualquier precio |
  | Serena y segura | Arrogante |
  | Curiosa y abierta al mundo | Dispersa |

  Tono de escritura, en palabras del propio cliente: actual, cercano, inspirador, con autoridad
  educativa; accesible, humano y optimista; sin lenguaje corporativo, institucional ni comercial
  (Nerea). Cálido y claro, sin jerga; historias reales en vez de adjetivos tipo "excelencia" o
  "innovación" (David). Cada colegio conserva su propio tono dentro del sistema; el grupo puede
  permitirse ser más disruptivo que otros grupos, en lo visual y narrativo, sin perder lo esencial
  (Mauro). Referencia de tono: la propia web actual (Paz).

  **Gobernanza de contenido, confirmada (coincide con y cierra la pregunta ya abierta en §1):**
  el **Global MAC** es dueño de estructura, plantillas, módulos, navegación y estándares de UX/
  SEO/medición — construye y lanza cada web, y valora e incorpora para todo el grupo cualquier
  módulo nuevo que se proponga. Los **colegios** publican noticias, eventos, admisiones y fotos
  sin aprobación central, siempre dentro de las plantillas existentes — **no cambian estructura ni
  crean módulos nuevos** (Paz, Nerea). El contenido propio de grupo (Insights, News & Events,
  redes) lo lidera David, con input del MAC y los directores.

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
- 2026-11-03 · v2.5 · Incorpora la sesión en vivo de E1 — Dirección del grupo (30 oct 2026, 60 min:
  Mauro Bisso, David Vindel, Nerea Lorenzo, Paz Guadamillas), que supera y amplía la encuesta
  previa ya registrada en v2.2. Añade: la "una tarea" de la web corporativa y audiencias
  priorizadas explícitas; casos de producto concretos para el buscador (varios colegios por
  ciudad, multi-campus en BIC); arquitectura de marca con intocables vs. abierto a UX/UI, sistema
  de capas con caso de prueba (Paulo VI), y alcance/plazos/custodia reales de la guía de marca
  (pilotos en marzo 2027 sin guía de colegio); cifras del grupo sin fuente única (19/21/22 colegios
  según quién responda); tensión confirmada en los 3 pilares sin orden compartido entre los 4
  entrevistados, con la cita "prueba antes que promesa" que refuerza la tensión del pilar AI
  Fluency ya registrada en §1; tono de marca (tabla "es/no es", 3 momentos del recorrido);
  gobernanza de contenido confirmada (Global MAC vs. colegios); valoración directa de la web
  actual por las 4 personas que la encargaron, sin consenso entre ellas; detalle de imagen (sin
  DAM, Hero Film como material más cercano a marca, sesión de imagen aparte acordada). Fuente:
  cuestionario E1 (29 oct) + transcripción parcial (falta la hora central, pendiente pedir a Paz
  la completa) + notas en directo. Las propuestas de rediseño que nacen de esta sesión (no son
  hallazgos, son ideas de GUT a validar) van a `propuesta-sistema.md` §7, no aquí.
- 2026-11-04 · v2.6 · Incorpora la sesión en vivo de E2 — Marketing y Admisiones (4 nov 2026, 90
  min: Aniol Javaloyes, Jaime Abad, Carlota Vázquez, Emmanuel Franco), que cierra los pendientes de
  v2.4 (puntos de pérdida, métricas, comentarios finales). Añade: matiz fuerte sobre el canal
  EMEA/AME (es tooling con fecha de caducidad, no cultural fijo), restricción legal LOPD en EMEA,
  decisión confirmada de que el application form de Orbital deja de ser público, métrica real de
  conversión WhatsApp→CRM en AME (20-30%), un tercer actor de gobernanza no contemplado hasta ahora
  (dirección académica del colegio, dueña del reenrollment en AME), cifras reales de capacidad/
  retención con fuerte asimetría EMEA/AME, tour virtual confirmado fuera de alcance con pregunta de
  formato abierta, confirmación a nivel de implementación del modelo masterbrand + CSS, ambición de
  escala (24-25 → 100 coles en 3-5 años), y matiz sobre el perfil "local" de AME (confianza, no
  pereza). Detalle completo por bloques en `entrevistas.md` §1 ("Síntesis de la sesión en vivo —
  E2"). Fuente: transcripción completa de la sesión (docx) + cuestionario previo ya registrado en
  v2.4.

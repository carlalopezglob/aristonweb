# Propuesta de sistema — páginas, plantillas y módulos (a máximos)

> **Qué es este documento y por qué existe.** Todo lo anterior (`as-is/`, `inventario-modulos.md`,
> `plantillas.md`) es **auditoría**: qué hay hoy, escuela por escuela. Esto es distinto —
> es la **propuesta de sistema único** que sale de esa auditoría, pensada ya con la lógica de un
> rediseño: no "Alminar tiene esto, CBS tiene esto otro, CEDES tiene esto otro", sino **un único
> tipo de página por cada necesidad real**, con su plantilla, pensado para servir a los 3 pilotos
> y a los 18+ coles futuros por igual. Si dos coles tienen "extraescolares", aquí hay **una** fila
> "Extraescolares", no dos.
>
> **Para qué sirve:** que no se te pase nada al evaluar si la propuesta está bien encaminada, y
> que tengas una lista clara y corta que llevar a los coles para preguntar "¿esto lo necesitáis
> todo, os falta algo, hay algo que no usáis?" — sin enseñarles un Figma de 141 tarjetas.
>
> **Lo que esto NO es:** no es la versión combinada institucional+coles (esa sigue aplazada, a
> petición tuya). Son **dos estructuras limpias, una por lado**, listas para que decidas si
> fusionarlas o no más adelante.
>
> **Cómo marco las cosas:**
> - Sin marca = evidenciado en la auditoría tal cual, propuesta directa.
> - 🔀 = punto de convergencia sin resolver (ya flaggeado en `plantillas.md`) — dos coles lo
>   construyen de forma distinta hoy, hay que elegir un estándar.
> - 💭 = sugerencia mía de rediseño, no evidenciada como conflicto en el audit — una lectura que
>   hago al unificar, para que la valores, no un hecho.
> - 🏫 = condicional — no todos los coles lo necesitarán (depende de si ofrecen ese servicio).

---

## 1 · Estructura Institucional — página → plantilla

9 páginas hoy, ya es un sistema único (un solo sitio, no hay que deduplicar entre coles). La
lectura de rediseño aquí es más ligera.

| # | Página | Plantilla | Nota |
|---|---|---|---|
| 1 | Home | **T1 · Home** | Única, sin cambios. |
| 2 | Who we are | **T2 · Content Page** | |
| 3 | Mission, vision & values | **T2 · Content Page** | |
| 4 | Educational Pillars | **T2 · Content Page** | |
| 5 | Global Student Advisory Board | **T2 · Content Page** | 💭 Es la única página "de programa/iniciativa" que hay hoy en institucional — ver §6 sobre si conviene tratarla como el primer caso de un tipo de página repetible ("Programa/Iniciativa"), no como una página única. |
| 6 | Leadership Team | **T3 · Directory — People** | |
| 7 | Find a School | **T4 · Directory — Schools** | |
| 8 | Insights | **T5 · Listing** | |
| 9 | News & Events | **T5 · Listing** | Mismo molde que Insights — candidata fuerte a fusionarse en una sola sección de listado con filtro por tipo. |

**Plantillas institucional: 5** (T1, T2, T3, T4, T5 — T6 resuelto, se fundió en T2).

---

## 2 · Estructura Coles — página → plantilla (sistema único)

Deduplicado desde las 141 páginas auditadas en Alminar/CBS/CEDES. Agrupado por sección de
navegación, no por plantilla, para que sea legible como sitemap.

### Inicio

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Home | **T1 · Home (flexible)** | Universal |

### Sobre el colegio

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Quiénes somos / Sobre el colegio | **T2** | Universal |
| Nuestra historia | **T2** | Universal |
| Ideario / Filosofía educativa | **T2** | Universal |
| Carta del director/a | **T2** | Universal |
| Modelo / Proyecto educativo (overview) | **T2** | Universal |
| Etapas educativas (Infantil/Primaria/Secundaria/Bachillerato) | 🔀 **T2 o T8 — sin decidir** | Universal |
| Calidad y acreditaciones | **T2** | 🏫 Depende de si el cole tiene acreditaciones propias que mostrar |
| Instalaciones | **T2** | Universal |
| Equipo / Claustro | **T2** o **T3** (como institucional) | 🏫 |
| Programa / Iniciativa educativa (bilingüismo, proyecto solidario, robótica...) | **T2** | 💭 Propongo unificar aquí Globot, Proyecto Solidario, Enseñanza bilingüe (CEDES), Work Experience (CBS) — hoy son páginas sueltas con nombres de negocio distintos, pero comparten forma con GSAB de institucional. Ver §6. |
| Página larga con pestañas (El Colegio, Proyecto Educativo) | 🔀 **T9 — en duda** | Ver §6: puede que esto se retire al dividir en páginas individuales como arriba, en vez de mantenerse como plantilla propia. |

### Vida escolar / Servicios

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Servicios (hub) | **T5** | Universal |
| Comedor | **T2** | Universal |
| Transporte escolar | **T2** | 🏫 |
| Uniforme escolar | **T2** | 🏫 |
| Calendario escolar | **T2** | Universal |
| Políticas escolares (reglamento, protección) | **T2** | Universal |
| Aula matinal / Horario ampliado | **T2** | 🏫 |
| Extraescolares (listado) | **T5** | Universal |
| Extraescolares (detalle de actividad) | **T8** | Universal — repetible, una instancia por actividad que ofrezca el cole |
| Campamento de verano | **T8** | 🏫 |
| Departamento de orientación / apoyo | **T2** | 🏫 |

### Admisiones

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Admisiones (overview + proceso) | **T7** | Universal |
| Jornadas de puertas abiertas / Reserva de visita | **T7** | Universal |
| Preguntas frecuentes (admisiones) | **T7** | Universal |
| Solicitud de información | **T7** | 💭 Candidata a plegarse dentro de "Admisiones (overview)" como sección/CTA, no página propia — solo 1 instancia real hoy. |

> ⚠️ Recordatorio de alcance (ya en `hallazgos.md`): en EMEA la solicitud/matrícula real pasa a
> un portal externo (Orbital). Estas páginas son captación y visita, no el flujo completo.

### Noticias

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Noticias / Actualidad (listado) | **T5** | Universal |
| Noticia / Evento — detalle | **T2** | Universal — no auditado en profundidad aún, se asume T2 por patrón |

### Acceso y legal

| Página | Plantilla | Universal/Condicional |
|---|---|---|
| Acceso a portal de familias/alumnos | **T10** | Universal — la plataforma de destino varía por cole (Phidias, u otra) |
| Aviso legal / Privacidad / Cookies | 🔀 **T2 — sin decidir si lleva Content Block** | Universal |

### Fuera del sistema de plantillas (no son páginas-plantilla)

| Elemento | Por qué no entra aquí |
|---|---|
| Dossier informativo / informes (flipbook) | Es un documento embebido (módulo #23), no un tipo de página — vive dentro de una página de Admisiones o Sobre el colegio. |
| Contacto | Probablemente se pliega dentro de Admisiones o Footer — sin instancia propia clara en el audit. |

**Plantillas coles: 7** (T1, T2, T5, T7, T8, T9 🔀, T10) — **sin contar T9**, que está en duda,
serían **6 firmes**.

---

## 3 · Catálogo de plantillas de referencia

| Código | Nombre | Lado | Estado |
|---|---|---|---|
| T1 | Home (flexible) | Ambos | Firme |
| T2 | Content Page (flexible) | Ambos | Firme, pero con 3 preguntas de convergencia abiertas (etapa, legal, servicio) |
| T3 | Directory — People | Institucional | Firme |
| T4 | Directory — Schools | Institucional | Firme |
| T5 | Listing | Ambos | Firme |
| T7 | Admissions / Enrolment | Coles | Firme, con matiz de alcance EMEA |
| T8 | Activity / Programme Detail | Coles | Firme — la plantilla más repetida de todo el sistema |
| T9 | Long-form Tabbed Page | Coles | **En duda** — ver §6 |
| T10 | Account Access / Login | Coles | Firme |

10-12 es el presupuesto del cliente para el sistema completo (ambos lados juntos, sin fusionar
aún). Hoy: 5 institucional + 6-7 coles = 11-12 sin fusionar — ya dentro de rango, incluso sin
reconciliar duplicados como T1/T2/T5 que existen en los dos lados con forma casi idéntica.

---

## 4 · Catálogo de módulos — limpieza y mapeo al kit

Los 24 módulos que salieron de la auditoría de Ariston, cruzados contra el wireframe-kit (ya
limpiado esta sesión: 8 módulos nuevos construidos, 2 retirados por redundantes — ver
`wireframe-kit` commits).

| # | Módulo (Ariston) | Módulo del kit | Nota |
|---|---|---|---|
| 1 | Hero | CAT-CAB-001 | |
| 2 | Contenido media (texto+imagen) | CAT-CON-001 | Variante icono = mismo módulo, cambia el recurso visual |
| 3 | Grid repetible de tarjetas | CAT-CRD-002 (+ CAT-CRD-003 carrusel, CAT-CRD-001 tarjeta suelta) | |
| 4 | Bloque de cifras | CAT-CON-005 | |
| 5 | Banner CTA | CAT-CON-010 | |
| 6 | Galería de imágenes | CAT-CON-013 | |
| 7 | Franja de logos | CAT-CON-011 | |
| 8 | Lista de enlaces | CAT-NAV-006 | Nuevo este round |
| 9 | Bloque de contacto | — | Sin mapeo 1:1 — se compone con CAT-CON-001 + datos, o CAT-FRM-001 si lleva formulario. 💭 revisar si hace falta ficha propia. |
| 10 | Bloque social (iconos) | — | Retirado del kit — se compone a mano con CAT-COM-001 cuando haga falta (decisión tuya) |
| 11 | Formulario | CAT-FRM-001 (+ CAT-FRM-004 si el proceso es multi-paso) | |
| 12 | Encabezado/navegación | CAT-NAV-001 | |
| 13 | Widget flotante | CAT-COM-012 | Nuevo este round |
| 14 | Panel de cookies | CAT-MDL-005 | Nuevo este round |
| 15 | Footer | CAT-NAV-002 | |
| 16 | Lista de datos clave | CAT-CON-017 | Nuevo este round |
| 17 | Lista simple de texto | CAT-CON-009 (marcador "ninguno") | El kit ya no tiene un módulo separado para esto — CAT-CON-009 ya contempla la variante sin icono, cubre el caso igual |
| 18 | Filtros | CAT-FRM-003 (facetado) / CAT-COM-010 (pills simples) | |
| 19 | Paginación | CAT-NAV-004 | |
| 20 | Vídeo embebido (inline) | — | Sin equivalente exacto (CAT-MDL-002 es modal, no inline). Bajo impacto — 1 instancia vista. |
| 21 | Callout de dato destacado (con fuente) | CAT-CON-003 (sin el campo "fuente") | Ajuste menor de spec si se necesita, no módulo nuevo |
| 22 | Timeline de hitos con fecha | CAT-CON-008 | |
| 23 | Visor de documento interactivo (flipbook) | CAT-CON-015 | Nuevo este round |
| 24 | Contenedor de pestañas heterogéneo | CAT-CON-016 | Nuevo este round — 💭 su necesidad depende de si T9 se mantiene, ver §6 |

**Huecos reales, bajo impacto, no urgentes:** #9 (bloque de contacto sin form) y #20 (vídeo
inline). No bloquean nada, se pueden resolver componiendo módulos existentes cuando aparezca el
caso real en Fase 2.

---

## 5 · Preguntas para consultar con los coles

1. **¿Todos ofrecéis actividades extraescolares con página propia por actividad?** (T8 — hoy solo
   confirmado en CBS, 19 instancias)
2. **¿Vuestras páginas de etapa (Infantil/Primaria/Secundaria/Bachillerato) necesitan ficha de
   datos (horario, tarifa...) o contenido más narrativo?** — determina si "etapa" converge hacia
   la forma de T2 o la de T8 (🔀, ver §6)
3. **¿Tenéis campamento de verano u otros programas estacionales?** (🏫 T8)
4. **¿Vuestro portal de familias/alumnos es una plataforma externa (tipo Phidias) o algo propio?**
   (T10 — la integración varía)
5. **¿Usáis "El Colegio"/"Proyecto Educativo" como una sola página con pestañas, o preferiríais
   páginas separadas por tema (Quiénes somos, Equipo, Instalaciones...) como institucional?** (🔀
   T9, ver §6)
6. **¿Tenéis iniciativas o programas propios que merezcan página individual** (como el Proyecto
   Solidario de CEDES o el Globot de CBS), **o es mejor un listado único de "Programas"?**
7. **¿Uniforme, transporte, aula matinal — cuáles de estos servicios ofrecéis?** (🏫, determina qué
   páginas condicionales activar por cole)

---

## 6 · Decisiones de rediseño que esto obliga a tomar antes de Fase 2

Estas son las piezas que no se resuelven auditando — son elección de diseño, tuya o del cliente.

### 6.1 · Página de etapa/currículo — 🔀 ya flaggeado en `plantillas.md`
CEDES la construye como T2 (narrativa + datos clave), CBS como T8 (ficha de asignaturas +
documentos + CTA). Mismo contenido real, dos formas. Hay que elegir una.

### 6.2 · Páginas legales — 🔀 ya flaggeado en `plantillas.md`
CEDES las construye con cuerpo de texto real (T2); CBS, como texto legal plano sin estructura.
Menor impacto que 6.1, pero mismo tipo de decisión.

### 6.3 · Páginas de servicio (uniforme, transporte, políticas) — 🔀 ya flaggeado en `plantillas.md`
Alminar las escribe con párrafo de intro real; CBS/CEDES muchas veces no. Si T2 exige Content
Block, estas páginas solo necesitan ese párrafo añadido — ya no es una pregunta de plantilla, es
una checklist de contenido pendiente por página.

### 6.4 · ¿Se mantiene T9 (página larga con pestañas)? — 💭 nuevo, no estaba flaggeado así antes
Solo existe en Alminar (2 instancias), y **no tiene equivalente en institucional** — institucional
resuelve lo mismo (Who we are, Team, Facilities...) como páginas independientes bajo T2/T3, no
como pestañas de una sola URL. Dos caminos:
- **Mantener T9** como plantilla propia para coles que prefieran una página "todo en uno".
- **Retirarla**, dividiendo "El Colegio"/"Proyecto Educativo" en las páginas T2 individuales que
  ya están en la lista de §2 (Quiénes somos, Instalaciones, Equipo...) — más consistente con
  institucional, un sistema más simple (6 plantillas en vez de 7), y evita mantener el módulo #24
  (contenedor de pestañas heterogéneo) solo para este caso.

Si se retira T9, el módulo #24 del kit (`CAT-CON-016`) queda sin uso claro en Ariston — no hay que
borrarlo del kit (sirve para otros proyectos), pero no se usaría aquí.

### 6.5 · "Programa / Iniciativa" como plantilla transversal — 💭 nuevo
Institucional tiene Global Student Advisory Board; los coles tienen Globot, Proyecto Solidario,
Work Experience, Enseñanza bilingüe. Todas son, estructuralmente, la misma forma (T2 con sus
slots opcionales al completo: Stat Callout, FAQ, Timeline, CTA). Hoy están tratadas como páginas
sueltas con nombre propio en cada sitio. Si se nombra este patrón explícitamente ("Programa /
Iniciativa"), se gana un tipo de página reutilizable y predecible para cualquier iniciativa futura
del grupo o de un cole — sin inventar una plantilla nueva, es una forma de leer T2 que ya existe.

### 6.6 · Contacto y "Sobre Ariston Education" en los coles — 💭 nuevo
CBS y CEDES tienen cada uno su propia página "Acerca de Ariston Education" con el mismo texto de
grupo que ya vive en institucional. En el rediseño, ¿tiene sentido que cada cole duplique ese
contenido, o debería enlazar a la página institucional correspondiente? Afecta al conteo de
páginas por cole y evita mantener el mismo texto en 21+ sitios.

---

## Historial

- 2026-11-03 · Bajado a Figma como deck presentable: página nueva "Propuesta — Resumen Ejecutivo"
  (`162:2`) en el mismo archivo, 7 frames apilados — (1) Dónde estamos [cifras clave], (2) Cómo
  vamos a unificar [metodología con ejemplo antes/método/después], (3) Sistema Institucional
  [9→5, cards por plantilla], (4) Sistema Coles [~27→6-7, sitemap por sección con tags 🏫/🔀/💭],
  (5) Catálogo de Plantillas [capturas reales reutilizadas del Page Audit], (6) Catálogo de
  Módulos [14 ya en el kit / 6 nuevos este sprint / 4 huecos menores], (7) Decisiones y Preguntas
  [cierre, para antes de Fase 2]. A petición explícita: "tengo que ser capaz de presentar a
  alguien". No añade información nueva sobre este documento — es su traducción visual.
- 2026-11-03 · Creado. Primera versión de la propuesta de sistema único (páginas→plantilla,
  módulos→kit), a petición explícita de la propietaria del proyecto: "quiero que pienses mucho y
  muy bien... vamos a máximos... dos estructuras comunes (institucional y coles) desde las que
  pueda intentar cubrir la propuesta así como diseñar páginas y navegación". Construido
  deduplicando las 141 páginas de coles y las 9 de institucional por tipo real, no por instancia
  por cole, aplicando los 3 puntos de convergencia ya flaggeados en `plantillas.md` más 3
  observaciones nuevas de rediseño (T9 en duda, "Programa/Iniciativa" transversal, posible
  duplicación de "Sobre Ariston Education"). No resuelve ninguna de las decisiones abiertas — las
  deja explícitas en §6 para que se decidan, con preguntas concretas para consultar a los coles en
  §5.

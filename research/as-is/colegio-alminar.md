# Auditoría — Colegio Internacional Alminar

**URL:** https://colegioalminar.es/
**Fecha de revisión:** 2026-10-22
**Método:** lectura de contenido/estructura (WebFetch) — pendiente pasada visual.

## Home

1. **Barra de utilidad (top bar):** teléfono, email, redes sociales (FB, IG,
   LinkedIn, YouTube).
2. **Botones de acceso rápido:** FAMILIAS (`/mi-cuenta/`), ADMISIONES
   (`/admisiones/`).
3. **Header / nav:** logo → `/alminar`; El Colegio, Proyecto Educativo,
   Servicios (ancla `#servicios`), Noticias.
4. **Hero:** título + lema ("Somos un equipo, somos una familia") + pregunta
   + CTA Admisiones.
5. **Galería "Una experiencia única":** mosaico de 4 imágenes enlazadas
   (Admisiones, Noticias, Summer Camp, sin destino).
6. **"Últimas novedades":** cabecera + imágenes (sin noticias concretas
   cargadas en el fetch).
7. **Bloque de compromiso (texto):** valores — solidaridad, tolerancia,
   respeto, excelencia académica, pensamiento crítico, inteligencia emocional.
8. **Servicios (7 tarjetas con icono):** Comedor, Transporte escolar,
   Uniformidad, Psicoabaco (gabinete psicología/logopedia), Aula matinal,
   Extraescolares (PDF), Políticas escolares.
9. **Etapas educativas:** imagen + 4 anclas (Infantil, Primaria, Secundaria,
   Bachillerato) → `/etapas-educativas/`.
10. **"¿Por qué Alminar?":** texto posicionamiento (privado, mixto, laico,
    independiente) + franja de sellos/logos (acreditaciones/plataformas),
    repetida (¿carrusel?).
11. **"Somos un equipo / Somos una familia":** bloque visual icono+foto.
12. **Matrícula:** "Matrícula abierta" curso 26-27 + CTA Admisiones.
13. **Footer:** logo + contacto; columnas El Colegio / Proyecto Educativo /
    Oferta educativa; "Quizás te interese" (trabaja con nosotros, legal,
    privacidad, cookies); logo de Ariston (endorsement); crédito agencia.
14. **Panel de cookies (RGPD):** Aceptar/Rechazar/Ajustes, 3 categorías.

## Módulos candidatos detectados

- Top bar de contacto + redes
- Botones CTA destacados (familias/admisiones)
- Header con nav simple (4 items) + ancla a sección propia
- Hero con lema + pregunta + CTA
- Mosaico de imágenes-enlace (grid irregular)
- Bloque de texto institucional/valores (sin imagen)
- Grid de servicios con icono (7 tarjetas)
- Selector de etapas educativas (imagen + anclas)
- Franja de sellos/acreditaciones (carrusel)
- Bloque "equipo/familia" visual
- Banner de matrícula/admisión (CTA simple)
- Footer con endorsement del grupo (logo Ariston)
- Panel de cookies RGPD completo

## Notas

- El endorsement de Ariston aparece en el footer, no en el header.
- La navegación es mucho más simple que en CBS o CEDES (4 items vs. mega-menús).
- "Servicios" vive como sección ancla en home, no como página propia — distinto
  patrón a CBS/CEDES donde Servicios es submenú con páginas dedicadas.

## Páginas internas revisadas

- **Admisiones:** bloque de captación + formulario (campos no capturados por
  el fetch de texto, pendiente pasada visual) + aviso de privacidad (RGPD) +
  estado de matrícula. Sin pasos de proceso, FAQ, precios ni documentos
  descargables visibles.
- **Noticias:** grid de tarjetas (imagen+título+autor+"sin comentarios") +
  paginación numérica (1-5) + bloque aparte "Alminar en los medios" (enlaces
  externos de prensa). Ver #3 y #19 en el inventario.

- **El Colegio** (`/el-colegio/`): **corrección tras pasada visual con
  clic real (2026-10-28) — NO es navegación de anclas.** Es el módulo
  **Tabbed Content** (mismo mecanismo ya catalogado en Psicoabaco, ver
  abajo): una fila horizontal de 6 pestañas reales con `role="tab"`
  (Quiénes somos, Formación Integral Humana, Modelo educativo, Etapas
  educativa — sin "s", así está escrito en la pestaña real—, Excelencia
  educativa, Instalaciones) más un sidebar vertical de 3 pestañas-categoría
  (Nuestro Colegio — agrupa las 6 horizontales—, Equipo, Cómo llegar) = **8
  paneles de contenido distintos en total**, confirmando el recuento
  original. Cada clic sustituye el panel completo (no es scroll-jump).
  "Etapas educativa" e "Instalaciones" tienen a su vez sub-pestañas
  anidadas (4 y 6 respectivamente) — un segundo nivel de Tabbed Content
  dentro del panel. Combina Contenido Media repetido (texto institucional),
  bloques por etapa (Infantil/Primaria/Secundaria/Bachillerato — con
  tarjetas de especialidad de Bachillerato), una sección de Instalaciones
  extensa con galería de fotos, un organigrama de equipo (Equipo Directivo,
  RRSS, Orientación) y un mapa embebido en "Cómo llegar". Sin módulos
  nuevos — mismo catálogo ya existente (Tabbed Content, Contenido Media #2,
  Card Grid #3, Galería #6, mapa embebido como variante de #20), pero
  **estructuralmente relevante para la propuesta de plantillas**: Alminar
  condensa en 1-2 páginas lo que Institucional reparte en 9 páginas de nav
  — ver pregunta abierta en el informe. **En Figma** (frame "1. Page Audit
  — ALMINAR"), a petición de la propietaria del proyecto, cada una de las 8
  pestañas se modela como su propia tarjeta de página (comparable 1:1 con
  el resto del catálogo), agrupadas bajo un sub-rótulo "↳ Tabs within
  /el-colegio/" — ver Historial.
- **Proyecto Educativo** (`/proyecto/`): mismo mecanismo de **Tabbed
  Content** (pestañas verticales tipo píldora). **Corrección tras pasada
  visual con clic real (2026-10-28):** el recuento original de "14-16
  bloques" mezclaba pestañas reales con contenido anidado dentro de una de
  ellas. El click-through en vivo confirma **11 pestañas reales**:
  Proyecto bilingüe propio, Carácter internacional, Proyecto digital,
  Departamento de orientación, Bachillerato americano (PDF), Deporte,
  Actividades, Arts and music, Huerto escolar, Aula multisensorial,
  Robótica. Los antiguos "Objetivos", "Inteligencia emocional" y "Altas
  capacidades (Da Vinci)" **no son pestañas propias** — son bloques de
  contenido anidados dentro del panel "Departamento de orientación" (junto
  con "Plan de Atención a la Diversidad"), igual que "Deporte" contiene un
  segundo nivel de sub-pestañas por etapa (Infantil/Primaria/Secundaria y
  Bachillerato). **El bloque de relleno "Tab Content"** que se vio en
  Deporte en la auditoría anterior **ya no está** — el cliente lo rellenó
  con contenido real entre el 22 y el 28 de octubre; no se pudo re-verificar
  en esta pasada si el bloque de contenido duplicado (Inteligencia
  emocional / Da Vinci) sigue presente dentro de "Departamento de
  orientación" — queda pendiente confirmarlo en la próxima pasada visual.
  Mismo catálogo de módulos que El Colegio, sin formulario. **En Figma**,
  igual que El Colegio, cada una de las 11 pestañas reales se modela como
  su propia tarjeta bajo el sub-rótulo "↳ Tabs within /proyecto/" — ver
  Historial.
- **Gabinete de Psicología y Logopedia / Psicoabaco** (`/gabinete-de-psicologia-y-logopedia/`):
  8 **pestañas reales** con contenido distinto cada una (Psicopedagogía,
  Psicología, EMDR, Logopedia, Atención Temprana, Psicomotricidad y
  Fisioterapia, Neuropsicología, Escuela de Padres), cada pestaña con
  listas de condiciones tratadas; más una sección de charlas públicas (7
  temas) y bloque de contacto (teléfono + 2 emails). **Primer caso de
  pestañas con contenido real (no de relleno) en el proyecto** — ver nota
  transversal nueva en `inventario-modulos.md`. No es un módulo nuevo (es
  una variante de presentación de contenido repetible, como el carrusel),
  pero merece auditoría profunda por ser la evidencia más clara.

## Páginas internas — nivel ligero (reutilizan módulos ya catalogados)

Todas sin captura de pantalla ni lista de módulos propia — confirman
patrones ya cubiertos por el inventario (Contenido Media, Grid de
tarjetas, Lista de datos clave #16, Lista simple #17, Lista de enlaces #8
con destino a documento).

| Página | URL | Categoría de nav | Nota |
|---|---|---|---|
| Etapas educativas | `/etapas-educativas/` | Oferta educativa (footer) | Página única con 4 secciones ancla (Infantil/Primaria/Secundaria/Bachillerato) en prosa — mismo patrón que CEDES "school-overview", ya catalogado como Contenido Media repetido. |
| Comedor | `/comedor/` | Servicios (tarjeta en home) | Texto + grid de menús descargables en PDF (variante de Grid de tarjetas #3 con destino a archivo). |
| Transporte escolar | `/transporte-escolar/` | Servicios | Listas de paradas con horario por ruta — Lista de datos clave (#16). |
| Uniformidad | `/uniformidad/` | Servicios | Listas simples de prendas por tipo de uniforme — Lista simple (#17). |
| Aula matinal | `/aula-matinal/` | Servicios | Texto descriptivo del servicio, sin listas ni formulario. |
| Políticas escolares | `/politicas-escolares/` | Servicios | Lista de 6 enlaces a PDF (reglamento, protección infantil, etc.) — Lista de enlaces (#8) con destino a archivo. |

## Elementos de navegación excluidos (no son páginas auditables)

- ~~FAMILIAS (`/mi-cuenta/`): portal de login~~ — **incluido 2026-10-28**
  como tarjeta propia (`ALMINAR — PAGE 13/31` en esa pasada, renumerado
  desde entonces) con nota honesta de que es un portal de login, no
  contenido editorial.
- ~~Extraescolares: enlaza directo a un PDF, no a una página~~ —
  **incluido 2026-10-28** como tarjeta propia (`ALMINAR — PAGE 31/31`):
  sigue siendo honesto en la ficha que es un PDF descargable
  (`Extraescolares-26-27.pdf`, 3 páginas: Pádel, Voleibol, Judo,
  Art-Attack, con horario/precio por actividad y cuota de inscripción de
  5€), no una página web — captura real de la primera página del PDF.
- **Servicios** (ítem de nav superior): es un ancla a `#servicios` en
  home, no una página propia — las 6 tarjetas de esa sección sí llevan a
  páginas reales (ver tabla de nivel ligero arriba).
- **Trabaja con nosotros** (enlace de footer): href `#` (placeholder, sin
  destino real) — existe una página `/trabaja-con-nosotros-2/` en el
  sitemap pero no está enlazada desde ninguna navegación visible, así que
  no se trata como página de nav.
- **Formularios** (`/formularios/`): aparece en el sitemap.xml pero no
  está enlazado desde ningún menú ni footer visible — repositorio interno
  sin ruta de navegación, se excluye por el mismo motivo.

## Pendiente

- Confirmar si el bloque de contenido duplicado (Inteligencia emocional /
  Proyecto Da Vinci) dentro del panel "Departamento de orientación" de
  Proyecto Educativo sigue presente — no se re-verificó en la pasada del
  2026-10-28, que se centró en el recuento de pestañas.
- Confirmar campos reales del formulario de Admisiones (sigue sin
  capturarse por texto).

## Historial

- 2026-10-28 · Pasada visual con clic real en `/el-colegio/` y
  `/proyecto/` (antes solo lectura de texto). **Corrección de modelo:**
  "El Colegio" y "Proyecto Educativo" no son páginas largas con anclas de
  scroll — son el módulo **Tabbed Content** ya catalogado en Psicoabaco
  (`inventario-modulos.md`, 4ª tanda), confirmado estructuralmente por el
  `role="tab"` en la pestaña activa. El Colegio mantiene su recuento de 8
  paneles (6 pestañas horizontales + sidebar de 3, donde "Nuestro Colegio"
  agrupa las 6 horizontales en vez de sumar un panel propio). Proyecto
  Educativo se corrige de "14-16 bloques" a **11 pestañas reales** — los
  antiguos "Objetivos", "Inteligencia emocional" y "Altas capacidades (Da
  Vinci)" resultan ser contenido anidado dentro del panel "Departamento de
  orientación", no pestañas propias. El filler "Tab Content" de Deporte ya
  no está (contenido real desde antes del 28-10). A petición de la
  propietaria del proyecto ("quiero que esos anclas los incluyas como
  páginas del cole... los usan como tal"), el frame de Figma "1. Page Audit
  — ALMINAR" se reestructuró: las 2 tarjetas únicas "El Colegio" y
  "Proyecto Educativo" se sustituyeron por 8 + 11 = 19 tarjetas
  individuales (una por pestaña real), mismo formato que el resto del
  catálogo (captura real, MODULES IDENTIFIED propio por pestaña, campo URL
  honesto: `/el-colegio/ (tab: "Nombre")` en vez de fingir una ruta
  propia), agrupadas bajo sub-rótulos "↳ Tabs within /el-colegio/" y
  "↳ Tabs within /proyecto/" dentro de NAVEGACIÓN PRINCIPAL. Total de
  páginas de Alminar en el frame: 13 → 30 (13 − 2 + 8 + 11), renumerado de
  punta a punta ("ALMINAR — PAGE N/30"), de paso corrigiendo una
  inconsistencia previa (varias tarjetas mostraban "/12" en vez de "/13").

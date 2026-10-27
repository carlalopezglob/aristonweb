# Auditoría — Ariston Education (institucional)

**URL:** https://aristonedu.com/
**Fecha de revisión:** 2026-10-22
**Método:** lectura de contenido/estructura (WebFetch) — pendiente pasada visual
cuando el navegador esté disponible.

## Home

### 1. Header / navegación
- Skip link.
- Logo → `/`.
- Menú principal con submenús:
  - **About us:** Who we are, Mission/vision/values, Leadership team.
  - **Learning approach:** Educational pillars.
  - **Student experience:** Global Student Advisory Board.
  - **Insights**.
  - **News & events**.
  - **Find a school**.
- Selector de idioma EN/ES.

### 2. Hero
- Imagen de fondo (IA).
- H1 + CTA de texto "Watch our manifesto" (sin link visible).
- Subtítulo + párrafo de posicionamiento.
- CTA → Mission/vision/values.

### 3. Pilares educativos (3 tarjetas)
- AI Fluency / Human Power Skills / Student Voice.
- CTA → Educational pillars.

### 4. Cita destacada
- Quote de Tammy Murphy (Group Director of Education and QA) + imágenes decorativas.

### 5. Comunidad global (stats)
- 3 indicadores: países / colegios / estudiantes.

### 6. Explora nuestros colegios
- Banner + CTA → Find a school.

### 7. Últimas noticias (3 tarjetas)
- Imagen + fecha + titular + "Find out more".
- Link general → News & events.

### 8. Footer
- Logo.
- Columnas de enlaces (replican el menú, salvo Insights que no aparece).
- Redes sociales (FB, IG, LinkedIn, YouTube).
- 3 emails de contacto (enquiries / partnerships / careers).
- Legal: privacy policy, cookie policy, legal policy, consent preferences (sin
  destino real).

## Módulos candidatos detectados (home)

- Header con mega-menú + selector de idioma
- Hero con imagen + CTA
- Grid de tarjetas (pilares/features) 3 columnas
- Bloque de cita (quote) con foto
- Bloque de stats/indicadores
- Banner CTA simple (imagen + título + botón)
- Grid de noticias/tarjetas con fecha
- Footer con columnas + redes + emails + legal

## Páginas internas revisadas

- **Leadership Team:** 3 listas de tarjetas de persona (Educational
  Leadership, Executive Leadership, Board of Directors) + sección de bios
  completas. Nav de anclas en el hero. Ver detalle de campos en
  [inventario-modulos.md](inventario-modulos.md) (#3 y #8).
- **Find a School:** filtros facetados (región/país/currículo/edad) + grid
  de 19 tarjetas de colegio + ficha de detalle por colegio (key facts,
  facilities, director). Ver #3, #16, #17, #18 en el inventario.
- **News & Events:** grid de 12 tarjetas con filtro simple (All/News/Events),
  sin paginación.

## Páginas internas revisadas (2ª tanda)

- **Who we are:** intro + **vídeo embebido** (sin título/texto propio) + bloque
  de cifras (4 items: país/coles/nacionalidades/alumnos) + 4 módulos
  repetidos por audiencia (Students/Parents/Teachers/Schools: imagen+título+
  texto, solo "Schools" lleva CTA).
- **Mission, vision & values:** bloques Misión y Visión como icono+título+texto
  (sin imagen, sin repetirse — un único bloque cada uno). Bloque "Safeguarding"
  destacado con el mismo patrón icono+título+texto pero separado visualmente.
  Lista numerada de 7 valores (número+título+frase corta, sin icono ni link).
- **Educational pillars:** 3 bloques de pilar (imagen+título+texto+lista
  anidada de 6-7 items) + **callout "Did you know?"** en cada uno (icono+
  subtítulo+dato estadístico+nota al pie con link a fuente externa) — patrón
  nuevo, se repite 3 veces aquí. Bloque final "The Ariston Quotient (AQ)"
  como logo de marca + título + texto corto.
- **Global Student Advisory Board:** intro + bloque "Why it matters" + mismo
  callout "Did you know?" (confirma que es un patrón repetido, no puntual) +
  grid de 5 tarjetas tipo FAQ (pregunta como título + texto) + bloque de
  contacto + **timeline con fechas reales** (5 hitos: cierre de solicitudes,
  notificación, reuniones — cada uno con fecha, título y descripción) + CTA
  final con lista de pasos + fecha límite.
- **Insights:** listado tipo blog, 5 tarjetas (imagen+fecha+título+link, solo
  la primera con extracto), sin filtros ni paginación — mismo patrón que
  News & Events.

**Dos tipologías nuevas confirmadas** (ver `inventario-modulos.md` #20-22):
vídeo embebido, callout de dato destacado con fuente, y timeline de hitos con
fecha — esta última contradice la nota transversal anterior de que "no hace
falta modelar timeline": aquí sí hay un caso real con fechas concretas, a
diferencia de la historia de CEDES (que no la tenía).

## Pendiente

- Páginas de detalle: artículos de Insights y de News & Events individuales
  (no auditadas, probablemente mismo patrón de página de artículo).
- Pasada visual (capturas) en cuanto el navegador funcione.

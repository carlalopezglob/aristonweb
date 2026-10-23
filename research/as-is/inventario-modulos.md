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

**Estado:** cubre las 4 homes + una primera tanda de páginas internas
(equipo/liderazgo y buscador de coles en institucional; admisiones y
noticias en Alminar; admisiones en CBS; historia y programa educativo en
CEDES). Quedan páginas internas sin revisar — ver pendientes al final.

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

Sin novedades en páginas internas revisadas.

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
  obligatorio modelar un módulo "timeline con hitos/años" — con Contenido
  Media (#2) repetido como texto corrido ya se cubre; si en otra página
  apareciera una timeline visual con años destacados, sí sería candidata a
  evaluar como variante nueva de #2 (con un campo "fecha/hito" añadido).

## Lectura actualizada para la propuesta de módulos/plantillas

Con dos tandas de auditoría (homes + primera ronda de páginas internas), el
catálogo se mantiene en **19 tipologías** (15 base + 4 nuevas:
datos clave, lista simple, filtros, paginación), muy por debajo del límite
de 30, y varias páginas internas aún sin revisar. Esto confirma que
clasificar por esquema de campos (y no por contenido) es lo que permite
llegar a un sistema de módulos compacto y reutilizable.

Casos límite aún abiertos:
- ¿Banner CTA (#5) es un módulo propio o una variante compacta del Hero (#1)?
- ¿Galería (#6) y Grid de tarjetas (#3) convergen en un único módulo cuando
  la tarjeta se reduce a imagen+link?
- ¿Paginación (#19) se modela como módulo propio o como propiedad de
  configuración del Grid de tarjetas (#3)?

## Pendiente para cerrar el inventario

- **Formularios:** ninguna pasada de texto reveló los campos reales de un
  formulario de admisiones — es la pieza más importante que falta y
  necesita pasada visual (o pedir al cliente capturas/acceso al formulario).
- Páginas internas aún sin revisar: Mission/vision/values e Insights
  (institucional); El Colegio, Proyecto Educativo, Etapas educativas,
  páginas de cada servicio (Alminar); Conózcanos completo, Instalaciones,
  páginas de Key Stage individuales, Preguntas Frecuentes (CBS); Vida
  Escolar, Contacto (CEDES — el fetch devolvió 404, falta la URL correcta),
  páginas de cada etapa educativa (CEDES).
- Pasada visual con capturas en los 4 sitios — sigue pendiente por el fallo
  del navegador integrado en esta sesión.
- Una vez cerrado el catálogo de tipologías, mapear qué combinación de
  módulos compone cada una de las 12-15 plantillas de página.

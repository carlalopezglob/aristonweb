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

- **Nuestra Historia:** sin timeline formal (fechas narradas en prosa), un
  carrusel de imágenes ("Previous/Next"), navegación lateral de páginas
  hermanas, bloque de compartir (share) y tarjetas "¿Y ahora qué?". Ver
  notas transversales en el inventario (timeline y carrusel no son módulos
  nuevos).
- **Proyecto Educativo y Currículo (school-overview):** secciones por etapa
  como texto repetido (no grid, no acordeón), lista de 10 servicios
  adicionales (título+párrafo, sin icono), lista de enlaces relacionados,
  bloque de compartir, tarjetas "¿Y ahora qué?".
- **Contacto:** la URL probada (`/contacto`) devolvió 404 — pendiente
  encontrar la URL correcta.

## Pendiente

- Revisar: Vida Escolar, Admisiones (contacto admisiones), Quiénes somos
  (ética/calidad), páginas de cada etapa educativa.
- Contacto: reintentar con la URL correcta.
- Pasada visual (capturas) en cuanto el navegador funcione.

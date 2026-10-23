# Research — Hallazgos

> **Qué es este archivo.** Es el único documento de la carpeta `research/` que puede consultarse en Fase 2. No es un dump de notas: es una síntesis estructurada que Claude puede leer en 2 minutos y extraer criterio de diseño de ella.
>
> **Quién lo rellena.** La persona que lidera la Fase 1 (Research), al terminarla. No se rellena durante la investigación — se rellena al final, cuando ya sabes qué importa.
>
> **Cuándo se actualiza.** Solo si aparece información nueva que cambia alguna de las decisiones ya tomadas. Anotar la fecha y el motivo al pie.

---

## 1. Lo que sabemos de los usuarios

> Todavía no hay brief del cliente ni analytics/entrevistas — esto son inferencias desde el propio
> as-is (las 4 webs actuales), a validar con el cliente.

- Perfil principal inferido: familias en proceso de elegir o confirmar colegio — las 3 webs de cole
  tienen Admisiones como CTA de máxima prioridad (botón propio en header o varios CTAs en el hero).
- Perfil secundario: la propia red de colegios del grupo — Ariston Education usa su web
  institucional también para visibilizar la marca ante otros colegios candidatos a unirse
  (`partnerships@aristonedu.com` en el footer, "School Partnerships" en el menú).
- El buscador de colegios (`Find a School`) ya revela el tamaño real del grupo: 19 colegios en 7
  países (Americas/Europe), con currículos distintos (IB, Cambridge, Montessori, nacionales) —
  relevante para saber cuánta variación de contenido va a tener que absorber el sistema de plantillas
  más allá de los 3 pilotos.

**Preguntas sin responder que afectan al diseño:**
- ¿El sistema nuevo debe ser multi-idioma desde el primer momento? La institucional ya tiene EN/ES,
  CBS tiene switch a inglés, CEDES tiene ES/EN — Alminar es el único 100% monolingüe.
- ¿Quién rellena el contenido de cada cole una vez montada la plantilla — el propio colegio, un
  equipo central de Ariston, o la agencia? Afecta a cuánto hace falta simplificar el editor/CMS.
- Sin brief de tono de voz ni de marca todavía — pendiente de cliente.

---

## 2. Lo que aprendimos del as-is (institucional + 3 coles piloto)

> Esto sustituye al benchmark de competencia habitual: los 4 sitios auditados no son competidores,
> son los sitios que vamos a rediseñar. El ejercicio es el mismo — qué patrones ya existen, qué
> funciona y qué conviene estandarizar. Detalle completo en `research/as-is/`.

- **El header ya convive con 2 niveles de complejidad en producción** (Alminar: nav plana de 4
  items; CBS/CEDES/institucional: mega-menú) → la plantilla de header debe soportar ambos modos, no
  forzar mega-menú en todos los coles.
- **"Etapas educativas" (Infantil→Bachillerato) se resuelve de 3 formas distintas** entre los 3
  coles (anclas en home, grid de tarjetas numeradas, bloques de texto apilados en página interna) →
  es el mejor candidato a forzar un patrón único, porque el contenido es casi idéntico en estructura.
- **Servicios (comedor, transporte, uniforme, extraescolares...) es contenido casi idéntico en los 3
  coles**, pero cada uno lo ubica distinto en su IA (sección ancla en home / submenú propio / "Vida
  Escolar") → candidato fuerte a plantilla de página estándar reutilizable, no a módulos sueltos de
  home.
- **El endorsement del grupo (logo de Ariston Education) aparece en los 3 coles**, pero en
  ubicaciones distintas (footer en Alminar/CBS, footer + menú en CEDES) → en el sistema nuevo
  debería ser un slot fijo de la plantilla, siempre en el mismo sitio.
- **Clasificando por esquema de campos (no por contenido), el catálogo converge rápido:** con solo
  las 4 homes + una primera ronda de páginas internas (equipo, buscador de coles, admisiones,
  historia) salen **19 tipologías de módulo**, muy por debajo del límite de 30 — ver
  `research/as-is/inventario-modulos.md`. Confirma que agrupar por tipo estructural (y no por
  propósito: "servicios", "key stages", "accesos rápidos" acaban siendo el mismo módulo) es lo que
  permite llegar a un sistema compacto.
- **Ningún formulario de admisiones reveló sus campos reales** en la auditoría de texto (se cargan
  por shortcode/iframe) → antes de dar por cerrado el módulo de formulario hace falta pasada visual
  o que el cliente facilite acceso/capturas del formulario real de cada cole.

---

## 3. Restricciones y condicionantes del cliente

- **Máx. 30 módulos y 12-15 plantillas de página** — objetivo explícito del cliente para poder
  implantar el sistema en el resto de colegios del grupo sin depender de agencia en cada caso.
- **Arranca con 3 coles piloto** (Alminar, CBS, CEDES) + la web institucional del grupo
  (aristonedu.com) — pero el sistema tiene que escalar a los 19 colegios que ya existen según
  `Find a School`, no solo a los 3 pilotos.
- El objetivo es una **estructura similar para todos los coles** en la que luego entre el contenido
  específico de cada centro — es decir, la prioridad es la reutilización del esqueleto de
  módulos/plantillas por encima de la personalización visual por colegio (al menos en esta fase).
- Pendiente de cliente: brief de marca, tono de voz, idioma por defecto, y si hay fotografía propia
  o se sigue usando imagen generada por IA (las 4 webs actuales usan imágenes etiquetadas "AI
  Generated"/"AI Modified").

---

## 4. Decisiones de contenido globales

- Pendiente — no hay brief de tono de voz ni de marca todavía. Se completa cuando el cliente lo
  aporte.
- Mientras no haya cifras/datos reales confirmados por colegio (alumnos, ratios, acreditaciones):
  placeholder + "Pendiente cliente", nunca inventar.

---

## Historial

- 2026-10-23 · v1.0 · Hallazgos iniciales tras auditoría as-is de institucional + 3 coles piloto
  (homes + primera ronda de páginas internas). Pendiente: resto de páginas internas, pasada visual,
  y brief del cliente (usuarios, tono, marca).

# Decisiones

> **Qué es este archivo.** El registro único de decisiones ya tomadas — a diferencia de
> `propuesta-sistema.md` §5 (preguntas aún abiertas para el cliente) y §6 (decisiones de rediseño
> que faltan por tomar), esto es el "ya se decidió, esto es lo que se hizo y quién lo decidió".
> Cuando se cierra una pregunta del §5 o una decisión del §6, se apunta aquí y se enlaza desde el
> sitio original (no se borra la entrada original, se marca como resuelta con un puntero a esta
> fila).
>
> **Quién rellena esto.** Quien cierre la decisión — Carla, o quien lleve la sesión donde se tomó.
>
> **Cómo se añade.** Append-only, igual que `## Historial` en el resto de documentos: nunca se
> reescribe una fila, solo se añade una nueva. Si una decisión se revierte o cambia más adelante,
> se añade una fila nueva que lo diga y se referencia la fila anterior.

---

## Registro

| Fecha | Decisión | Quién la tomó | Fuente | Afecta a |
| --- | --- | --- | --- | --- |
| 2026-11-04 | No se crea módulo propio "Bloque de contacto". El caso real en el as-is (Alminar: teléfono + 2 emails; CEDES/BS: "Contenido Media + datos de contacto") es siempre CAT-CON-001 relleno con datos de contacto, nunca una estructura distinta — y cuando lleva formulario ya lo cubre CAT-FRM-001. Crear uno dedicado rompería la regla de nomenclatura agnóstica (no serviría en 5 páginas con contenido distinto). | Carla | Revisión de `colegio-alminar.md`, `colegio-cedes.md`, `colegio-bs.md` | `equivalencia-modulos-kit.md` fila #9 (pasa de 💭 a resuelta) |
| 2026-11-04 | El "online application form" heredado de Orbital (EMEA) deja de ser público. El formulario de cara a la web pasa a ser siempre el de inquiry/book a visit (ligero); el application form pesado (documentación, pago) queda como paso posterior, fuera del recorrido principal — ya sea en la web o en el portal externo. | Paz Guadamillas (confirmando a Aniol Javaloyes) | Sesión en vivo E2 (4 nov 2026) | Alcance de la plantilla de Admisiones (ya acotado a enquiry/lead-gen + visita, ver `hallazgos.md` §2.1); `propuesta-sistema.md` (plantilla Admisiones) |
| 2026-11-04 | Un tour virtual 360°/Matterport de instalaciones queda fuera de alcance de este proyecto — ni EMEA ni AME tienen uno real hoy, no es prioritario. "Instalaciones" sigue siendo módulo básico obligatorio, pero debe quedar compatible con incrustar un tour después (iframe/widget) si un colegio lo construye por su cuenta. Formato de exploración (menú por etapa/aula vs. vídeo corto) queda sin resolver, pendiente de Fase 2. | Oisin O'Keeffe (cerrando con Paz Guadamillas, Aniol Javaloyes, Carlota Vázquez, Jaime Abad) | Sesión en vivo E2 (4 nov 2026) | Catálogo de módulos — módulo "Instalaciones"; `hallazgos.md` §2.1 |

---

## Historial

- 2026-11-04 · v1.0 · Creado el archivo. Antes de esto no había un registro centralizado de
  decisiones ya tomadas — `propuesta-sistema.md` §5/§6 solo recogían preguntas y decisiones
  pendientes, sin rastro de quién las resolvió ni cuándo.
- 2026-11-04 · v1.1 · Primera entrada del registro: cierre del 💭 de la fila #9 de
  `equivalencia-modulos-kit.md` (bloque de contacto).
- 2026-11-05 · v1.2 · Dos decisiones de la sesión en vivo E2 (Marketing y Admisiones, 4 nov):
  el application form de Orbital deja de ser público, y el tour virtual de instalaciones queda
  fuera de alcance del proyecto.

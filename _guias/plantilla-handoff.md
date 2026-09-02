# Plantilla — Handoff Fase 2 → Fase 3

> **Qué es.** Cuando terminas la fase de diseño (spec completa y validada) y pasas a construcción (generar HTML), no copies la spec completa. Usa este bloque compacto. La sesión de Fase 3 arranca con el mínimo contexto necesario.

---

## Cómo usarla

1. Al cerrar la sesión de Fase 2, pide a Claude: *"Dame el bloque de handoff para esta página."*
2. Copia el bloque resultante.
3. Al arrancar la sesión de Fase 3 en Claude Code, pega el bloque y añade: *"Genera el wireframe HTML con esto. Lee los módulos que necesites del registro."*

---

## Formato del bloque

```
PÁGINA: <Nombre legible>
RUTA OUTPUT: output/pages/<sección>/<slug>.html
SECCIÓN: <nombre de sección del site>
SPRINT: <número>
VERSIÓN: v1.0

CABECERA: <NNN> — <motivo en 1 línea>

MÓDULOS (en orden de aparición):
  1. <NNN> [variante si aplica]
     Contenido: <qué va aquí en 1 línea>
  2. <NNN>
     Contenido: <...>
  3. ...

NOTAS TÉCNICAS: <Solo si hay algo no estándar. Máx. 2 líneas. Omitir si no hay nada.>
DEPENDENCIAS PENDIENTES: <Módulos por crear, recursos visuales pendientes. Omitir si no hay.>
```

---

## Ejemplo

```
PÁGINA: Servicios del centro
RUTA OUTPUT: output/pages/seccion-a/servicios.html
SECCIÓN: seccion-a
SPRINT: 3
VERSIÓN: v1.0

CABECERA: CAB-001 — Página funcional, sin imagen de impacto

MÓDULOS (en orden de aparición):
  1. CON-008 — Barra de anclaje
     Contenido: 3 anclas: Académico, Deportivo, Cultural
  2. CON-001-A — Bloque texto simple
     Contenido: Intro a los servicios del centro (copy pendiente cliente)
  3. CON-004 — Acordeón
     Contenido: Listado de servicios — 6 ítems (copy pendiente cliente)
  4. CON-019 — Bloque CTA
     Contenido: "Solicitar información" → formulario de contacto

DEPENDENCIAS PENDIENTES: Copy intro y listado de servicios (pendiente cliente)
```

---

## Historial

- [YYYY-MM-DD] · v1.0 · Creación inicial

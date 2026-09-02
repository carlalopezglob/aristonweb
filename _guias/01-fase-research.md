# 01 — Fase 1: Research

> Guía operativa. Lo que tienes que hacer, en qué orden, y qué produce esta fase.

---

## Qué es esta fase

La fase de investigación acumula todo el conocimiento que necesitamos antes de tomar una sola decisión de diseño. Incluye: análisis del sitio actual (as-is), lectura de documentos del cliente, benchmark de competencia e inspiración, e ideación inicial sobre qué podría tener el nuevo sitio.

El error más común: generar mucho material pero no destilarlo. El output de esta fase no son los documentos crudos — es la síntesis que justifica las decisiones.

---

## Archivos de esta fase

| Archivo | Qué es | Quién lo rellena |
| --- | --- | --- |
| `research/links.md` | Referencias a docs del cliente (Drive, Notion…) + URLs consultadas | La persona que investiga |
| `research/benchmark.md` | Referentes analizados con decisiones | La persona que hace el bench |
| `research/hallazgos.md` | **El único output que pasa a Fase 2** | La UX lead, al final de la fase |

> **Los PDFs y documentos del cliente no van en el repo.** Guárdalos donde ya los tenéis (Drive, Notion, carpeta compartida) y apunta la referencia en `research/links.md` — nombre del doc, dónde está, qué decisión genera. Así hay trazabilidad sin subir peso al repositorio.

---

## Paso a paso

### 1. Recoger los documentos del cliente

Los documentos del cliente (PDFs, Word, decks) **no se guardan en el repo** — pesan, Git no los versiona bien y no los necesita nadie para construir. Déjalos donde ya están (Drive, Notion, carpeta compartida del proyecto).

Lo que sí va en el repo: una línea en `research/links.md` por cada documento, con su nombre, dónde está y qué decisión o información relevante genera.

### 2. Analizar el sitio actual (as-is)

Recorrer el sitio actual si existe. Para cada sección:
- Qué contenidos tiene
- Qué funciona (no tirar lo que ya funciona bien)
- Qué falla o falta
- Anotarlo en `research/links.md` o directamente en `research/hallazgos.md` sección 1

### 3. Benchmark

Identificar 3-5 competidores directos y 2-3 referentes de inspiración fuera del sector. Para cada uno:
- URL
- Qué nos gusta y qué no
- Qué decisión concreta genera para nuestro proyecto

Rellenar `research/benchmark.md`. Solo lo que tiene implicación de diseño — no hacer catálogo sin criterio.

### 4. Leer los documentos del cliente

Leer briefs, deck de marca, guía de tono, etc. Anotar en `research/links.md` las decisiones que genera cada documento.

### 5. Sintetizar en hallazgos.md

Este es el paso más importante. Cuando ya has procesado todo el material, abrir `research/hallazgos.md` y rellenarlo. No copiar — sintetizar:

- Sección 1: qué sabemos de los usuarios (datos reales, no suposiciones)
- Sección 2: decisiones de diseño que viene del benchmark (no los referentes, las decisiones)
- Sección 3: restricciones del cliente (lo que sí o no quieren explícitamente)
- Sección 4: decisiones de contenido globales (tono, criterio de cabecera, etc.)

Un buen hallazgos.md tiene 1-2 páginas. Si tiene más, está demasiado detallado — la síntesis vive aquí, el detalle en los docs crudos.

---

## Cómo usar Claude en esta fase

Claude puede ayudar a sintetizar y estructurar los hallazgos si le compartes los documentos directamente en el chat. **No le pidas que lea la carpeta `research/` entera** — comparte el contenido relevante en el chat o pégalo directamente.

Prompt útil para esta fase:
> "Tengo estos documentos del cliente [adjuntar o pegar contenido]. Ayúdame a rellenar `research/hallazgos.md` con lo que sea relevante para diseñar el sitio web."

Claude no carga nada de `research/` por su cuenta en esta fase — todo lo que necesita te lo pide o lo recibes en el chat.

---

## Checklist de salida — antes de pasar a Fase 2

- [ ] `research/hallazgos.md` rellenado y revisado
- [ ] Sección 1 (usuarios): al menos 3 observaciones con fuente
- [ ] Sección 2 (benchmark): al menos 3 decisiones concretas
- [ ] Sección 3 (cliente): todas las restricciones conocidas
- [ ] Sección 4 (contenido global): criterio de tono y cabecera definidos
- [ ] `research/benchmark.md` rellenado con todos los referentes analizados
- [ ] Preguntas abiertas identificadas (en la sección correspondiente de hallazgos.md)

Si hay preguntas abiertas que bloquean decisiones de diseño: resolverlas antes de avanzar, o documentarlas explícitamente para que Fase 2 las tenga en cuenta.

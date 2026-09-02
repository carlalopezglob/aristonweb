---
description: Sube mis cambios de forma segura — rama + Pull Request, nunca directo a main
---

Sube mis cambios: **$ARGUMENTS**

**Nunca a `main`.** Si te pido push directo a `main`, niégate y hazlo por rama + Pull Request:
`main` está protegido por convención y el PR lo revisa el equipo. Explícamelo si hace falta.

Paso a paso, contándome qué haces en cada uno:

1. `node bin/estado.mjs` y `node bin/check.mjs`. **Si `check` da errores, para y dime cuáles** —
   no subimos un repo incoherente.
2. `git status` y `git diff --stat`. Enséñame qué va a entrar y confírmame que es lo que espero.
3. Comprueba que no se cuela nada que no debe: `.env`, documentos del cliente (PDF/Word/decks),
   nombres reales de cliente en las specs si el repo es compartido. Si ves algo así, **para**.
4. Si estoy en `main`, crea rama descriptiva: `feat/…`, `fix/…`, `docs/…`.
5. Commit con mensaje claro en español, explicando el **qué** y el **por qué**, no el cómo.
6. `git push -u origin <rama>`.
7. Abre el Pull Request contra `main` (con `gh pr create` si está disponible; si no, dame la URL
   para abrirlo a mano) con un cuerpo que resuma qué cambia y qué hay que revisar.
8. Dame el enlace del PR y recuérdame que lo mergea quien revisa, no yo.

Si `git config core.hooksPath` no está en `.githooks`, avísame: el hook que bloquea el push a `main`
no está activo en este clon.

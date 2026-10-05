# Checklist — rebrand Puebla → Houston incompleto

Este proyecto es una copia de un sitio anterior para una liga en **Puebla,
México** (equipos como Tepeaca, Cholula, Tehuacán, Acatzingo, Huauchinango),
reconvertido a **Ángeles Houston — Copa 5 de Mayo Houston 2027** (28 equipos,
8 grupos, torneo en Houston, TX). El rebrand quedó a medias: la copy fija
(`index.html`, `translations.ts`, `Tournament` en `content.mock.ts`) ya habla
de Houston 2027, pero los datos de ejemplo (equipos, standings, noticias,
posters) siguen siendo los de Puebla. Esto es lo que hay que revisar antes de
publicar el sitio real:

## 1. `core/data/teams.mock.ts` — 100% Puebla, sin tocar

Los 8 equipos son ficticios de Puebla: **Ángeles FC Puebla** (Tepeaca),
**Lobos de Tepeaca**, **Atlético Puebla Real**, **Guerreros de Acatzingo**,
**Halcones de Tecali**, **Centauros de Tehuacán**, **Toros de Huauchinango**,
**Águilas de Cholula**. Ciudades, estadios y colores son todos de Puebla.

Se usan en: `HomeComponent` (`topTeams = TEAMS.slice(0,4)`) y
`EquiposComponent` (`teams = TEAMS`) — es decir, **la home y la página
"Equipos" del sitio de Houston hoy muestran equipos de Puebla**.

`STANDINGS` (tabla de posiciones) tiene solo 8 filas (un grupo), pero el
torneo real es de 28 equipos / 8 grupos de 4 — no alcanza ni para llenar un
solo grupo del formato real si se activara tal cual.

➜ Acción: reemplazar por los equipos reales de Houston (mínimo 28, o dejar el
array vacío/con placeholders neutros si aún no están confirmados), y ajustar
`STANDINGS` al nuevo formato de grupos.

## 2. `core/data/content.mock.ts` — mezcla de ambos

- `NEWS`: menciona "Ángeles FC" (sin apellido de ciudad, ambiguo) y **"Grupo
  Tepeaca"** como nuevo patrocinador — Tepeaca es Puebla. Fechas en `2026`
  (el torneo de Houston es `2027`). Menciona "Estadio Corona Dorada" (Puebla).
- `SPONSORS`: mezcla real/ficticio — `Houston Builders Group` (Oro, coherente
  con Houston) junto con `Panadería La Espiga`, `Refaccionaria El Golazo`,
  `Radio Angelópolis` (nombres genéricos/mexicanos, no verificables como
  reales de Houston).
- `TOURNAMENTS`: este bloque **sí está correcto y actualizado** — Copa 5 de
  Mayo Houston 2027, venue real en Houston TX, premios en USD, formato
  28/8 grupos. Es la fuente de verdad de cómo debería verse todo lo demás.

➜ Acción: reescribir `NEWS` y depurar `SPONSORS` para que sean consistentes
con Houston 2027, o vaciarlos hasta tener contenido real.

## 3. `core/data/posters.mock.ts` — 100% Puebla

`UPCOMING_MATCHES` y `RESULTS` usan los mismos equipos ficticios de Puebla
(Ángeles FC, Lobos, Atlético Real, Halcones, Centauros, Águilas, Guerreros,
Toros) con sedes de Puebla (Estadio Corona Dorada, Complejo Cinco de Mayo,
Coliseo del Valle, Arena Guerrera). **No se ve que estos arrays se estén
consumiendo actualmente en `partidos`/`resultados`** (esas páginas muestran un
estado "en espera del sorteo" fijo vía `PartidosComponent`/`ResultadosComponent`,
sin importar estos mocks) — revisar si siguen ahí solo para cuando se active
el calendario real.

➜ Acción: si/cuando se conecte el calendario real, regenerar estos arrays con
equipos y sedes de Houston.

## 4. `src/styles.scss` — encabezado desactualizado

Primera línea del archivo: `// Ángeles Puebla — Global design system`.
Cosmético (un comentario), pero es la pista más directa de que el diseño
también viene del proyecto de Puebla.

➜ Acción: actualizar el comentario a "Ángeles Houston".

## 5. Fecha de sorteo/arranque duplicada en 3 sitios

`'2027-04-28T12:00:00'` está hardcodeada en `HomeComponent.sorteoDate` y en
`PartidosComponent.sorteoDate`; `'2027-05-01T09:00:00'` en
`ResultadosComponent.kickoffDate`. Si la fecha cambia, hay que tocar los tres
componentes a mano y es fácil dejar uno desactualizado.

➜ Acción (mejora, no bug urgente): mover ambas fechas a `TOURNAMENTS[0]`
(que ya tiene `startDate`/`sorteoDate` como texto) o a una constante única en
`core/data/`, y que los componentes la lean de ahí.

## 6. Ruta `noticias` no registrada

`pages/noticias/` existe (componente + template + mock `NEWS`) pero no
aparece en `app.routes.ts`. O falta agregarla, o es código muerto que se puede
borrar junto con el link en el navbar/footer si no se usa.

## 7. Formulario de contacto no envía nada

`ContactoComponent.onSubmit()` solo valida y pone `submitted.set(true)` —
no hay llamada HTTP ni integración (EmailJS, Formspree, backend propio). Hoy
cualquier mensaje enviado desde el formulario se pierde. Es el mismo patrón
"stub" que se documenta en el proyecto hermano `ZELYON/angular` — falta
conectar un envío real antes de publicar.

## Resumen — antes de publicar el sitio real hay que:

- [ ] Reemplazar `TEAMS` y `STANDINGS` con los equipos reales de Houston.
- [ ] Reescribir `NEWS` con noticias reales o vaciar el array.
- [ ] Confirmar/depurar `SPONSORS`.
- [ ] Actualizar o borrar `posters.mock.ts` según si se van a usar.
- [ ] Corregir el comentario de cabecera en `styles.scss`.
- [ ] (Opcional) centralizar las fechas de sorteo/arranque en un solo lugar.
- [ ] Decidir sobre la ruta `noticias` (agregarla o borrar el código muerto).
- [ ] Conectar el formulario de contacto a un envío real.

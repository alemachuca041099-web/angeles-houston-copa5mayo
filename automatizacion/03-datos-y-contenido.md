# Datos, modelos e i18n

## Modelos (`core/models/`)

- `content.model.ts` → `NewsItem`, `GalleryItem`, `Sponsor`, `Tournament`, `StatHighlight`.
- `team.model.ts` → `Team`, `StandingRow` (fila de tabla de posiciones, incluye
  `form: ('G'|'E'|'P')[]` para la racha de últimos partidos).
- `poster.model.ts` → `MatchPoster` (próximo partido), `ResultPoster` (resultado).

Patrón bilingüe en los modelos: campos de texto largo tienen su par `...En`
opcional (`formatEn`, `startDateEn`, `championPrizeEn`, etc.) — el string en
inglés vive al lado del string en español dentro del mismo objeto, no en un
archivo de traducciones aparte. Se resuelve con `LanguageService.pick(es, en)`.

## Mocks (`core/data/`)

- `content.mock.ts` → `NEWS`, `GALLERY`, `SPONSORS`, `TOURNAMENTS`, `HERO_STATS`.
- `teams.mock.ts` → `TEAMS`, `STANDINGS`.
- `posters.mock.ts` → `UPCOMING_MATCHES`, `RESULTS`.

No hay servicio ni HTTP: las páginas importan estas constantes directo
(`import { TEAMS } from '../../core/data/teams.mock'`). Para conectar un
backend real a futuro, el punto de reemplazo natural es cambiar ese `import`
por una llamada a un `service` con la misma forma de retorno (mismo tipo).

## i18n (`core/i18n/`)

- `translations.ts`: diccionario plano `Record<string, {es, en}>`, agrupado por
  comentarios de sección (`// ==== NAVBAR ====`, `// ==== HOME ====`, etc.).
  Algunas entradas incluyen HTML inline (`<span class='gold-text'>...</span>`)
  para resaltar palabras — el template las inyecta con `[innerHTML]`.
- `language.service.ts`:
  - `lang = signal<'es'|'en'>(...)`, inicial leído de `localStorage['angeles-houston-lang']`.
  - `t(key)` devuelve el string en el idioma actual (fallback a `es`, y si la
    clave no existe devuelve la clave misma — útil para detectar claves
    faltantes en dev, ya que se ve el key crudo en pantalla).
  - `pick(es, en)` para los campos bilingües de los modelos (arriba).
  - `toggle()` / `setLang()` persisten en localStorage.

## Cómo agregar contenido nuevo

1. **Traducción nueva**: agregar la key a `translations.ts` con `{es, en}`.
2. **Dato nuevo** (equipo, noticia, sponsor...): agregar el objeto al array
   correspondiente en `core/data/*.mock.ts`, respetando el modelo en
   `core/models/`.
3. Si el dato tiene texto largo que varía por idioma, seguir el patrón
   `campo` / `campoEn` en el modelo y mock, y leerlo en el template con
   `i18n.pick(item.campo, item.campoEn)`.

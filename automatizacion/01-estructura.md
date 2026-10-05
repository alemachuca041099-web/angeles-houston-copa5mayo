# Estructura del proyecto

Angular 19 standalone (sin NgModules), componentes por página con lazy loading
vía `loadComponent`. Sin backend: todo el contenido vive en archivos `.mock.ts`
dentro del propio repo.

## Árbol relevante

```
src/
├── app/
│   ├── app.component.ts          # shell: navbar + <router-outlet> + footer + scroll-top
│   ├── app.config.ts             # providers globales (router, zone change detection)
│   ├── app.routes.ts             # todas las rutas, cada página es lazy (loadComponent)
│   │
│   ├── core/
│   │   ├── data/                 # "backend" fake — arrays hardcodeados
│   │   │   ├── content.mock.ts   # NEWS, GALLERY, SPONSORS, TOURNAMENTS, HERO_STATS
│   │   │   ├── teams.mock.ts     # TEAMS, STANDINGS (tabla de posiciones)
│   │   │   └── posters.mock.ts   # UPCOMING_MATCHES, RESULTS
│   │   ├── models/                # interfaces TS de todo lo anterior
│   │   │   ├── content.model.ts
│   │   │   ├── team.model.ts
│   │   │   └── poster.model.ts
│   │   └── i18n/
│   │       ├── translations.ts   # diccionario ES/EN plano, clave -> {es, en}
│   │       └── language.service.ts  # signal `lang`, método `t(key)`, persiste en localStorage
│   │
│   ├── pages/                    # una carpeta por ruta, cada una standalone
│   │   ├── home/
│   │   ├── torneos/
│   │   ├── partidos/             # próximos partidos (hoy: placeholder "sorteo pendiente")
│   │   ├── resultados/           # resultados (hoy: placeholder "aún no hay resultados")
│   │   ├── tabla/                # tabla de posiciones por grupo (hoy: placeholder)
│   │   ├── equipos/
│   │   ├── galeria/
│   │   ├── noticias/             # existe pero NO está en app.routes.ts (ruta huérfana)
│   │   ├── patrocinadores/
│   │   └── contacto/
│   │
│   └── shared/
│       ├── components/
│       │   ├── navbar/           # sticky, cambia estilo al hacer scroll, menú móvil
│       │   ├── footer/
│       │   ├── scroll-top/       # botón flotante "subir"
│       │   ├── countdown/        # cuenta regresiva a una fecha (sorteo / arranque)
│       │   ├── stat-counter/     # contador animado (0 → valor final)
│       │   ├── sponsor-marquee/  # carrusel infinito de logos
│       │   ├── team-card/, team-crest/
│       │   ├── news-card/
│       │   ├── poster-card/
│       │   ├── page-header/      # header genérico de cada página interna (kicker+title+subtitle)
│       │   ├── section-heading/
│       │   └── lang-switch/      # botón ES/EN
│       └── directives/
│           └── reveal.directive.ts   # `appReveal="fade-up"` — anima al entrar en viewport
```

## Rutas (`app.routes.ts`)

| Path | Componente | Nota |
|---|---|---|
| `/` | HomeComponent | |
| `/torneos` | TorneosComponent | |
| `/partidos` | PartidosComponent | |
| `/resultados` | ResultadosComponent | |
| `/tabla` | TablaComponent | |
| `/equipos` | EquiposComponent | |
| `/galeria` | GaleriaComponent | |
| `/patrocinadores` | PatrocinadoresComponent | |
| `/contacto` | ContactoComponent | |
| `**` | redirect a `/` | |

`NoticiasComponent` (`pages/noticias/`) existe en el código pero **no tiene ruta
registrada** — no es alcanzable navegando el sitio salvo que se agregue a
`app.routes.ts`.

## Convenciones que sigue el código

- Componentes standalone, `imports: [...]` explícito en cada uno (nada de módulos).
- Cada página inyecta `LanguageService` como `i18n = inject(LanguageService)` y
  usa `i18n.t('clave')` en el template.
- Los mocks (`TEAMS`, `NEWS`, etc.) se importan directo en el `.ts` de la página
  que los consume — no hay un "service" intermedio, es acceso directo al array.
- Fechas de torneo (sorteo, arranque) están hardcodeadas como strings ISO en
  cada componente que las usa (`sorteoDate`, `kickoffDate`) en vez de vivir en
  un solo lugar — ver [04-checklist-rebranding.md](./04-checklist-rebranding.md).

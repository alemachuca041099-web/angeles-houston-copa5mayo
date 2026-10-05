# Sistema de animación

No usa ninguna librería de animación (sin GSAP, sin Framer, sin Angular
Animations). Todo es CSS + `IntersectionObserver` + `requestAnimationFrame`
a mano.

## 1. Scroll reveal — `RevealDirective`

Archivo: `src/app/shared/directives/reveal.directive.ts`

Directiva standalone `[appReveal]` que se pone en cualquier elemento del
template:

```html
<div appReveal="fade-up" [revealDelay]="120">...</div>
```

- Variantes de `@Input('appReveal') animation`: `fade-up | fade-in | zoom-in | slide-left | slide-right`.
- En `ngAfterViewInit` agrega las clases `reveal reveal--<animacion>` y crea un
  `IntersectionObserver` (`threshold: 0.15`, `rootMargin: '0px 0px -60px 0px'`).
- Cuando el elemento entra en viewport agrega `.is-visible` y se desuscribe
  (`unobserve`) — la animación corre una sola vez, no se repite al volver a
  scrollear.
- El estado visual real (opacidad/transform) vive en CSS, no en la directiva:
  ver `src/styles.scss` líneas ~182-219, bloque `// ---------- Scroll reveal ----------`.
- Respeta `prefers-reduced-motion: reduce` — desactiva transición y deja todo
  visible de inmediato.

Para agregar una animación nueva: agregar el nombre al union type del
`@Input`, y un bloque `.reveal--nueva { transform: ...; }` en `styles.scss`.

## 2. Contador animado — `StatCounterComponent`

Archivo: `src/app/shared/components/stat-counter/stat-counter.component.ts`
(componente inline, sin `.html`/`.scss` separados).

- Se usa en el hero de Home (`<app-stat-counter [value]="28" [label]="...">`).
- `IntersectionObserver` (`threshold: 0.4`) dispara `animate()` una sola vez.
- `animate()` usa `requestAnimationFrame` con easing cúbico
  `1 - Math.pow(1 - progress, 3)` (ease-out) durante `duration` ms (1600 por
  defecto), actualizando un `signal<number>` (`displayValue`) que el template
  muestra con el pipe `number`.
- Limpieza en `ngOnDestroy`: `observer.disconnect()` + `cancelAnimationFrame`.

## 3. Countdown — `CountdownComponent`

Archivo: `src/app/shared/components/countdown/countdown.component.ts`

- Recibe `@Input({required:true}) targetDate` (string parseable por `Date`).
- `setInterval` cada 1000ms recalcula días/horas/min/seg restantes con
  `Math.max(target - now, 0)` (nunca va a negativo).
- Se usa en Home y en `partidos`/`resultados` apuntando a
  `sorteoDate = '2027-04-28T12:00:00'` y `kickoffDate = '2027-05-01T09:00:00'`
  respectivamente — **la misma fecha está repetida como string literal en 3
  componentes distintos**, ver checklist de rebranding.
- Limpieza: `clearInterval` en `ngOnDestroy`.

## 4. Marquee de patrocinadores — `SponsorMarqueeComponent`

Archivo: `sponsor-marquee.component.scss`

- Puro CSS: `@keyframes scroll { from { translateX(0) } to { translateX(-50%) } }`,
  `animation: scroll 26s linear infinite` sobre `.marquee__track`.
- El track duplica la lista de sponsors (para el loop infinito sin salto) —
  eso lo arma el `.ts` del componente, no el SCSS.
- `mask-image` con gradiente para difuminar los bordes izq/der.
- `:hover` pausa la animación (`animation-play-state: paused`).

## 5. Parallax + navbar reactiva al scroll

- `HomeComponent` tiene `@HostListener('window:scroll') onScroll()` que
  actualiza un `signal parallaxOffset` con `window.scrollY` (se usa para mover
  capas del hero).
- `NavbarComponent` tiene su propio `@HostListener('window:scroll')` que pone
  `scrolled = true` cuando `window.scrollY > 30` (para achicar/oscurecer la
  barra).
- Ambos son listeners independientes sobre el mismo evento — no comparten un
  servicio de scroll común (duplicación menor, no es un bug).

## 6. Menú móvil

- `NavbarComponent.menuOpen` (signal boolean) + `toggleMenu()` / `closeMenu()`.
- La animación de apertura/cierre vive en `navbar.component.scss` (transición
  CSS sobre el panel, no JS).

## Patrón general a replicar

Todas las animaciones de "aparecer al hacer scroll" siguen el mismo patrón:
`IntersectionObserver` + clase CSS + `unobserve` tras la primera vez. Si se
quiere agregar una animación nueva a un componente, lo más consistente con el
resto del código es reusar `RevealDirective` en el template en vez de escribir
otro observer a mano.

import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="scroll-top"
      [class.is-visible]="visible()"
      (click)="scrollToTop()"
      aria-label="Volver arriba"
    >
      <span></span>
    </button>
  `,
  styles: [`
    .scroll-top {
      position: fixed;
      left: 20px;
      bottom: 20px;
      z-index: 90;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--gradient-gold);
      border: none;
      box-shadow: var(--shadow-gold);
      display: grid;
      place-items: center;
      cursor: pointer;
      opacity: 0;
      transform: translateY(16px) scale(0.85);
      pointer-events: none;
      transition: opacity 0.35s var(--ease-impact), transform 0.35s var(--ease-impact);
    }

    .scroll-top.is-visible {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: auto;
    }

    .scroll-top:hover {
      transform: translateY(-3px) scale(1.05);
    }

    .scroll-top span {
      width: 10px;
      height: 10px;
      border-top: 2px solid var(--ink-950);
      border-left: 2px solid var(--ink-950);
      transform: rotate(45deg) translateY(2px);
    }

    @media (max-width: 560px) {
      .scroll-top {
        left: 14px;
        bottom: 14px;
        width: 52px;
        height: 52px;
      }
    }
  `]
})
export class ScrollTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 500);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

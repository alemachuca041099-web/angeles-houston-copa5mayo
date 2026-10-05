import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, inject, signal } from '@angular/core';

@Component({
  selector: 'app-stat-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat">
      <div class="stat__value">{{ prefix }}{{ displayValue() | number }}{{ suffix }}</div>
      <div class="stat__label">{{ label }}</div>
    </div>
  `,
  styles: [`
    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      text-align: center;
    }
    .stat__value {
      font-family: var(--font-display);
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      background: var(--gradient-gold);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      line-height: 1;
    }
    .stat__label {
      font-size: 0.82rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: rgba(250, 248, 242, 0.6);
      font-weight: 600;
    }
  `]
})
export class StatCounterComponent implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private rafId?: number;

  @Input() value = 0;
  @Input() label = '';
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() duration = 1600;

  displayValue = signal(0);

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate();
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const from = 0;
    const to = this.value;

    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue.set(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        this.rafId = requestAnimationFrame(step);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }
}

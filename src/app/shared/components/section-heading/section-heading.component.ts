import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <div class="heading" [class.heading--center]="align === 'center'" appReveal="fade-up">
      <span class="kicker">{{ kicker }}</span>
      <h2 [innerHTML]="title"></h2>
      @if (subtitle) {
        <p class="heading__sub">{{ subtitle }}</p>
      }
    </div>
  `,
  styles: [`
    .heading {
      max-width: 640px;
      margin-bottom: 48px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .heading--center {
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      align-items: center;
    }
    h2 {
      font-size: clamp(2rem, 4.2vw, 3.4rem);
      line-height: 1.05;
      color: var(--bone-50);
    }
    .heading__sub {
      font-size: 1.05rem;
      color: rgba(250, 248, 242, 0.65);
      line-height: 1.6;
    }
  `]
})
export class SectionHeadingComponent {
  @Input() kicker = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'left';
}

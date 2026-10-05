import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-lang-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="lang-switch" (click)="i18n.toggle()" [attr.aria-label]="'Switch language'">
      <span [class.is-active]="i18n.lang() === 'es'">ES</span>
      <span class="lang-switch__sep">/</span>
      <span [class.is-active]="i18n.lang() === 'en'">EN</span>
    </button>
  `,
  styles: [`
    .lang-switch {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: transparent;
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-radius: 999px;
      padding: 7px 14px;
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: rgba(250, 248, 242, 0.55);
      transition: border-color 0.25s;
      flex-shrink: 0;
    }
    .lang-switch:hover {
      border-color: var(--gold-500);
    }
    .lang-switch span.is-active {
      color: var(--gold-300);
    }
    .lang-switch__sep {
      color: rgba(250, 248, 242, 0.3);
    }
  `]
})
export class LangSwitchComponent {
  i18n = inject(LanguageService);
}

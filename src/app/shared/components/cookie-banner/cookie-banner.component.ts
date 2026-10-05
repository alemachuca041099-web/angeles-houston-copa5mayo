import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';

const STORAGE_KEY = 'angeles-houston-cookie-consent';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss'
})
export class CookieBannerComponent {
  i18n = inject(LanguageService);
  visible = signal(false);

  constructor() {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        this.visible.set(true);
      }
    } catch {
      /* localStorage unavailable */
    }
  }

  accept(): void {
    this.setConsent('accepted');
  }

  decline(): void {
    this.setConsent('declined');
  }

  private setConsent(value: 'accepted' | 'declined'): void {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    this.visible.set(false);
  }
}

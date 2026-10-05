import { Injectable, signal } from '@angular/core';
import { TRANSLATIONS } from './translations';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'angeles-houston-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>(this.readInitial());

  private readInitial(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') return stored;
    } catch {
      /* localStorage unavailable */
    }
    return 'es';
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }

  toggle(): void {
    this.setLang(this.lang() === 'es' ? 'en' : 'es');
  }

  t(key: string): string {
    const dict = TRANSLATIONS[key];
    if (!dict) return key;
    return dict[this.lang()] ?? dict['es'] ?? key;
  }

  /** Pick between a Spanish value and its optional English counterpart, for bilingual data fields. */
  pick<T>(es: T, en: T | undefined): T {
    return this.lang() === 'en' && en !== undefined ? en : es;
  }
}

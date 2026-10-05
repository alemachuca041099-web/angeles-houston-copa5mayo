import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../../core/i18n/language.service';
import { LangSwitchComponent } from '../lang-switch/lang-switch.component';

interface NavLink {
  key: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, LangSwitchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  i18n = inject(LanguageService);

  scrolled = signal(false);
  menuOpen = signal(false);

  readonly links: NavLink[] = [
    { key: 'nav.inicio', path: '/' },
    { key: 'nav.torneos', path: '/torneos' },
    { key: 'nav.partidos', path: '/partidos' },
    { key: 'nav.resultados', path: '/resultados' },
    { key: 'nav.tabla', path: '/tabla' },
    { key: 'nav.equipos', path: '/equipos' },
    { key: 'nav.galeria', path: '/galeria' },
    { key: 'nav.patrocinadores', path: '/patrocinadores' },
    { key: 'nav.contacto', path: '/contacto' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 30);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

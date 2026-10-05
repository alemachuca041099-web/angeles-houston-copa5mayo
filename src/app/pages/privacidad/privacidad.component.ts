import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RevealDirective],
  templateUrl: './privacidad.component.html',
  styleUrl: './privacidad.component.scss'
})
export class PrivacidadComponent {
  i18n = inject(LanguageService);
  sections = ['owner', 'data', 'use', 'sharing', 'cookies', 'rights', 'changes'];
}

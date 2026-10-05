import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, CountdownComponent, RevealDirective],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent {
  i18n = inject(LanguageService);
  kickoffDate = '2027-05-01T09:00:00';
}

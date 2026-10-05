import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, CountdownComponent, RevealDirective],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.scss'
})
export class PartidosComponent {
  i18n = inject(LanguageService);
  sorteoDate = '2027-04-28T12:00:00';
}

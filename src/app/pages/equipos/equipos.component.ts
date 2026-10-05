import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { TeamCardComponent } from '../../shared/components/team-card/team-card.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TEAMS } from '../../core/data/teams.mock';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, TeamCardComponent, CountdownComponent, RevealDirective],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.scss'
})
export class EquiposComponent {
  i18n = inject(LanguageService);
  teams = TEAMS;
  sorteoDate = '2027-04-28T12:00:00';
}

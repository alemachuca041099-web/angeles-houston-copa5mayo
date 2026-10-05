import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../shared/directives/reveal.directive';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading.component';
import { StatCounterComponent } from '../../shared/components/stat-counter/stat-counter.component';
import { TeamCardComponent } from '../../shared/components/team-card/team-card.component';
import { SponsorMarqueeComponent } from '../../shared/components/sponsor-marquee/sponsor-marquee.component';
import { CountdownComponent } from '../../shared/components/countdown/countdown.component';
import { ChatWidgetComponent } from '../../shared/components/chat-widget/chat-widget.component';
import { LanguageService } from '../../core/i18n/language.service';

import { TEAMS } from '../../core/data/teams.mock';
import { GALLERY, HERO_STATS, SPONSORS, TOURNAMENTS, TROPHY_PROVIDER } from '../../core/data/content.mock';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RevealDirective,
    SectionHeadingComponent,
    StatCounterComponent,
    TeamCardComponent,
    SponsorMarqueeComponent,
    CountdownComponent,
    ChatWidgetComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  i18n = inject(LanguageService);

  heroStats = HERO_STATS;
  featuredTournament = TOURNAMENTS[0];
  sorteoDate = '2027-04-28T12:00:00';
  groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  gallery = GALLERY.slice(0, 6);
  sponsors = SPONSORS;
  trophyProvider = TROPHY_PROVIDER;

  topTeams = TEAMS.slice(0, 4);

  parallaxOffset = signal(0);

  failedGallery = new Set<string>();
  featuredTournamentImgFailed = false;

  onGalleryError(id: string): void {
    this.failedGallery.add(id);
  }

  onFeaturedTournamentImgError(): void {
    this.featuredTournamentImgFailed = true;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.parallaxOffset.set(window.scrollY);
  }
}

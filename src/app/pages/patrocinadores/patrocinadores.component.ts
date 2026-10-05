import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { Sponsor } from '../../core/models/content.model';
import { SPONSORS } from '../../core/data/content.mock';

@Component({
  selector: 'app-patrocinadores',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, RevealDirective],
  templateUrl: './patrocinadores.component.html',
  styleUrl: './patrocinadores.component.scss'
})
export class PatrocinadoresComponent {
  i18n = inject(LanguageService);
  tiers: Sponsor['tier'][] = ['Oro', 'Plata', 'Bronce'];
  sponsors = SPONSORS;

  titleSponsor = SPONSORS[0] as Sponsor | undefined;
  otherSponsors = SPONSORS.slice(1);

  byTier(tier: Sponsor['tier']): Sponsor[] {
    return this.otherSponsors.filter((s) => s.tier === tier);
  }

  initials(name: string): string {
    return name
      .split(/[\s·]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  }
}

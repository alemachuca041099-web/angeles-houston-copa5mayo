import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Sponsor } from '../../../core/models/content.model';

@Component({
  selector: 'app-sponsor-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsor-marquee.component.html',
  styleUrl: './sponsor-marquee.component.scss'
})
export class SponsorMarqueeComponent {
  @Input({ required: true }) sponsors: Sponsor[] = [];

  get loopSponsors(): Sponsor[] {
    return [...this.sponsors, ...this.sponsors];
  }
}

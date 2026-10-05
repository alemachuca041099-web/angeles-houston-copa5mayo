import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Team } from '../../../core/models/team.model';

@Component({
  selector: 'app-team-crest',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="crest"
      [style.--size.px]="size"
      [style.background]="'linear-gradient(145deg, ' + team.colorPrimary + ', ' + team.colorSecondary + ')'"
    >
      <span>{{ team.initials }}</span>
    </div>
  `,
  styles: [`
    .crest {
      width: var(--size);
      height: var(--size);
      flex-shrink: 0;
      display: grid;
      place-items: center;
      clip-path: polygon(50% 0%, 100% 22%, 100% 72%, 50% 100%, 0% 72%, 0% 22%);
      border: 2px solid rgba(212, 175, 55, 0.55);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
    }
    span {
      font-family: var(--font-display);
      color: #fff;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
      font-size: calc(var(--size) * 0.34);
      letter-spacing: 0.02em;
    }
  `]
})
export class TeamCrestComponent {
  @Input({ required: true }) team!: Team;
  @Input() size = 84;
}

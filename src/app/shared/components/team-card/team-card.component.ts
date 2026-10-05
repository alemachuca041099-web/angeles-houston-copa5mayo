import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, inject } from '@angular/core';
import { Team } from '../../../core/models/team.model';
import { TeamCrestComponent } from '../team-crest/team-crest.component';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule, TeamCrestComponent],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss',
  host: {
    '(mousemove)': 'onMouseMove($event)',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class TeamCardComponent {
  private readonly el = inject(ElementRef<HTMLElement>);

  @Input({ required: true }) team!: Team;
  @Input() rank?: number;

  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 16;
    const rotateX = y * -16;
    this.el.nativeElement.style.setProperty('--rx', `${rotateX}deg`);
    this.el.nativeElement.style.setProperty('--ry', `${rotateY}deg`);
  }

  onMouseLeave(): void {
    this.el.nativeElement.style.setProperty('--rx', `0deg`);
    this.el.nativeElement.style.setProperty('--ry', `0deg`);
  }
}

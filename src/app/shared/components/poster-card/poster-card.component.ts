import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poster-card.component.html',
  styleUrl: './poster-card.component.scss'
})
export class PosterCardComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) competition!: string;
  @Input({ required: true }) tag!: string;
  @Input() badge?: string;
  @Input() featured = false;

  imgFailed = false;

  onImgError(): void {
    this.imgFailed = true;
  }
}

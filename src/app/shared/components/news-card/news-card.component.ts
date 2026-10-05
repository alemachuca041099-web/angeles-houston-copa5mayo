import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NewsItem } from '../../../core/models/content.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input({ required: true }) news!: NewsItem;
  @Input() large = false;

  imgFailed = false;

  onImgError(): void {
    this.imgFailed = true;
  }
}

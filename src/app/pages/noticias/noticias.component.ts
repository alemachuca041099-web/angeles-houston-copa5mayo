import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { NewsCardComponent } from '../../shared/components/news-card/news-card.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { NEWS } from '../../core/data/content.mock';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, NewsCardComponent, RevealDirective],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  news = NEWS;
}

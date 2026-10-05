import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { GalleryItem } from '../../core/models/content.model';
import { GALLERY } from '../../core/data/content.mock';

const PAGE_SIZE = 8;

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RevealDirective],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  i18n = inject(LanguageService);
  lightboxItem = signal<GalleryItem | null>(null);

  gallery = GALLERY;
  failedItems = new Set<string>();

  visibleCount = signal(PAGE_SIZE);

  visibleItems = computed(() => this.gallery.slice(0, this.visibleCount()));
  hasMore = computed(() => this.visibleCount() < this.gallery.length);

  loadMore(): void {
    this.visibleCount.update((v) => v + PAGE_SIZE);
  }

  onImgError(id: string): void {
    this.failedItems.add(id);
  }

  open(item: GalleryItem): void {
    if (this.failedItems.has(item.id)) return;
    this.lightboxItem.set(item);
  }

  close(): void {
    this.lightboxItem.set(null);
  }
}

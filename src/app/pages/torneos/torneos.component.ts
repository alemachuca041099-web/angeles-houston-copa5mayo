import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';
import { TOURNAMENTS } from '../../core/data/content.mock';

@Component({
  selector: 'app-torneos',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RevealDirective],
  templateUrl: './torneos.component.html',
  styleUrl: './torneos.component.scss'
})
export class TorneosComponent {
  i18n = inject(LanguageService);
  tournaments = TOURNAMENTS;
  failedImages = new Set<string>();

  statusClass(status: string): string {
    return 'status--' + status.toLowerCase().replace(/\s+/g, '-');
  }

  onImgError(id: string): void {
    this.failedImages.add(id);
  }
}

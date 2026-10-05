import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent, RevealDirective],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  i18n = inject(LanguageService);
  groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  slots = [1, 2, 3, 4];
}

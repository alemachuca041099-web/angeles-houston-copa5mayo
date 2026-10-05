import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../../core/i18n/language.service';
import { CHAT_WHATSAPP_LINK, FAQS } from '../../../core/data/faq.mock';
import { FaqItem } from '../../../core/models/faq.model';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss'
})
export class ChatWidgetComponent {
  i18n = inject(LanguageService);

  isOpen = signal(false);
  hasInteracted = signal(false);
  scrolledPastHero = signal(false);
  input = signal('');
  messages = signal<ChatMessage[]>([]);

  whatsappLink = CHAT_WHATSAPP_LINK;
  quickQuestions = FAQS;

  @ViewChild('scrollArea') scrollArea?: ElementRef<HTMLDivElement>;

  private teaserTimerStarted = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const pastHero = window.scrollY > 500;
    this.scrolledPastHero.set(pastHero);

    if (pastHero && !this.teaserTimerStarted) {
      this.teaserTimerStarted = true;
      setTimeout(() => this.hasInteracted.set(true), 4000);
    }
  }

  toggle(): void {
    this.hasInteracted.set(true);
    this.isOpen.update((v) => !v);
    if (this.isOpen() && this.messages().length === 0) {
      this.messages.set([{ from: 'bot', text: this.i18n.t('chat.greeting') }]);
    }
  }

  dismissTeaser(event: Event): void {
    event.stopPropagation();
    this.hasInteracted.set(true);
  }

  reset(): void {
    this.messages.set([{ from: 'bot', text: this.i18n.t('chat.greeting') }]);
    this.input.set('');
  }

  send(): void {
    const message = this.input().trim();
    if (!message) return;

    const whatsappHref = `${this.whatsappLink}?text=${encodeURIComponent(message)}`;
    window.open(whatsappHref, '_blank', 'noopener');
    this.input.set('');
  }

  askQuick(faq: FaqItem): void {
    const question = this.i18n.pick(faq.question, faq.questionEn);
    const answer = this.i18n.pick(faq.answer, faq.answerEn);

    this.messages.update((m) => [...m, { from: 'user', text: question }]);
    this.scrollToBottom();

    setTimeout(() => {
      this.messages.update((m) => [...m, { from: 'bot', text: answer }]);
      this.scrollToBottom();
    }, 400);
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const el = this.scrollArea?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }
}

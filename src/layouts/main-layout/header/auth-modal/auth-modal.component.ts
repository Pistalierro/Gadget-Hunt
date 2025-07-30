import {Component, HostListener, inject, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {UiService} from '../../../../shared/services/ui.service';


@Component({
  selector: 'app-auth-modal',
  imports: [
    NgIf
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {

  activeTab = signal<'login' | 'register'>('login');

  ui = inject(UiService);

  get showModal(): boolean {
    return this.ui.isAuthModalOpen();
  }

  get currentTab() {
    return this.activeTab();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(e: KeyboardEvent) {
    if (this.showModal) {
      this.ui.closeAuthModal();
    }
  }


  close(): void {
    this.ui.closeAuthModal();
  }

  switchTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
  }

  handleActionClick(): void {
    this.ui.closeAuthModal();
  }

  handleBackdropClick(): void {
    this.ui.closeAuthModal();
  }
}

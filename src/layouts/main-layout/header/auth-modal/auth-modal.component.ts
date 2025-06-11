import {Component, signal} from '@angular/core';
import {NgIf} from '@angular/common';

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
  isOpen = signal<boolean>(false);

  get showModal(): boolean {
    return this.isOpen();
  }

  get currentTab() {
    return this.activeTab();
  }

  open(): void {
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }

  switchTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
  }

  handleActionClick(): void {
    this.close();
  }
}

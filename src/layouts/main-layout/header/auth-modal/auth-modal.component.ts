import {Component, EventEmitter, Output, signal} from '@angular/core';
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

  @Output() close = new EventEmitter<void>();

  activeTab = signal<'login' | 'register'>('login');

  switchTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
  }

  handleActionClick() {
    this.close.emit();
  }
}

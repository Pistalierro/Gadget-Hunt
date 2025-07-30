import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private _isMenuOpen = signal<boolean>(false);
  isMenuOpen = this._isMenuOpen.asReadonly();

  private _isCatalogOpen = signal<boolean>(false);
  isCatalogOpen = this._isCatalogOpen.asReadonly();

  private _isAuthModalOpen = signal<boolean>(false);
  isAuthModalOpen = this._isAuthModalOpen.asReadonly();

  toggleMenu(): void {
    this._isMenuOpen.update(open => !open);
    console.log('Menu is now', this.isMenuOpen());
  }

  toggleCatalog(): void {
    this._isCatalogOpen.update(open => !open);
    console.log('Каталог открыт?', this.isCatalogOpen());
  }

  openAuthModal(): void {
    this._isAuthModalOpen.set(true);
  }

  closeAuthModal(): void {
    this._isAuthModalOpen.set(false);
  }

  toggleAuthModal(): void {
    this._isAuthModalOpen.update(open => !open);
    console.log('Модалка аутентификации открыта?', this.isAuthModalOpen());
  }
}

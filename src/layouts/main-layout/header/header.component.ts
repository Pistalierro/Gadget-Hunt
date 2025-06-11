import {Component, inject, signal} from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {LangSwitcherComponent} from './lang-switcher/lang-switcher.component';
import {AuthModalComponent} from './auth-modal/auth-modal.component';
import {BasketComponent} from './basket/basket.component';

@Component({
  selector: 'app-header',
  imports: [
    SearchBarComponent,
    LangSwitcherComponent,
    TranslatePipe,
    AuthModalComponent,
    BasketComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMenuOpen = signal<boolean>(false);
  isCatalogOpen = signal<boolean>(false);
  showAuthModal = signal<boolean>(false);

  translate = inject(TranslateService);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
    console.log('Menu is now', this.isMenuOpen());
  }

  toggleCatalog(): void {
    this.isCatalogOpen.update(open => !open);
    console.log('Каталог открыт?', this.isCatalogOpen());
  }

  openAuthModal(): void {
    this.showAuthModal.set(true);
  }

  closeAuthModal(): void {
    this.showAuthModal.set(false);
  }

}

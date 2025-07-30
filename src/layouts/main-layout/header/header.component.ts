import {Component, inject} from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {LangSwitcherComponent} from './lang-switcher/lang-switcher.component';
import {AuthModalComponent} from './auth-modal/auth-modal.component';
import {BasketComponent} from './basket/basket.component';
import {UiService} from '../../../shared/services/ui.service';

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

  ui = inject(UiService);
  translate = inject(TranslateService);

}

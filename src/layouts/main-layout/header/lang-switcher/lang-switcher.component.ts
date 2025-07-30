import {Component, inject, signal} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-lang-switcher',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.scss'
})
export class LangSwitcherComponent {

  translate = inject(TranslateService);

  currentLang = signal(this.translate.currentLang || this.translate.getDefaultLang());

  languages = [
    {code: 'ua', icon: '/image/flags_svg/ua.svg', name: 'Українська'},
    {code: 'en', icon: '/image/flags_svg/gb.svg', name: 'English'}
  ];

  showDropdown = signal<boolean>(false);

  toggleDropdown(): void {
    this.showDropdown.update(v => !v);
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    this.currentLang.set(lang);
    this.showDropdown.set(false);
  }

  getLangLabel(langCode: string): string {
    return this.languages.find(l => l.code === langCode)?.icon || '🌐';
  }
}

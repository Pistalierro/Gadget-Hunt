import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStore} from '@ngx-translate/core';
import {APP_INITIALIZER, EnvironmentProviders, importProvidersFrom, makeEnvironmentProviders} from '@angular/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function initTranslate(translate: TranslateService) {
  return () => {
    const availableLang = ['ua', 'en'];
    translate.addLangs(availableLang);
    translate.setDefaultLang('ua');

    const savedLang = localStorage.getItem('lang');
    const browserLang = translate.getBrowserLang();

    const langToUse = savedLang || browserLang || 'ua';
    translate.use(availableLang.includes(langToUse) ? langToUse : 'ua');
  };
}

export function provideTranslate(): EnvironmentProviders {
  return makeEnvironmentProviders([
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        }
      })
    ),
    TranslateStore,
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslate,
      deps: [TranslateService],
      multi: true
    }
  ]);
}

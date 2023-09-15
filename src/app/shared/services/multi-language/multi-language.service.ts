import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultiLanguageService {
  _localeEvent$ = new Subject<string>();

  get localeEvent$() {
    return this._localeEvent$;
  }

  constructor(private translate: TranslateService) {}

  changeLocale(locale: string) {
    this.translate.use(locale);
    this._localeEvent$.next(this.getCurrentLanguage());
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

  getLanguages() {
    return this.translate.getLangs();
  }
}

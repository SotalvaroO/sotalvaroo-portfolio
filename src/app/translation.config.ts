import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { firstValueFrom } from 'rxjs';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

export function ApplicationInitializerFactory(
  translate: TranslateService,
  injector: Injector
) {
  return async () => {
    await injector.get(LOCATION_INITIALIZED, Promise.resolve(null));

    const deaultLang = 'es';
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang(deaultLang);
    try {
      await firstValueFrom(translate.use(deaultLang));
    } catch (err) {
      console.log(err);
    }
    console.log(`Successfully initialized ${deaultLang} language.`);
  };
}

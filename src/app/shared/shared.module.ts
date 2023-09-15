import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  LangChangeEvent,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedRoutingModule } from './shared-routing.module';

const COMPONENTS = [
  NavBarComponent,
  FooterComponent,
  HomeComponent,
  NotFoundComponent,
];
const SHARED_MODULES = [CommonModule, FormsModule, SharedRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...SHARED_MODULES, TranslateModule.forChild()],
  exports: [...COMPONENTS, ...SHARED_MODULES],
})
export class SharedModule {
  constructor(public translationService: TranslateService) {
    this.translationService.store.onLangChange.subscribe(
      (lang: LangChangeEvent) => {
        console.log(' ==> FeatureModule ', lang);
        this.translationService.use(lang.lang);
      }
    );
  }
}

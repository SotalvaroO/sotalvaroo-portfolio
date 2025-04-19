import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UiModule } from '../ui/ui.module';
import { NgIconsModule } from '@ng-icons/core';
import { octDownload } from '@ng-icons/octicons';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ContactComponent } from './components/sections/contact/contact.component';

const COMPONENTS = [
  NavBarComponent,
  FooterComponent,
  HomeComponent,
  NotFoundComponent,
  SkillsComponent,
];
const SHARED_MODULES = [CommonModule, FormsModule, SharedRoutingModule];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HeroComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    ...SHARED_MODULES,
    TranslateModule.forChild(),
    UiModule,
    NgIconsModule.withIcons({ octDownload }),
  ],
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

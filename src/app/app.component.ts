import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sotalvaroo-portfolio';

  @HostBinding('class.dark')
  public darkMode: boolean = false;

  constructor(private translate: TranslateService, private themeService: ThemeService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    this.darkMode = this.themeService.mode;
    translate.use('es');
  }
}

import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sotalvaroo-portfolio';
  // darkMode: boolean = false;

  // @HostBinding('class.dark')
  // get mode(){
  //   this.darkMode = true;
  // }

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setDefaultLang('es');
    translate.use('es');
  }
}

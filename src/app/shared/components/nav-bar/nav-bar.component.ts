import { Component, OnInit } from '@angular/core';
import { MultiLanguageService } from '../../services/multi-language/multi-language.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  public selectedLanguage: string = 'es';
  public langList: string[] = [];

  constructor(
    private readonly _languageService: MultiLanguageService
  ) {}

  ngOnInit(): void {
    this.langList = this._languageService.getLanguages();
    this._languageService.localeEvent$.subscribe((resp) => {
      this.selectedLanguage = resp;
    });
  }
  onChange() {
    console.log(`language changed`, this.selectedLanguage);
    this._languageService.changeLocale(this.selectedLanguage);
  }

  navigate(destination:string){
    document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
  }
}

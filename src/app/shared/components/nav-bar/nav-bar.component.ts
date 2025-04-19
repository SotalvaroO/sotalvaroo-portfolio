import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MultiLanguageService } from '../../services/multi-language/multi-language.service';

interface LangProps {
  lang?: string;
  flag?: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  getFlag = (language: string): string => {
    const flags: { [key: string]: string } = {
      es: 'https://flagcdn.com/w40/co.png', // España
      en: 'https://flagcdn.com/w40/us.png', // EE.UU.
    };
    return flags[language] || 'https://flagcdn.com/w40/un.png';
  };

  selectLanguage(lang?: string) {
    this.selectedLanguage = lang ?? '';
    this.dropdownOpen = false;
    this.onLanguageChange();
  }

  @ViewChild('dropdownContainer') dropdownContainer!: ElementRef;
  public selectedLanguage: string = 'es';
  public selectedFlag: string = this.getFlag(this.selectedLanguage);
  public langList: LangProps[] = [];

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  constructor(private readonly _languageService: MultiLanguageService) {}

  ngOnInit(): void {
    this.langList = this._languageService.getLanguages().map((lang) => {
      return { lang: lang, flag: this.getFlag(lang) ?? '' };
    });
    this._languageService.localeEvent$.subscribe((resp) => {
      this.selectedLanguage = resp;
      this.selectedFlag = this.getFlag(this.selectedLanguage);
    });
  }

  onLanguageChange() {
    console.log(`language changed`, this.selectedLanguage);
    this._languageService.changeLocale(this.selectedLanguage);
  }

  navigate(destination: string) {
    document
      .getElementById(destination)
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.dropdownContainer &&
      !this.dropdownContainer.nativeElement.contains(event.target)
    ) {
      this.dropdownOpen = false;
    }
  }
}

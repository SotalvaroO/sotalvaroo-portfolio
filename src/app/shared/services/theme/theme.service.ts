import { HostBinding, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _darkMode: boolean = true;

  public get mode() {
    return this._darkMode;
  }

  public set mode(mode : boolean) {
    this._darkMode = mode;
  }
  

  constructor() { }
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  selectedLanguage: string;
  constructor(public translate: TranslateService) {
    this.selectedLanguage = translate.currentLang || 'es';
    translate.setDefaultLang('es');
    translate.use(this.selectedLanguage);
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
    document.documentElement.lang = lang;
  }
}

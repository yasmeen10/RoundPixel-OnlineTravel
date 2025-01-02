import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.css'],
})
export class LanguageButtonComponent {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    // Set default language to English
    this.currentLanguage = 'en';
    this.translate.setDefaultLang(this.currentLanguage);
  }

  toggleLanguage() {
    // Toggle between 'en' and 'ar'
    this.currentLanguage = this.currentLanguage === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLanguage);

    // Set direction for RTL or LTR
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
  }
}

import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventArabic]',
})
export class PreventArabicDirective {
  constructor() {}

  private arabicRegex = /[\u0600-\u06FF\u0750-\u077F]/;

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;

    if (this.arabicRegex.test(inputChar)) {
      event.preventDefault();
    }
  }
}

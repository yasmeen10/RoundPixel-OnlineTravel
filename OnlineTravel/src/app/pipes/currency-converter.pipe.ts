import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter',
  standalone: false, // Set to true if using standalone modules
})
export class CurrencyConverterPipe implements PipeTransform {
  private readonly conversionRates: Record<string, number> = {
    USD: 1, // Base rate
    EGP: 165.11,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.53,
    KWD: 0.3,
  };

  transform(value: number, targetCurrency: string): string {
    const convertedValue = value * this.conversionRates[targetCurrency];
    return `${convertedValue.toFixed(0)} ${targetCurrency}`;
  }
}

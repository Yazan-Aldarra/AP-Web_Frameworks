import { StringToken } from '@angular/compiler';
import { numberAttribute, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, moneyType = 'dollar'): string | null {

    if (typeof(value) === "undefined")
        return null;
    const symbol = this.getSymbol(moneyType)

    return symbol + value.toFixed(2);
  }
  getSymbol(nameSymbol: string): string {
    const symbols: { [k: string]: string } = {
      dollar: '$',
      euro: '€',
      pound: '£',
      yen: '¥',
    };
    return symbols[nameSymbol];
  }
}

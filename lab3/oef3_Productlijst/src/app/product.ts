import { CurrencyPipe, DatePipe, DecimalPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import localeNlBe from '@angular/common/locales/nl-BE';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [UpperCasePipe, CurrencyPipe, DecimalPipe, DatePipe, SlicePipe],
  template: `
    <ul>
      <li>
        {{ naam | uppercase | slice:0:5 }}
      </li>
      <li>
        {{ prijs | currency:'EUR':'symbol':'5.2-3':'nl-BE' }}
        <!-- Dit werkt niet! -->
        <!-- {{ prijs | number : '1.2-2' | currency:'EUR' }} -->
      </li>
      <li>
        {{ voorraad | currency:'EUR':'3.2-3' }}
      </li>
      <li>
        {{ toegevoegd | date : 'shortDate' }}
      </li>
    </ul>
  `,
  styles: ``,
})
export class Product implements OnInit{
  @Input() id = 0;
  @Input() prijs = 0;
  @Input() naam = '';
  @Input() voorraad = 0;
  @Input() toegevoegd: Date = new Date();

  ngOnInit(): void {
    registerLocaleData(localeNlBe);
  }
}

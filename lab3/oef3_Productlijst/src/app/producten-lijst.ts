import { Component } from '@angular/core';
import { Product } from './product';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-producten-lijst',
  imports: [Product, UpperCasePipe, LowerCasePipe ],
  template: `
    @for(prod of producten; track $index) {
      <app-product
        [id]="prod.id" 
        [prijs]="prod.prijs" 
        [naam]="prod.naam" 
        [voorraad]="prod.voorraad" 
        [toegevoegd]="prod.toegevoegd" 
      ></app-product>
    }
  `,
  styles: /*css*/`
    
  `,
})
export class ProductenLijst {
  producten = [
    {
      id: 1,
      naam: 'Laptop Pro',
      prijs: 1299.99,
      voorraad: 0.25,
      toegevoegd: new Date(2025, 0, 15),
    },
    {
      id: 2,
      naam: 'Mechanisch Toetsenbord',
      prijs: 139.5,
      voorraad: 0.6,
      toegevoegd: new Date(2025, 2, 3),
    },
    { id: 3, naam: 'USB-C Dock', prijs: 89, voorraad: 0.05, toegevoegd: new Date(2024, 10, 28) },
    {
      id: 4,
      naam: 'Noise-cancelling Koptelefoon',
      prijs: 299,
      voorraad: 0.8,
      toegevoegd: new Date(2025, 4, 1),
    },
  ];
}

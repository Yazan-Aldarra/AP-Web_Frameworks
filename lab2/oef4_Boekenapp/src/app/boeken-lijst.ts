import { Component } from '@angular/core';
import { BoekKaart } from './boek-kaart';

interface Boek {
  id: number,
  titel: string,
  auteur: string,
  genre: string
}

@Component({
  selector: 'app-boeken-lijst',
  imports: [BoekKaart],
  template: `
    @for (boek of boeken; track $index) {
    <app-boek-kaart
      [auteur]="boek.auteur"
      [title]="boek.titel"
      [genre]="boek.genre"
    ></app-boek-kaart>
    } @empty {
      <h2>nothing here bruv</h2>
     }
  `,
  styles: /*css*/ `
    :host {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 1rem;
    }
  `,
})
export class BoekenLijst {
  boeken = [
    { id: 1, titel: 'De Avonden', auteur: 'Gerard Reve', genre: 'Roman' },
    { id: 2, titel: 'Het Diner', auteur: 'Herman Koch', genre: 'Thriller' },
    { id: 3, titel: 'Oorlog en Vrede', auteur: 'Leo Tolstoj', genre: 'Klassieker' },
    { id: 4, titel: 'De kleine prins', auteur: 'Antoine de Saint-Exupéry', genre: 'Kinderboek' },
    {
      id: 5,
      titel: 'Harry Potter en de Steen der Wijzen',
      auteur: 'J.K.Rowling',
      genre: 'Fantasy',
    },
    { id: 6, titel: 'Nooit meer slapen', auteur: 'W.F. Hermans', genre: 'Roman' },
    { id: 7, titel: 'De Hobbit', auteur: 'J.R.R. Tolkien', genre: 'Fantasy' },
    { id: 8, titel: 'Max Havelaar', auteur: 'Multatuli', genre: 'Roman' },
  ];
}

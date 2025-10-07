import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boek-kaart',
  imports: [],
  template: `
    <h2>
      {{ title }}
    </h2>
    <h3>
      {{ auteur }}
    </h3>
    <h4>{{ genre }}</h4>
  `,
  styles: /*css*/`
    :host {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      padding: 1rem;
    }
  `,
})
export class BoekKaart {
  @Input() title = '';
  @Input() auteur = '';
  @Input() genre = '';
}

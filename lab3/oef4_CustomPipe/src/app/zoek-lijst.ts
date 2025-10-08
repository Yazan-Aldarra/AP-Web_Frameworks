import { Component, OnInit } from '@angular/core';
import { FilterPipe } from './filter-pipe';
import { discardPeriodicTasks } from '@angular/core/testing';
import { zip } from 'rxjs';
import { StringToken } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { MoneyPipe } from './money-pipe';

@Component({
  selector: 'app-zoek-lijst',
  imports: [FilterPipe, FormsModule, MoneyPipe],
  template: `
    @for (item of (items | filter:zoekterm:'author'); track item.id) {
    <p>
      {{ item.titel + ' ' + item.author }}
    </p>
    } @empty {
    <p>Geen resultaten</p>
    }
    <input type="text" name="" [(ngModel)]="zoekterm" />

    @for (number of numbers; track $index) {
    <div>
      {{ number | money : 'yen' }}
    </div>
    }
  `,
  styles: ``,
})
export class ZoekLijst implements OnInit {
  items = [
    { id: 1, titel: 'Angular voor Starters', author: 'Alice' },
    { id: 2, titel: 'Professioneel TypeScript', author: 'Bob' },
    { id: 3, titel: 'Websecurity Basis', author: 'Ahmed' },
    { id: 4, titel: 'Frontend Patterns', author: 'Something' },
    { id: 5, titel: 'Reactive Forms in de Praktijk', author: 'Someone' },
  ];
  zoekterm = '';

  numbers = [125.5, 49.99, 300, 875.75, 22.1, 940, 1500.49, 72.3, 610.05, 5];

  ngOnInit(): void {}
}

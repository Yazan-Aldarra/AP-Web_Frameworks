import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceptenLijst } from './recepten-lijst/recepten-lijst';

@Component({
  selector: 'app-root',
  imports: [ReceptenLijst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef1_Receptenapp');

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoekenLijst } from './boeken-lijst';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BoekenLijst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef4_Boekenapp');
}

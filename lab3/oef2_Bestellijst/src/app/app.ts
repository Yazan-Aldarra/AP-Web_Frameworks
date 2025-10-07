import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bestelling } from './bestelling';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bestelling],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef2_Bestellijst');
}

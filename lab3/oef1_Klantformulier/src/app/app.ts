import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KlantForm } from './klant-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KlantForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef1_Klantformulier');
}

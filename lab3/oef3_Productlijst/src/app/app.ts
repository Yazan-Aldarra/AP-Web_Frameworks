import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product';
import { ProductenLijst } from './producten-lijst';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductenLijst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef3_Productlijst');
}

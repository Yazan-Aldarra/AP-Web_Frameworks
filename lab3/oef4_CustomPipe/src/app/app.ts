import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZoekLijst } from './zoek-lijst';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ZoekLijst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'oef4_CustomPipe';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Comp1 } from './comp1/comp1';
import { Comp3 } from './comp3/comp3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header, Comp1, Comp3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('opdr2');
}

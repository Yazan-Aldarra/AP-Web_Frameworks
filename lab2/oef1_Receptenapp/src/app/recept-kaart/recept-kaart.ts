import { Component, Input } from '@angular/core';
import { Label } from '../label/label';

@Component({
  selector: 'app-recept-kaart',
  imports: [Label],
  templateUrl: './recept-kaart.html',
  styleUrl: './recept-kaart.css'
})
export class ReceptKaart {
  @Input() name: string = "";
  @Input() id: number = 0;
  @Input() time: number = 0;
  @Input() labels: string[] = [];

}

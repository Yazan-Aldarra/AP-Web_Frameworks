import { Component } from '@angular/core';
import { ReceptKaart } from '../recept-kaart/recept-kaart';
import { Label } from '../label/label';
import { recepten } from '../../../data';

@Component({
  selector: 'app-recepten-lijst',
  imports: [ReceptKaart],
  templateUrl: './recepten-lijst.html',
  styleUrl: './recepten-lijst.css'
})
export class ReceptenLijst {
  recepten = recepten;
}

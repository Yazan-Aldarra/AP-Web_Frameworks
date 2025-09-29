import { Component } from '@angular/core';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-comp3',
  imports: [],
  templateUrl: './comp3.html',
  styleUrl: './comp3.css'
})
export class Comp3 {
  personen = [
  { naam: "Anna", leeftijd: 25, beroep: "Designer" },
  { naam: "Bram", leeftijd: 32, beroep: "Programmeur" },
  { naam: "Clara", leeftijd: 28, beroep: "Dokter" },
  { naam: "Daan", leeftijd: 40, beroep: "Leraar" },
  { naam: "Eva", leeftijd: 22, beroep: "Student" }
  ];

}

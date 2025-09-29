import { Component } from '@angular/core';
import { Comp2 } from '../comp2/comp2';
import { Tag } from '../tag/tag';

@Component({
  selector: 'app-comp1',
  imports: [Comp2, Tag],
  templateUrl: './comp1.html',
  styleUrl: './comp1.css'
})
export class Comp1 {
  
}

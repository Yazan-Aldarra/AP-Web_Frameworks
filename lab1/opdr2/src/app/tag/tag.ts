import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.css'
})
export class Tag {
  @Input() bgColor = 'tomato';
  @Input() context = 'NoContext';
}

import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
  questions = [
    { id: 1, question: 'Wat is 2 + 2?', answer: '4' },
    { id: 2, question: 'Hoofdstad van België?', answer: 'Brussel' },
    { id: 3, question: 'Welke kleur krijg je door blauw + geel te mengen?', answer: 'Groen' },
    { id: 4, question: 'Wat is 10 gedeeld door 2?', answer: '5' },
  ];
  currQuest = this.questions.length-1;
  inAnswer: string = '';
  ansState: boolean | undefined = undefined;
  score: number = 0;

  checkAnswer() {
    if (this.inAnswer == this.questions[this.currQuest].answer) {
      this.score++;
      this.currQuest--;
      this.ansState = true;
    } else  {
      this.score--;
      this.ansState = false;
    }
  }
}

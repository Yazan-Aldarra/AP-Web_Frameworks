import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [Task, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('oef2');
}

import { Component } from '@angular/core';
import { Task } from '../task/task';
import { FormsModule } from '@angular/forms';

interface iTask {
  id: number,
  name: string,
}

@Component({
  selector: 'app-task-list',
  imports: [Task, FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})

export class TaskList {
  inName = "";

  tasks: iTask[] = [
    {
      id: 1,
      name: "potato"
    },
    {
      id: 2,
      name: "something"
    }
  ]; 

  addTask() {
    const newTask: iTask = { 
      id: this.tasks.length+1,
      name: this.inName,
    }
    this.tasks.push(newTask);
    this.inName = "";
  }
  verwijderTask(task: iTask) {
    this.tasks.splice(this.tasks.findIndex(el => el.id = task.id), 1); 
  }
}

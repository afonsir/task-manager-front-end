import { Component, OnInit } from '@angular/core'

import { Task } from "./shared/task.model";

const tasks: Task[] = [
  { id: 1, title: "Task 1" },
  { id: 2, title: "Task 2" },
  { id: 3, title: "Task 3" },
  { id: 4, title: "Task 4" },
  { id: 5, title: "Task 5" },
  { id: 6, title: "Task 6" },
  { id: 7, title: "Task 7" },
  { id: 8, title: "Task 8" },
  { id: 9, title: "Task 9" }
];

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponents implements OnInit {
  public tasks: Task[];
  public selectedTask: Task;

  ngOnInit(): void {
    this.tasks = tasks;
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

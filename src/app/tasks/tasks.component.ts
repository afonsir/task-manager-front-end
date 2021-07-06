import { Component, OnInit } from '@angular/core'

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service'

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  providers: [ TaskService ]
})
export class TasksComponents implements OnInit {
  public tasks: Task[]
  public selectedTask: Task

  public constructor(private taskService: TaskService) {
  }

  public ngOnInit(): void {
    this.taskService.getTasks().then((tasks) => this.tasks = tasks);
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

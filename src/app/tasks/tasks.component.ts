import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit{
  // tasks to be shown
  tasks: Task[] = []

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks()
  }

  ngOnInit(): void {
    // now here we should subscribe to the observer to keep up with updates
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    })
  }

  getTasks() {
    this.tasks = [...this.taskService.getTasks()]
  }

  // edit task
  editTask(title: string) {
    if(!title.trim()){
      return
    }


  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id);

    // update the tasks list
    this.getTasks()
    console.log("delete ", this.taskService.getTasks());

  }
}

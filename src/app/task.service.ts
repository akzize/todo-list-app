import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private taskId: number = 0;

  // FOR SHARED SERVICE
  private taskSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.taskSubject.asObservable();

  constructor() {}

  getTask(id: number): Task {
    return this.tasks.filter((task) => task.id == id)[0];
  }

  getTasks() {
    return this.tasks;
  }

  addNewTask(title: string) {
    const newTask: Task = {
      id: this.taskId++,
      title: title,
      completed: false,
    };

    // add it to the list
    this.tasks.push(newTask);
    // emit the the updated tasks list
    this.emitTasks();
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id != id);

    // now we should Emit the updated list to all subscribers
    this.emitTasks();
  }

  emitTasks() {
    // emit the the updated tasks list
    this.taskSubject.next(this.tasks);
  }
}

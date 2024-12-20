import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title: string = ''

  constructor (private taskService: TaskService) {

  }

  addNewTask() {
    // check if the title is null or empty
    if (!this.title.trim()) {
      return
    }

    // add new task
    this.taskService.addNewTask(this.title);
    // reset the title value
    this.title = ''
    console.log(this.taskService.getTasks());

  }
}

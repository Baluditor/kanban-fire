import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from "./task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input()
  public task: Task | null = null;
  @Output()
  public edit = new EventEmitter<Task>();

}

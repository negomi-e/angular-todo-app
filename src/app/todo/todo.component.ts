import { Component } from '@angular/core';
import {ToDoDataService} from './to-do-data.service';

import { ToDoItem } from './ToDoItem';

@Component({
  selector: 'todoitem-form',
  templateUrl: './ToDoItem.component.html',
  styleUrls: ['./ToDoItem.component.css'],
  providers: [ToDoDataService]
})

export class ToDoItemComponent {
  newToDo: ToDoItem = new ToDoItem();

  constructor(private ToDoDataService : ToDoDataService){}

  addToDo() {
  this.ToDoDataService.addToDo(this.newToDo);
  this.newToDo = new ToDoItem();
}

toggleToDoComplete(todo) {
  this.ToDoDataService.toggleToDoComplete(todo);
}

removeToDo(todo) {
  this.ToDoDataService.deleteToDoById(todo.id);
}

get todos() {
  return this.ToDoDataService.getAllTodos();
}

  // model = new ToDoItem(1, 'cut grass');

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
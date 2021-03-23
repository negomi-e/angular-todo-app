import { Injectable } from '@angular/core';
import { ToDoItem } from './ToDoItem';

//CENTRALISE BUSINESS LOGIC HERE

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {
lastId: number = 0;

todos: ToDoItem[] = [];
  constructor() { }


// POST   /todos
addToDo(todo: ToDoItem): ToDoDataService {
  if(!todo.id){
    todo.id = ++this.lastId;
  }
  this.todos.push(todo);
  return this;
}

// DELETE ID   /todos/:id
deleteToDoById(id: number): ToDoDataService{
  this.todos = this.todos.filter(todo => todo.id !== id);
  return this;
}

// GET /todos
getAllTodos(): ToDoItem[]{
  return this.todos;
}

// PUT ID   /todos/:id
updateToDoById(id: number, values: Object = {}): ToDoItem{
  let todo = this.getToDoById(id);
  if(!todo){
    return null;
  }
  Object.assign(todo, values);
  return todo;
}

// GET      /todos/:id
getToDoById(id: number): ToDoItem{
  return this.todos.filter(todo => todo.id === id).pop();
}


// TOGGLE COMPLETED TODO
toggleToDoComplete(todo: ToDoItem){
  let updatedTodo = this.updateToDoById(todo.id, {complete: !todo.complete});
  return updatedTodo;
}
}
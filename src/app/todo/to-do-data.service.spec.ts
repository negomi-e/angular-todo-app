import { TestBed } from '@angular/core/testing';
import {ToDoItem} from './ToDoItem'
import { ToDoDataService } from './to-do-data.service';

describe('ToDoDataService', () => {
  let service: ToDoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', () => {
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should return all todos', () => {
      let todo1 = new ToDoItem({title: 'Nigel', complete: false});
      let todo2 = new ToDoItem({title: 'Iona', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', () => {
      let todo1 = new ToDoItem({title: 'Samantha', complete: false});
      let todo2 = new ToDoItem({title: 'Chris', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getToDoById(1)).toEqual(todo1);
      expect(service.getToDoById(2)).toEqual(todo2);
    });

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', () => {
      let todo1 = new ToDoItem({title: 'Jerome', complete: false});
      let todo2 = new ToDoItem({title: 'Helena', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteToDoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteToDoById(2);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should not removing anything if todo with corresponding id is not found', () => {
      let todo1 = new ToDoItem({title: 'Patricia', complete: false});
      let todo2 = new ToDoItem({title: 'Peter', complete: true});
      service.addToDo(todo1);
      service.addToDo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteToDoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', () => {
      let todo = new ToDoItem({title: 'Angie', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateToDoById(1, {
        item: 'Angus'
      });
      expect(updatedTodo.item).toEqual('Angus');
    });

    it('should return null if todo is not found', () => {
      let todo = new ToDoItem({title: 'Beatrice', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.updateToDoById(2, {
        title: 'Barry'
      });
      expect(updatedTodo).toEqual(null);
    });

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', () => {
      let todo = new ToDoItem({title: 'Charlie', complete: false});
      service.addToDo(todo);
      let updatedTodo = service.toggleToDoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleToDoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    });

  });
});

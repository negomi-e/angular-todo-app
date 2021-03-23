import { ToDoItem } from './ToDoItem';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new ToDoItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new ToDoItem({
      item: 'hello',
      complete: true
    });
    expect(todo.item).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
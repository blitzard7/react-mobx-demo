import { action, makeObservable, observable } from "mobx";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  addTodo(title: string) {
    const todoItem: TodoItem = {
      title,
      id: +Math.random().toFixed(3),
      completed: false,
    };

    this.todos.push(todoItem);
  }
}

export const TodoStore = new TodoStoreImpl();

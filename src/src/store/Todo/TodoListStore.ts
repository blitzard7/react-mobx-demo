import { makeAutoObservable } from "mobx";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";

export class TodoStoreImpl {
  todos: TodoItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get remainingTodos() {
    return this.todos.filter((item) => !item.completed).length;
  }

  get finishedTodos() {
    return this.todos.filter((item) => item.completed).length;
  }

  get todosCount() {
    return this.todos.length;
  }

  addTodo(title: string) {
    const todoItem: TodoItem = {
      title,
      id: +Math.random().toFixed(3),
      completed: false,
    };

    this.todos.push(todoItem);
  }

  toggleTodo(checkedTodo: TodoItem) {
    const foundTodoItem = this.todos.find((item) => item.id === checkedTodo.id);
    foundTodoItem!.completed = !checkedTodo.completed;
  }

  deleteTodo(todoItem: TodoItem) {
    const indexOfTodo = this.todos.findIndex((item) => item.id === todoItem.id);
    if (indexOfTodo !== -1) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
}

export const TodoStore = new TodoStoreImpl();

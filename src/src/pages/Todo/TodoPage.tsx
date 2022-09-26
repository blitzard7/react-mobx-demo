import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import TodoForm from "../../components/Todo/TodoForm";
import { TodoList } from "../../components/Todo/TodoList";
import { TodoContext } from "../../contexts/Todo/TodoContext";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";
import "./TodoPage.css";

const TodoPage = observer(() => {
  const todoStore = useContext(TodoContext);

  const handleOnAddTodo = (inputValue: string) => {
    if (inputValue) {
      todoStore.addTodo(inputValue);
    }
  };

  const handleToggleTodo = (todoItem: TodoItem) => {
    todoStore.toggleTodo(todoItem);
  };

  const handleOnItemDelete = (todoItem: TodoItem) => {
    todoStore.deleteTodo(todoItem);
  };
  return (
    <div className="todo-page-container">
      <header>
        <h1>Todo App with MobX</h1>
      </header>
      <div className="todo-container">
        <TodoForm onAddTodo={handleOnAddTodo} />
        <TodoList onDelete={handleOnItemDelete} onToggle={handleToggleTodo} />
      </div>
    </div>
  );
});

export default TodoPage;

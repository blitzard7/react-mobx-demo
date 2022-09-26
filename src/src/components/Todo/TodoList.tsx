import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { TodoContext } from "../../contexts/Todo/TodoContext";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";
import TodoElement from "./TodoElement";
import "./todolist.scss";

interface TodoListProps {
  onDelete: (todoItem: TodoItem) => void;
  onToggle: (todoItem: TodoItem) => void;
}

export const TodoList = observer(({ onDelete, onToggle }: TodoListProps) => {
  const todoStore = useContext(TodoContext);
  return (
    <div className="todo-list-container">
      <div className="todo-status-container">
        <label>amount: {todoStore.todosCount} </label>
        <label>open: {todoStore.remainingTodos}</label>
        <label>closed: {todoStore.finishedTodos}</label>
      </div>
      <div className="todo-elements">
        {todoStore.todos.map((todo, i) => {
          return (
            <TodoElement
              onDelete={onDelete}
              onCheck={onToggle}
              key={i}
              todoItem={todo}
            />
          );
        })}
      </div>
    </div>
  );
});

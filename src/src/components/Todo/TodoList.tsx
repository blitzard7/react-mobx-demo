import { observer } from "mobx-react";
import React, { useState } from "react";
import { TodoStoreImpl } from "../../store/Todo/TodoListStore";
import TodoElement from "./TodoElement";
import "./todolist.scss";

interface TodoListProps {
  todoStore: TodoStoreImpl;
}

export const TodoList = observer(({ todoStore }: TodoListProps) => {
  const [todoInputValue, setTodoInputValue] = useState("");
  const handleOnAddTodo = () => {
    if (todoInputValue) {
      todoStore.addTodo(todoInputValue);
      console.log("click");
    }
  };
  return (
    <div className="todo-list-container">
      <div className="todo-input-container">
        <input
          id="todoInput"
          className="todo-input"
          type="text"
          placeholder="Add todo item"
          value={todoInputValue}
          onChange={(e) => {
            setTodoInputValue(e.target.value);
          }}
        />
        <button className="btn" onClick={handleOnAddTodo} type="submit">
          Add
        </button>
      </div>
      <div className="todo-elements">
        {todoStore.todos.map((todo, i) => {
          return <TodoElement key={i} {...todo} />;
        })}
      </div>
    </div>
  );
});

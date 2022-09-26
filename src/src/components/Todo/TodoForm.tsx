import React, { useState } from "react";

interface TodoFormProps {
  onAddTodo: (todoTitle: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState("");
  const handleOnClick = () => {
    onAddTodo(inputValue);
  };

  return (
    <div className="todo-input-container">
      <input
        id="todoInput"
        className="todo-input"
        type="text"
        placeholder="Add todo item"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="btn" onClick={handleOnClick} type="submit">
        Add
      </button>
    </div>
  );
}

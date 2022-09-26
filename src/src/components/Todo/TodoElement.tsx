import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";

interface TodoElementProps {
  todoItem: TodoItem;
  onCheck: (item: TodoItem) => void;
  onDelete: (item: TodoItem) => void;
}

export default function TodoElement(props: TodoElementProps) {
  const { todoItem, onCheck, onDelete } = props;
  return (
    <div className="todo-element">
      <input onClick={() => onCheck(todoItem)} type="checkbox" />
      <label>{todoItem.title}</label>
      <FontAwesomeIcon
        onClick={() => onDelete(todoItem)}
        className="delete-icon"
        icon={faTrash}
      />
    </div>
  );
}

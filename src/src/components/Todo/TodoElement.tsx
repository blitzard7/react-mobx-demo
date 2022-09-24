import React from "react";
import { TodoItem } from "../../interfaces/Todo/Todo.interface";

export default function TodoElement(props: TodoItem) {
  return (
    <>
      <input type="checkbox" />
      <label>{props.title}</label>
    </>
  );
}

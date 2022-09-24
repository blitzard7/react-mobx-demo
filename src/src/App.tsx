import React from "react";
import "./App.css";
import { TodoList } from "./components/Todo/TodoList";
import { TodoStore } from "./store/Todo/TodoListStore";

function App() {
  return (
    <div className="App">
      <TodoList todoStore={TodoStore} />
    </div>
  );
}

export default App;

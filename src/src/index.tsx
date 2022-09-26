import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TodoPage from "./pages/Todo/TodoPage";
import { TodoContext } from "./contexts/Todo/TodoContext";
import { TodoStore } from "./store/Todo/TodoListStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <TodoContext.Provider value={TodoStore}>
      <TodoPage />
    </TodoContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

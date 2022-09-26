import React, { createContext } from "react";
import { TodoStore, TodoStoreImpl } from "../../store/Todo/TodoListStore";

interface TodoProviderProps {
  children: JSX.Element;
}

export const TodoContext = createContext<TodoStoreImpl>(TodoStore);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const todoStore = TodoStore;

  return (
    <TodoContext.Provider value={todoStore}>{children}</TodoContext.Provider>
  );
};

export const useTodoStore = () => React.useContext(TodoContext);

import React, { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);

  const values = {
    todos,
    setTodos,
    addTodo,
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be call inside ToDoProvider component");
  }

  return context;
};

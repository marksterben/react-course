import React, { useState } from "react";

import Header from "../components/Header";
import Paper from "../components/Paper";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
  };

  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;

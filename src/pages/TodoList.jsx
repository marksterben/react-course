import React, { useState } from "react";

import Header from "../components/Header";
import Paper from "../components/Paper";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTodo = (value) => {
    const newTodos = [...todos, { text: value }];
    setTodos(newTodos);
  };

  const showFormToggle = () => setShowForm(!showForm);

  return (
    <Paper>
      <Header showFormToggle={showFormToggle} showForm={showForm} />
      <TodoForm addTodo={addTodo} showForm={showForm} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;

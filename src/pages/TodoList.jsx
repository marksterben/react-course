import React, { useState } from "react";

import Header from "../components/Header";
import Paper from "../components/Paper";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const showFormToggle = () => setShowForm(!showForm);

  const addTodo = (value) => {
    if (todos.length < 10) {
      const newTodos = [...todos, { text: value, isComplete: false }];
      setTodos(newTodos);
    } else {
      alert("Jumlah To Do maksimal adalah 10");
    }
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <Paper>
      <Header showFormToggle={showFormToggle} showForm={showForm} />
      <TodoForm addTodo={addTodo} showForm={showForm} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;

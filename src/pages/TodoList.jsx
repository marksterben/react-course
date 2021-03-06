import React, { useState } from "react";

import Header from "../components/header/Header";
import Paper from "../components/paper/Paper";
import TodoForm from "../components/todoform/TodoForm";
import Todos from "../components/todos/Todos";

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

  const clearTodos = () => !showForm && setTodos([]);

  return (
    <Paper>
      <Header
        showFormToggle={showFormToggle}
        showForm={showForm}
        clearTodos={clearTodos}
      />
      <TodoForm addTodo={addTodo} showForm={showForm} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;

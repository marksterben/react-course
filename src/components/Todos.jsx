import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar Bohong"
    },
    {
      text: "Belajar Nipu"
    },
    {
      text: "Belajar Sihir"
    }
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;

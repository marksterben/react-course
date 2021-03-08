import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            text={todo.text}
            isComplete={todo.isComplete}
            index={index}
            completeTodo={completeTodo}
          />
        );
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, isComplete: PropTypes.bool })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;

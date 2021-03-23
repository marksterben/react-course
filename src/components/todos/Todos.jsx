import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";

import styles from "./todos.module.css";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
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
      {todos.length === 0 && (
        <div className={styles.todoPlaceholderText}>
          Click "<span className={styles.addButtonPlaceholderText}>ADD</span>"
          to create your todo
        </div>
      )}
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

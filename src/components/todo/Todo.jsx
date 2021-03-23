import React from "react";
import PropTypes from "prop-types";

import styles from "./todo.module.css";

const Todo = ({ text, isComplete, index, completeTodo }) => {
  return (
    <div className={styles.todo} onClick={() => completeTodo(index)}>
      <span
        className={styles.todoText}
        style={{ textDecoration: isComplete ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  completeTodo: PropTypes.func.isRequired
};

export default Todo;

import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, isComplete, index, completeTodo }) => {
  return (
    <div className="todo" onClick={() => completeTodo(index)}>
      <span
        className="todo-text"
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

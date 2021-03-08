import PropTypes from "prop-types";
import React, { useState } from "react";

const TodoForm = ({ addTodo, showForm }) => {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("blank");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showForm) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={formSubmitHandler}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Submit</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
};

export default TodoForm;

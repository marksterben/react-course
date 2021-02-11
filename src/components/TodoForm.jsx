import PropTypes from "prop-types";
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("blank");
      return;
    }

    addTodo(value);

    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;

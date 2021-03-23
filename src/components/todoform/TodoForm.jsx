import PropTypes from "prop-types";
import React, { useState } from "react";

import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showForm }) => {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Tidak boleh kosong");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showForm) {
    return (
      <section className={styles.add}>
        <form className={styles.addForm} onSubmit={formSubmitHandler}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={(e) => {
              if (e.target.value.length > 40) {
                alert("Jumlah karakter maksimal 40");
                return;
              }
              setValue(e.target.value);
            }}
          />
          <button className={styles.addBtn}>Submit</button>
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

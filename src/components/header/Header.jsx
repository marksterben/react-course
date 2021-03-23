import PropTypes from "prop-types";
import React from "react";
import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showFormToggle, showForm, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button text={showForm ? "Close" : "Add"} onClick={showFormToggle} />
      <h1 className={styles.headerTitle}>todo list</h1>
      <Button text="Clear" color="red" onClick={clearTodos} align="right" />
    </section>
  );
};

Header.propTypes = {
  showFormToggle: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
};

export default Header;

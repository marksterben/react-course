import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";

const Header = ({ showFormToggle, showForm, clearTodos }) => {
  return (
    <section className="header">
      <Button text={showForm ? "Close" : "Add"} onClick={showFormToggle} />
      <h1 className="header-title">todo list</h1>
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

import PropTypes from "prop-types";
import React from "react";

const Header = ({ showFormToggle, showForm }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showFormToggle}>
        {showForm ? "Close" : "Add"}
      </button>
      <h1 className="header-title">todo list</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showFormToggle: PropTypes.func.isRequired,
  showForm: PropTypes.bool.isRequired
};

export default Header;

import PropTypes from "prop-types";
import React from "react";

const Header = ({ showFormToggle }) => {
  return (
    <section className="header">
      <button className="header-btn main-black-color" onClick={showFormToggle}>
        Add
      </button>
      <h1 className="header-title">todo list</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showFormToggle: PropTypes.func.isRequired
};

export default Header;

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./button.module.css";

const Button = ({ teks, onClick, color, align }) => {
  const className = cx(styles.headerBtn, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainRedColor]: color === "red",
    [styles.alignLeft]: align === "left",
    [styles.alignRight]: align === "right"
  });

  return (
    <button className={className} onClick={onClick}>
      {teks}
    </button>
  );
};

Button.defaultProps = {
  teks: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  teks: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;

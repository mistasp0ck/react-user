import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  const classes = "button " + props.className;
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>{props.children}</button>
  );
};

export default Button;

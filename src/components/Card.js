import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-inner"]}>{props.children}</div>
    </div>
  );
};

export default Card;

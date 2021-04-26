import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <div className={classes["card-inner"]}>{props.children}</div>
    </div>
  );
};

export default Card;

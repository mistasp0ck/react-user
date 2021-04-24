import React from "react";

import styles from "./Error.module.css";
import Modal from "./Modal";
import Card from "./Card";
import Button from "./Button";

const Error = (props) => {
  const buttonClickHandler = e => {
    e.preventDefault();
    console.log('button click!');
    props.onTriggerClose();
  }
  return (
    <Modal>
      <Card className={styles.error}>
      <div className={styles["error-title"]}>
          <h2>{props.title}</h2>
        </div>
        <div className={styles["error-body"]}>
          <p>{props.body}</p>
        </div>
        <div>
          <Button type="button" onClick={buttonClickHandler}>Okay</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Error;

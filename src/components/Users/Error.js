import React from "react";

import styles from "./Error.module.css";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Error = (props) => {

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
          <Button type="button" onClick={props.onTriggerClose}>Okay</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default Error;

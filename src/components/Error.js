import React from "react";

import styles from "./Error.module.css";
import Modal from "./Modal";
import Card from "./Card";

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
      </Card>
    </Modal>
  );
};

export default Error;

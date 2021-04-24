import React, { useState } from "react";

import styles from "./NewUserForm.module.css";
import Button from "./Button";
import Error from "./Error";

const NewUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    if (enteredName.trim().length > 0 || enteredAge.trim().length > 0) {
    } else {
      setIsValid(false);
    }

    if (isValid === true) {
      console.log(userData);
      props.onSaveUserData(userData);
      setEnteredName("");
      setEnteredAge("");
    }
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  let error = (
    <Error title="Invalid Input" body="Test Error"></Error>
  );
  return (
    <div>
      <form className={styles["form-control"]} onSubmit={submitHandler}>
        <div>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
      {!isValid && error}
    </div>
  );
};

export default NewUserForm;

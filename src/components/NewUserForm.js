import React, { useState } from "react";

import styles from "./NewUserForm.module.css";
import Button from "./Button";
import Error from "./Error";

const NewUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    if (enteredName.trim().length > 0 && enteredAge.trim().length > 0) {
      if (+enteredAge > 0) {
        saveUserData(userData);
      } else {
        setIsValid(false);
        setErrorMessage("Please enter a valid age (> 0).");
      }
    } else {
      setIsValid(false);
      setErrorMessage("Please enter a valid name and age (non-empty values).");
    }
  };
  const saveUserData = (userData) => {
    console.log(userData);
    props.onSaveUserData(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  const ageChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const closeErrorHandler = () => {
    console.log("we got a close event");
    setIsValid(true);
  };

  let error = (
    <Error
      title="Invalid Input"
      body={errorMessage}
      onTriggerClose={closeErrorHandler}
    ></Error>
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
            // type="number"
            // min="1"
            // step="1"
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

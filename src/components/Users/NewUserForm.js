import React, { useState } from "react";

import styles from "./NewUserForm.module.css";
import Button from "../UI/Button";
import Error from "./Error";

const NewUserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredName);
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid value for user and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    saveUserData(userData);
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      <form className={styles["form-control"]} onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
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
      {error && (
        <Error
          title={error.title}
          body={error.message}
          onTriggerClose={errorHandler}
        ></Error>
      )}
    </div>
  );
};

export default NewUserForm;

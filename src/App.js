import React, { useState } from "react";

import Card from "./components/Card";
import User from "./components/User";
import NewUserForm from "./components/NewUserForm";
import "./App.css";

const DUMMY_USERS = [
  {
    id: "123",
    name: "Tony Staffiero",
    age: 38,
  },
  {
    id: "321",
    name: "Bob Smith",
    age: 18,
  },
];

function App() {
  // add users state
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="App">
      <Card>
        <NewUserForm onSaveUserData={addUserHandler} />
      </Card>
      <Card>
        {users.map((user) => {
          return <User id={user.id} name={user.name} age={user.age} />;
        })}
      </Card>
    </div>
  );
}

export default App;

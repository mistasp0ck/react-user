import React, { useState } from "react";

import Card from "./components/UI/Card";
import User from "./components/Users/User";
import NewUserForm from "./components/Users/NewUserForm";
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
          return <User key={user.id} name={user.name} age={user.age} />;
        })}
      </Card>
    </div>
  );
}

export default App;

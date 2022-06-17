import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";

function App() {

  const [users, setUsers] = useState([]);

  function onAddHandler(userDetails) {
    setUsers((prevUser) => [...prevUser, userDetails]);
  }

  function onDeleteHandler(index) {
    setUsers((users) => {
      return users.filter((e, i) => {
        return i !== index;
      });
    });
  }

  return (
    <>
      <AddUser onAdd={onAddHandler} />
      {users.length && (
        <UserList
          users={users}
          setUsers={setUsers}
          onDelete={onDeleteHandler}
        />
      )}
    </>
  );
}

export default App;

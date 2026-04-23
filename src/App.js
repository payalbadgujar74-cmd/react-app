import React, { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import "./App.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container">
      <h1>React CRUD App</h1>

      <AddUser />
      <UserList setSelectedUser={setSelectedUser} />

      {selectedUser && (
        <EditUser user={selectedUser} setSelectedUser={setSelectedUser} />
      )}
    </div>
  );
}

export default App;
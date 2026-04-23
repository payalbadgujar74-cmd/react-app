import React, { useEffect, useState } from "react";

function UserList({ setSelectedUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button onClick={() => setSelectedUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
import React, { useState } from "react";

function EditUser({ user, setSelectedUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const updateUser = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: user.id,
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        alert("User Updated!");
        setSelectedUser(null);
      });
  };

  return (
    <form onSubmit={updateUser}>
      <h2>Edit User</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
import React, { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("User Added!");
        setName("");
        setEmail("");
      });
  };

  return (
    <form onSubmit={addUser}>
      <h2>Add User</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddUser;
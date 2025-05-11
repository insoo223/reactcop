/*
  File: UserForm.js
  Purpose: Find, Display and Edit user info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Sun. May 11, 2025
  Upated: 
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm() {
  const [user, setUser] = useState({ name: "", email: "" , mobile: ""});
  const [userId, setUserId] = useState("");
  const MGURI = 'https://2d84-118-39-108-176.ngrok-free.app';

  const handleSearch = () => {
    fetch(`{$MGURI}/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`{$MGURI}/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error updating user:", error));
  };

  return (
    <div>
      <h2>Find and Edit User</h2>
      <input type="text" placeholder="Enter user ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleSearch}>Find User</button>

      {user.name && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="mobile" value={user.mobile} onChange={handleChange} placeholder="Mobile" />
          <button type="submit">Save</button>
        </form>
      )}

      {user.name && (
        <div>
          <h3>Displaying User Info:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
        </div>
      )}
    </div>
  );
};

export default App;

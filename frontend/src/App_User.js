/*
  File: UserForm.js
  Purpose: Find, Display and Edit user info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Sun. May 11, 2025
  Upated: 
*/
import React, { useState } from 'react';
import axios from 'axios';

//function UserForm() {
function App() {
  const [searchName, setSearchName] = useState("");
  const [user, setUser] = useState({ name: "", email: "" , mobile: ""});

  const MGURI = 'https://635e-118-39-108-176.ngrok-free.app';

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MGURI}/users`, { 
      //const response = await axios.get(`${MGURI}/`, { 
		params: { name: searchName },  
		headers: { "ngrok-skip-browser-warning": "true" }  
	});
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${MGURI}/users/${user._id}`, 
      //const response = await axios.put(`${MGURI}/${user._id}`, 
		user, 
		{ headers: { "ngrok-skip-browser-warning": "true" } 
	});
      setUser(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Find, Edit & Display User</h2>
      <input type="text" placeholder="Enter name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
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
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobile}</p>
        </div>
      )}
    </div>
  );

};

export default App;

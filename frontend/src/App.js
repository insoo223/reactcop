/*
  File: ContactForm.js
  Purpose: Find, Display and Edit contact info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated: 
*/
import React, { useState } from 'react';
import axios from 'axios';

//function ContactForm() {
function App() {
  const [searchName, setSearchName] = useState("");
  const [contact, setContact] = useState({ name: "", email: "" , mobile: "", cate: "", update: ""});

  const MGURI = 'https://635e-118-39-108-176.ngrok-free.app';

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MGURI}/contacts`, { 
      //const response = await axios.get(`${MGURI}/`, { 
		params: { name: searchName },  
		headers: { "ngrok-skip-browser-warning": "true" }  
	});
      setContact(response.data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };


  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${MGURI}/contacts/${contact._id}`, 
      //const response = await axios.put(`${MGURI}/${contact._id}`, 
		contact, 
		{ headers: { "ngrok-skip-browser-warning": "true" } 
	});
      setContact(response.data);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div>
      <h2>Find, Edit & Display Contact</h2>
      <input type="text" placeholder="Enter name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
      <button onClick={handleSearch}>Find Contact</button>

      {contact.name && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={contact.name} onChange={handleChange} placeholder="Name" />
          <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
          <input type="text" name="mobile" value={contact.mobile} onChange={handleChange} placeholder="Mobile" />
          <input type="text" name="cate" value={contact.cate} onChange={handleChange} placeholder="Cate" />
          <input type="text" name="update" value={contact.update} onChange={handleChange} placeholder="Update" />
          <button type="submit">Save</button>
        </form>
      )}

      {contact.name && (
        <div>
          <h3>Displaying Contact Info:</h3>
          <p><strong>Name:</strong> {contact.name}</p>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Mobile:</strong> {contact.mobile}</p>
          <p><strong>Cate:</strong> {contact.cate}</p>
          <p><strong>Update:</strong> {contact.update && !isNaN(new Date(contact.update).getTime()) ? new Date(contact.update).toISOString().split('T')[0] : "Invalid date"}</p>
        </div>
      )}
    </div>
  );

};

export default App;

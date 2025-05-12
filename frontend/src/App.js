/*
  File: ContactForm.js
  Purpose: Find, Display and Edit contact info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated:
*/

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState([]); // Change to an array

  const MGURI = 'https://635e-118-39-108-176.ngrok-free.app';

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MGURI}/contacts`, {
        params: { name: searchName },
        headers: { "ngrok-skip-browser-warning": "true" }
      });
      setContacts(response.data); // Store multiple contacts
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div>
      <h2>Find & Display Contacts</h2>
      <input 
        type="text" 
        placeholder="Enter name" 
        value={searchName} 
        onChange={(e) => setSearchName(e.target.value)} 
      />
      <button onClick={handleSearch}>Find Contacts</button>

      {contacts.length > 0 && (
        <div>
          <h3>Displaying Contact List:</h3>
          {contacts.map((contact) => (
            <div key={contact._id}>
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Mobile:</strong> {contact.mobile}</p>
              <p><strong>Cate:</strong> {contact.cate}</p>
              <p>
                <strong>Update:</strong> 
                {contact.update && !isNaN(new Date(contact.update).getTime()) 
                  ? new Date(contact.update).toISOString().split('T')[0] 
                  : "Invalid date"}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

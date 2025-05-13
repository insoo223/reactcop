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

  const MGURI = 'https://0010-118-35-64-189.ngrok-free.app';

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
          <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Cate</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.mobile}</td>
                  <td>{contact.cate}</td>
                  <td>
                    {contact.update && !isNaN(new Date(contact.update).getTime())
                      ? new Date(contact.update).toISOString().split('T')[0]
                      : "Invalid date"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;

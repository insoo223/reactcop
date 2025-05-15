/*
  File: ContactForm.js (App.js)
  Purpose: Find, Display and Edit contact info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated: Thu. May 15, 2025
*/

import React, { useState } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import ContactTable from "./ContactTable";

// Environment Variables
const MGURI = process.env.REACT_APP_MGURI;

const App = () => {
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${MGURI}/contacts`, {
        params: { name: searchName },
        headers: { "ngrok-skip-browser-warning": "true" },
      });
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  return (
    <div>
      <SearchInput searchName={searchName} setSearchName={setSearchName} handleSearch={handleSearch} />
      <ContactTable contacts={contacts} />
    </div>
  );
};

export default App;
/*
  File: ContactForm.js (App.js)
  Purpose: Find, Display and Edit contact info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated: Thu. May 15, 2025
*/

import React from "react";
//import React, { useState } from "react";
//import axios from "axios";

/*---
import SearchInput from "./SearchInput";
import ContactTable from "./ContactTable";
---*/
import KeywdInput from "./KeywdInput";

// Environment Variables
//const MGURI = process.env.REACT_APP_MGURI;

const App = () => {
  /*---
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState([]);

  const [subj, setSubj] = useState("");
  const [body, setBody] = useState("");
  const [keywd, setKeywd] = useState("");

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
  ---*/

  return (
    <div>
      {/*
      <SearchInput searchName={searchName} setSearchName={setSearchName} handleSearch={handleSearch} />
      <ContactTable contacts={contacts} />
      <input type="text" value={subj} onChange={(e) => setSubj(e.target.value)} placeholder="Subject" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
      <KeywordInput keywd={keywd} setKeywd={setKeywd} />
      */}
      <KeywdInput />

    </div>
  );
};

export default App;

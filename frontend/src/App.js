/*----------
  File: App.js
  Purpose: 
    - When you type in a word in the keywords text box, 
    - it'll search for words in already-defined keywords array. 
    - Selecting a word from the list of words which contain type-in characters 
    - will put the word as a chosen keyword.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated: Thu. May 15, 2025
----------*/

//import React from "react";
import React, { useState } from "react";
import axios from "axios";

/*---
import SearchInput from "./SearchInput";
import ContactTable from "./ContactTable";
---*/
import KeywdInput from "./KeywdInput";

// Environment Variables
const MGURI = process.env.REACT_APP_MGURI;
const API_URL = `${MGURI}/keywds`;

const App = () => {
  /*---
  const [subj, setSubj] = useState("");
  const [body, setBody] = useState("");
  ---*/

  const [keywd, setKeywd] = useState("");

  const handleSubmit = async () => {
    try {
      // Verify keyword exists in keywds collection
      const keywordCheck = await axios.get(`${API_URL}?word=${keywd}`);
      if (!keywordCheck.data.length) {
        alert("Keyword does not exist in the database!");
        //return;
      }

      await axios.post(`${API_URL}`, { word: keywd });
      alert("Keywd entry added successfully!");
    } catch (error) {
      console.error("Error saving keywd entry:", error);
    }
  };

  return (
    <div>
      {/*
      <SearchInput searchName={searchName} setSearchName={setSearchName} handleSearch={handleSearch} />
      <ContactTable contacts={contacts} />
      <input type="text" value={subj} onChange={(e) => setSubj(e.target.value)} placeholder="Subject" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
      */}

      <KeywdInput keywd={keywd} setKeywd={setKeywd} />
      <button onClick={handleSubmit}>Save Entry</button>

    </div>
  );
};

export default App;

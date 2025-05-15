/*
  File: SearchInput.js
  Purpose: Find, Display and Edit contact info in MERN.
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Mon. May 12, 2025
  Upated: Wed. May 14, 2025
*/

import React from "react";

const SearchInput = ({ searchName, setSearchName, handleSearch }) => (
  <div>
    <h2>Find & Display Contacts</h2>
    <input
      type="text"
      placeholder="Enter name"
      value={searchName}
      onChange={(e) => setSearchName(e.target.value)}
    />
    <button onClick={handleSearch}>Find Contacts</button>
  </div>
);

export default SearchInput;

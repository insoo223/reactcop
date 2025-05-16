/*
  File: KeywdInput.js
  Purpose: Using Mongo DB, to manage key words input. You can select or add new one. 
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: Fri. May 16, 2025
*/

import React, { useState } from "react";
import axios from "axios";

// Environment Variables
const MGURI = process.env.REACT_APP_MGURI;
const API_URL = `${MGURI}/keywds`;

const KeywdInput = ({ keywd, setKeywd }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    const value = event.target.value;
    setKeywd(value);
    console.log(`value: ${value}`);
    if (value) {
      try {
        const response = await axios.get(`${API_URL}?word=${value}`);
        console.log(`axios.get URL: ${API_URL}?word=${value}`);
        //setSuggestions(response.data.map((kw) => kw.word || "")); // Extract word field
        if (Array.isArray(response.data)) {
          setSuggestions(response.data.map((kw) => kw.word));
        } else {
          console.error("Expected an array, but got:", typeof response.data);
          setSuggestions([]); // Handle unexpected format
        }
      } catch (error) {
        console.error("Error fetching keywords:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (keyword) => {
    setKeywd(keyword);
    setSuggestions([]);
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${API_URL}`, { word: keywd });
      setSuggestions([]);
    } catch (error) {
      console.error("Error adding keyword:", error);
    }
  };

  return (
    <div>
      <input type="text" value={keywd} onChange={handleChange} placeholder="Enter or select keyword" />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((word) => (
            <li key={word} onClick={() => handleSelect(word)}>
              {word}
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAdd}>Add Keyword</button>
    </div>
  );
};

export default KeywdInput;

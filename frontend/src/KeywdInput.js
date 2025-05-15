/*
  File: KeywdInput.js
  Purpose: To manage key words input. You can select or add new one. 
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: 
*/

import React, { useState } from "react";

const keywords = ["JavaScript", "React", "Node.js", "MongoDB", "Express"]; // Replace with API data

const KeywdInput = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    setSuggestions(keywords.filter((word) => word.toLowerCase().includes(value.toLowerCase())));
  };

  const handleSelect = (keyword) => {
    setInput(keyword);
    setSuggestions([]);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} placeholder="Enter keyword" />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((word) => (
            <li key={word} onClick={() => handleSelect(word)}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KeywdInput;


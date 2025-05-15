/*
  File: backend/routes/keywds.js 
  Purpose: API end points for "keywds/keywds"
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: 
*/

const express = require("express");
const router = express.Router();
const Know = require("../models/Know");

// Find keywds by type-in word
router.get("/knows/keywds", async (req, res) => {
    const keywdQuery = req.query.keywd || "";
    const keywds = await Know.find({ keywd: { $regex: keywdQuery, $options: "i" } }).distinct("keywd"); // Case-insensitive partial search
    res.json(keywds);
});

// Add keywd 
router.post("/knows/keywds", async (req, res) => {
  try {
    const { keywd } = req.body;
    const newKnow = new Know({ keywd });
    await newKnow.save();
    res.json({ message: "Keyword added", keywd });
  } catch (error) {
    res.status(500).json({ error: "Error updating keywd" });
  }
});

module.exports = router;

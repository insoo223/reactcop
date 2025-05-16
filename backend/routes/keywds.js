/*
  File: backend/routes/keywds.js 
  Purpose: API end points for "keywds/keywds"
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: 
*/

const express = require("express");
const router = express.Router();
const Keywd = require("../models/Keywd");

// API Endpoint to Get Matching Keywords
// Find keywds by type-in word
//router.get("/keywds", async (req, res) => {
  router.get("/", async (req, res) => {
  try {
    const keywdQuery = req.query.word || "";
    const keywds = await Keywd.find({ word: { $regex: keywdQuery, $options: "i" } }).select("word"); // Case-insensitive partial search
    console.log("Backend response:", keywds); // Debugging line
    res.json(keywds);
  } catch (error) {
    console.error("Error retrieving keywords:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// API Endpoint to Add a New Keyword
// Add keywd 
//router.post("/keywds", async (req, res) => {
  router.post("/", async (req, res) => {
  try {
    const { word } = req.body;
    const newKeywd = new Keywd({ word, created: new Date(), updated: new Date() });
    await newKeywd.save();
    res.json({ message: "Keyword added", keyword: newKeywd });
  } catch (error) {
    res.status(500).json({ error: "Error updating keywd" });
  }
});

module.exports = router;

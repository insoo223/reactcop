/*
  File: backend/routes/knows.js 
  Purpose: API end points for "knows(knowledges)"
  Author: Insoo Kim (insoo@hotmail.com)
  Created: Thu. May 15, 2025
  Upated: 
*/

const express = require("express");
const router = express.Router();
const Know = require("../models/Know");

// Find know by name
//router.get("/", async (req, res) => {
router.get("/knows/", async (req, res) => {
  try {
    const nameQuery = req.query.name;
    const knows = await Know.find({ name: { $regex: nameQuery, $options: "i" } }); // Case-insensitive partial search
    if (!knows.length) return res.status(404).json({ error: "No matching knows found" });
    res.json(knows);
  } catch (error) {
    res.status(500).json({ error: "Error fetching knows" });
  }
});

// Update know by ID
router.put("/knows/:id", async (req, res) => {
  try {
    const updatedKnow = await Know.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedKnow);
  } catch (error) {
    res.status(500).json({ error: "Error updating know" });
  }
});

module.exports = router;

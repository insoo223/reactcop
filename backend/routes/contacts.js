const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Find contact by name
//router.get("/", async (req, res) => {
router.get("/contacts/", async (req, res) => {
  try {
    const nameQuery = req.query.name;
    //const contact = await Contact.findOne({ name: nameQuery });
    //const contact = await Contact.findOne({ name: { $regex: nameQuery, $options: "i" } }); // Case-insensitive partial search
    const contacts = await Contact.find({ name: { $regex: nameQuery, $options: "i" } }); // Case-insensitive partial search
    if (!contacts.length) return res.status(404).json({ error: "No matching contacts found" });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

// Update contact by ID
//router.put("/:id", async (req, res) => {
router.put("/contacts/:id", async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: "Error updating contact" });
  }
});

module.exports = router;

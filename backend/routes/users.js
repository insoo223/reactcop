const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Find user by name
router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.query.name });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
});

// Update user by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Error updating user" });
  }
});

module.exports = router;

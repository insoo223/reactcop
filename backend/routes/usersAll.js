const express = require('express');
const User = require('../models/User');
const router = express.Router();

//Get all users
router.get ('/', async (req, res) => {
//router.get ('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json ({error: err.message});
    }
});

module.exports = router;


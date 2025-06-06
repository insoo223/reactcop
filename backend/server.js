const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Connect to Mongo DB Atlas
mongoose.connect (process.env.MONGO_URI)
    .then ( () => console.log('MongoDB connected'))
    .catch ( err => console.log(err) );

//Routes
app.use('/keywds', require('./routes/keywds'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log (`server running on port ${PORT}`));

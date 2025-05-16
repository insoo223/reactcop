const mongoose = require('mongoose');
const keywdSchema = new mongoose.Schema ({
    word: {type: String, required: true},
    created: {type: Date, required: true},
    updated: {type: Date, required: false},
   });

module.exports = mongoose.model('Keywd', keywdSchema);
 

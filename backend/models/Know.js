const mongoose = require('mongoose');
const knowSchema = new mongoose.Schema ({
    subj: {type: String, required: true},
    body: {type: String, required: false},
    keywd: {type: String, required: false},
    created: {type: Date, required: false},
    updated: {type: Date, required: false},
   });

module.exports = mongoose.model('Know', knowSchema);
 

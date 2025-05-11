const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    email: {type: String, required: false},
    mobile: {type: String, required: false},
   });

module.exports = mongoose.model('User', userSchema);
 

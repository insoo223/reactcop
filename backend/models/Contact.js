const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    mobile: {type: String, required: false},
    o_tel: {type: String, required: false},
    email: {type: String, required: false},
    cate: {type: String, required: true},
    update: {type: Date, required: true},
    regdate: {type: Date, required: true},
   });

module.exports = mongoose.model('Contact', contactSchema);
 

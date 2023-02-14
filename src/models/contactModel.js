const mongoose = require("mongoose");

const contactModel = new mongoose.Schema({
    first_name: { type: String, required: true, trim: true },
    lasst_name: { type: String, required: true, trim: true },
    mobile_number: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    isDeleted:{type:Boolean, default:false}
}, { timestamps: true });

module.exports = mongoose.model("contact", contactModel);
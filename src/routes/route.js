const express = require("express");
const {createContact, getContact, updateContact, deleteContact} = require("../controller/contactController");
const router = express.Router();


router.get("/check", (req, res)=>{
    res.send("It's working!!");
});

// 
router.post("/contact/createContact", createContact);
router.get("/contact/getContact", getContact);
router.put("/contact/updateContact", updateContact);
router.delete("/contact/deleteContact", deleteContact);

module.exports = router;

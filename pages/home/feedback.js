const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const Feedback=require("../../models/feedbacks");


const router3=express.Router();

router3.get("/index",function(req,res){
    res.sendFile(__dirname+"../../index.html");
});
router3.post("/index", async function(req, res){
    try {
        const newFeedback = new Feedback({
            name: req.body.sname,
            email: req.body.email,
            number: req.body.number,
            subject: req.body.subject,
            message: req.body.message
        });

        await newFeedback.save();
        res.sendFile(__dirname+"../../index.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router3;
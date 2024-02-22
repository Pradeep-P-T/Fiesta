const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const OfficeMeeting=require("./officemeetingsdb");


const router=express.Router();

router.get("/officemeetings",function(req,res){
    res.sendFile(__dirname+"/officemeetings.html");
});
router.post("/officemeetings", async function(req, res){
    try {
        const newOfficeMeeting = new OfficeMeeting({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newOfficeMeeting.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
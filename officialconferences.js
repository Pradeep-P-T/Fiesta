const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const OfficialConference=require("./officialconferencesdb");


const router=express.Router();

router.get("/officialconferences",function(req,res){
    res.sendFile(__dirname+"/officialconferences.html");
});
router.post("/officialconferences", async function(req, res){
    try {
        const newOfficialConference = new OfficialConference({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newOfficialConference.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const Birthday=require("./birthdaydb");


const router=express.Router();

router.get("/birthday",function(req,res){
    res.sendFile(__dirname+"/birthday.html");
});
router.post("/birthday", async function(req, res){
    try {
        const newBirthday = new Birthday({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newBirthday.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
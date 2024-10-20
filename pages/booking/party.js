const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const Party=require("../../models/partydb");


const router=express.Router();

router.get("/party",function(req,res){
    res.sendFile(__dirname+"/party.html");
});
router.post("/party", async function(req, res){
    try {
        const newParty = new Party({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newParty.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
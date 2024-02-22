const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const Concert=require("./concertsdb");


const router=express.Router();

router.get("/concerts",function(req,res){
    res.sendFile(__dirname+"/concerts.html");
});
router.post("/concerts", async function(req, res){
    try {
        const newConcert = new Concert({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newConcert.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
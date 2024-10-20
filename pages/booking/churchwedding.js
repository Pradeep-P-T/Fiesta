const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const ChurchWedding=require("../../models/churchweddingdb");


const router=express.Router();

router.get("/churchwedding",function(req,res){
    res.sendFile(__dirname+"/churchwedding.html");
});
router.post("/churchwedding", async function(req, res){
    try {
        const newChurchWedding = new ChurchWedding({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newChurchWedding.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
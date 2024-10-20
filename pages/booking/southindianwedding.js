const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const SouthWedding=require("../../models/southindianweddingdb");


const router=express.Router();

router.get("/southindianwedding",function(req,res){
    res.sendFile(__dirname+"/southindianwedding.html");
});
router.post("/southindianwedding", async function(req, res){
    try {
        const newSouthWedding = new SouthWedding({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newSouthWedding.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
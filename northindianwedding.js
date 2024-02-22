const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const NorthWedding=require("./northindianweddingdb");


const router=express.Router();

router.get("/northindianwedding",function(req,res){
    res.sendFile(__dirname+"/northindianwedding.html");
});
router.post("/northindianwedding", async function(req, res){
    try {
        const newNorthWedding = new NorthWedding({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            budget: req.body.srange,
            date: req.body.sdate
        });

        await newNorthWedding.save();
        res.sendFile(__dirname+"/booked.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router;
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const User=require("./user");

const router1=express.Router();

router1.get("/reg",function(req,res){
    res.sendFile(__dirname+"/reg.html");
});

router1.post("/reg", async function(req, res){
    try {
        const newUser = new User({
            name: req.body.sname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.number
        });

        await newUser.save();
        res.sendFile(__dirname+"/success.html");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports=router1;
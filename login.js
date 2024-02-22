const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const router1= require("./register");
const User=require("./user");


const router2=express.Router();

router2.get("/login",function(req,res){
    res.sendFile(__dirname+"/login.html");
});
router2.post("/login", async function(req, res){
    try {
        const username = req.body.username;
        const password = req.body.password;

        const foundUser = await User.findOne({ username: username });

        if (foundUser && foundUser.password === password) {
            res.redirect("/packages");
        } else {
            res.sendFile(__dirname+"/failure.html");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router2;

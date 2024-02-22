const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const register = require("./register");
const login = require("./login");
const feedbacks = require("./feedback");
const birthday=require("./birthday");
const church=require("./churchwedding")
const north=require("./northindianwedding");
const south=require("./southindianwedding");
const concert=require("./concerts");
const party=require("./party");
const officemeeting=require("./officemeetings");
const officialconference=require("./officialconferences");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/fiesta");

app.get("/gallery",function(req,res){
    res.sendFile(__dirname+"/gallery.html");
});

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/about.html");
});

app.get("/packages",function(req,res){
    res.sendFile(__dirname+"/packages.html");
});


app.use(register);

app.use(login);

app.use(feedbacks);

app.use(birthday);

app.use(church);

app.use(north);

app.use(south);

app.use(concert);

app.use(party);

app.use(officemeeting);

app.use(officialconference);


app.listen(3000,function(){
    console.log("Server running on port 3000");
});
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const mongoose=require("mongoose");
const register = require("./pages/home/register");
const login = require("./pages/home/login");
const feedbacks = require("./pages/home/feedback");
const birthday=require("./pages/booking/birthday");
const church=require("./pages/booking/churchwedding")
const north=require("./pages/booking/northindianwedding");
const south=require("./pages/booking/southindianwedding");
const concert=require("./pages/booking/concerts");
const party=require("./pages/booking/party");
const officemeeting=require("./pages/booking/officemeetings");
const officialconference=require("./pages/booking/officialconferences");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.use(express.static("pages/home"));
app.use(express.static("pages/booking"));

mongoose.connect("mongodb://localhost:27017/fiesta");

app.get("/gallery",function(req,res){
    res.sendFile(__dirname+"/pages/home/gallery.html");
});

app.get("/about",function(req,res){
    res.sendFile(__dirname+"/pages/home/about.html");
});

app.get("/packages",function(req,res){
    res.sendFile(__dirname+"/pages/home/packages.html");
});

app.get("/packages1",function(req,res){
    res.sendFile(__dirname+"/pages/home/packages1.html");
});
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
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


app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});

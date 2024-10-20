const mongoose=require("mongoose");

const OfficeMeetingSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const OfficeMeeting=new mongoose.model("OfficeMeeting", OfficeMeetingSchema);

module.exports=OfficeMeeting;
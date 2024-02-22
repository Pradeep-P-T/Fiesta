const mongoose=require("mongoose");

const OfficialConferenceSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const OfficialConference=new mongoose.model("OfficialConference", OfficialConferenceSchema);

module.exports=OfficialConference;
const mongoose=require("mongoose");

const PartySchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const Party=new mongoose.model("Party", PartySchema);

module.exports=Party;
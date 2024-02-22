const mongoose=require("mongoose");

const BirthdaySchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const Birthday=new mongoose.model("Birthday", BirthdaySchema);

module.exports=Birthday;
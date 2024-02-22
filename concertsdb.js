const mongoose=require("mongoose");

const ConcertSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const Concert=new mongoose.model("Concert", ConcertSchema);

module.exports=Concert;
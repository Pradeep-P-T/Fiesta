const mongoose=require("mongoose");

const ChurchWeddingSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const ChurchWedding=new mongoose.model("ChurchWedding", ChurchWeddingSchema);

module.exports=ChurchWedding;
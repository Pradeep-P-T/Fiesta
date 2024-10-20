const mongoose=require("mongoose");

const NorthWeddingSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const NorthWedding=new mongoose.model("NorthWedding", NorthWeddingSchema);

module.exports=NorthWedding;
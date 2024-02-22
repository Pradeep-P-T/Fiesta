const mongoose=require("mongoose");

const SouthWeddingSchema=new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    budget: String,
    date: String
});

const SouthWedding=new mongoose.model("SouthWedding", SouthWeddingSchema);

module.exports=SouthWedding;
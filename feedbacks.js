const mongoose=require("mongoose");

const FeedbackSchema=new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    number: String,
});

const Feedback=new mongoose.model("Feedback", FeedbackSchema);

module.exports=Feedback;
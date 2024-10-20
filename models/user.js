const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    phone: String,

});

const User=new mongoose.model("User", userSchema);

module.exports=User;
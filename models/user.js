const mongoose=require("mongoose");

const user=new mongoose.Schema({

    name:String,
    email:String,
    password:String
})

const userdata=new mongoose.model("user",user);

module.exports=userdata;
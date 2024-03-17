const { mongoose } = require("mongoose");
const regSchema=mongoose.Schema({
    username:String,
    password:String,
    email:String,
    mobile:Number,
    
})
module.exports=mongoose.module('reg',regSchema)
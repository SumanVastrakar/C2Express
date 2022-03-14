
const mongoose = require("mongoose");

//schema
 const userSchema =new mongoose.Schema(
     {
         "firstName":{type:String,required:true},
         "middleName":{type:String,required:false},
         "lastName":{type:String,required:true},
         "age":{type:Number,required:true},
         "email":{type:String,required:true},
         "address":{type:String,required:true},
         "gender":{type:String,required:false}||"Female",
         "type":{type:String,required:false}||"customer",
         "firstName":{type:String,required:true},
         "firstName":{type:String,required:true},
     },
     {
         versionKey:false,
         timestamps:true,
     }
 );
 //model
 const User= mongoose.model("user",userSchema);
 module.exports=User;
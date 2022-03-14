
const mongoose = require("mongoose");

//schema
 const fixedSchema =new mongoose.Schema(
     {
        
        
 "account_number":{type:Number,required:true,unique:true},
        
 "balance":{type:Number,required:true},

 "interestRate":{type:Number,required:true},
 "startDate":{type:Number,required:true},
 "maturityDate":{type:Number,required:true}, 
     },
     {
        versionKey:false,
        timestamps:true,
    }
 );
 //model
 const Fixed= mongoose.model("fxed",fixedSchema);
 module.exports=Fixed;

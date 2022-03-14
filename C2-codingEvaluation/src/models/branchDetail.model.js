
const mongoose = require("mongoose");

//schema
 const branchSchema =new mongoose.Schema(
     {
         "name":{type:String,required:true},
        
         "address":{type:String,required:true},
        
         "IFSC":{type:String,required:true},
         "MICR":{type:Number,required:true},
        
     },
     {
        versionKey:false,
        timestamps:true,
    }
 );
 //model
 const Branch= mongoose.model("branch",branchSchema);
 module.exports=Branch;
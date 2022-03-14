
const mongoose = require("mongoose");

//schema
 const masterSchema =new mongoose.Schema(
     {
        
         "balance":{type:Number,required:true},
        
        
        
     },
     {
        versionKey:false,
        timestamps:true,
    }
 );
 //model
 const master= mongoose.model("saving",masterSchema);
 module.exports=master;
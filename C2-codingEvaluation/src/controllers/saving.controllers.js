const express = require("express");
const Savings =require("../models/saving.model.js");

//crud operations
const router =express.Router();
router.get("/",async(req,res)=>{
    try{
const savings= await Savings.find().lean().exec();
return res.status(201).send(savings);
    }catch(err){
        res.status(500).send({meassge:err.message})
    }
})
module.exports=router;
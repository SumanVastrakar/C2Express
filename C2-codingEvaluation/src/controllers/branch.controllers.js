const express = require("express");
const Branch =require("../models/users.model.js");

//crud operations
const router =express.Router();
router.get("/",async(req,res)=>{
    try{
const users= await Branch.find().lean().exec();
return res.status(201).send(users);
    }catch(err){
        res.status(500).send({meassge:err.message})
    }
})
module.exports=router;
const express = require("express");
const app = require("../index.js");
const User =require("../models/users.model.js");

//crud operations
const router =express.Router();
router.get("/",async(req,res)=>{
    try{
const users= await User.find().lean().exec();
return res.status(201).send(users);
    }catch(err){
        res.status(500).send({meassge:err.message})
    }
})
module.exports=router;

// app.get("/:masterAccountId/")

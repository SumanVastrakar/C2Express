const express = require("express");
const Master =require("../models/master.model.js");

//crud operations
const router =express.Router();
router.get("/",async(req,res)=>{
    try{
const master= await Master.find().lean().exec();
return res.status(201).send(master);
    }catch(err){
        res.status(500).send({meassge:err.message})
    }
});

router.post("/",async(req,res)=>{
    try{
const master = await Master.create(req.body);
return res.status(201).send(master);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})
module.exports=router;

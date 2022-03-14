const express = require("express");
const Fixed =require("../models/fixed.model.js");

//crud operations
const router =express.Router();
router.get("/",async(req,res)=>{
    try{
const savings= await Fixed.find().lean().exec();
return res.status(201).send(savings);
    }catch(err){
        res.status(500).send({meassge:err.message})
    }
});

router.post("/",async(req,res)=>{
    try{
const master = await Fixed.create(req.body);
return res.status(201).send(master);
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
});
module.exports=router;


const express = require("express");
const app=express();
app.use(express.json());

const userController= require("./controllers/user.controllers.js")
app.use("/users",userController)

const branchController= require("./controllers/branch.controllers.js")
app.use("/branchs",branchController)

const masterController= require("./controllers/master.controllers.js")
app.use("/masters",masterController)


const savingController= require("./controllers/saving.controllers.js")
app.use("/savings",savingController)

const fixedController= require("./controllers/fixed.controllers.js")
app.use("/fixeds",fixedController)

module.exports=app;

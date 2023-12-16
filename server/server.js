const express = require("express")
const app = express()
const cors = require("cors");
app.use(cors());


// conect to DB
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/amazon-stor",{
    
useNewUrlParser: true,
useUnifiedTopology: true,
})

// import product Shcema
const ProdectSchema = require("./models/Prodect")






app.get("/",async(req,res)=>{
   const prod =await ProdectSchema.find();
   res.json(prod)
})






app.listen(3001,()=>{
    console.log("server work good hh")
})
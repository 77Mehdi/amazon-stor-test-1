const {Schema, model} = require("mongoose");

const ProdectSchema =  new Schema({

    img:{
        type:String
    },
    title:{
        type:String
    },
    star:{
        type:String
    },
    reviews:{
        type:String
    },
    prevPrice:{
        type:String
    },
    newPrice:{
        type:String
    },
    company:{
        type:String
    },
    color:{
        type:String
    },
    category:{
        type:String
    }
})

 const ProdectModel =model("products",ProdectSchema)

 module.exports = ProdectModel



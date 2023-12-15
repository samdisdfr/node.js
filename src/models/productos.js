const mongoose = require("mongoose")

const productosModel = mongoose.Schema({

    _id:{
        type:String,
        require:true
},

    nombre:{
        type:String,
        require:true
},

    descripcion:{
        type:String,
        require:true
},

    precio:{
        type:Number,
        require:true
},

    marca:{
        type:String,
        require:true
},

    stock:{
        type:Number,
        require:true
},

    categoria:{
        type:Array,
        require:true
},
    
    imagenes:{
        type:String,
        require:true
},

})

module.exports = mongoose.model("productos",productosModel);
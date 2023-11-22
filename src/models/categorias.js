const mongoose = require("mongoose")

const categoriasModel = mongoose.Schema({
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
})

module.exports = mongoose.model("categorias",categoriasModel  );
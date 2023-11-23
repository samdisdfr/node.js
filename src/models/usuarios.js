const mongoose = require("mongoose")

const usuariosModel = mongoose.Schema({

    _id:{
        type:String,
        require:true
},
    
    nombre:{
        type:String,
        require:true
},
    
    correo:{
        type:String,
        require:true
},
  
    contrasena:{
        type:String,
        require:true
},

    direccion:{
        type:String,
        require:true
}
})

module.exports = mongoose.model("usuarios",usuariosModel);
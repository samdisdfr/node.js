const mongoose = require("mongoose")

const usuariosModel = mongoose.Schema({
    
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
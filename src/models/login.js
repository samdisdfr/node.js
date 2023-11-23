const mongoose = require("mongoose")

const loginModel = mongoose.Schema({
    correo:{
        type:String,
        require:true
    },
    contrasena:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("login",loginModel,"login");
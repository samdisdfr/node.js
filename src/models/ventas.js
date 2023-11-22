const mongoose = require("mongoose")

const ventasModel = mongoose.Schema({
    _id :{
        type:String,
        require:true
    },
    usuarioId:{
        type:String,
        require:true
    },

    productos :{
        type:Array,
        require:true
    },
    total :{
        type:Number,
        require:true
    },
    fechaVenta :{
        type:String,
        require:true
},
})

module.exports = mongoose.model("ventas",ventasModel);
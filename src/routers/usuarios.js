const express = require("express")
const ventasModel =require("../models/usuarios");
const router =express.Router();


//get
router.get("/usuarios",(req, res)=>{
    ventasModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});


//exportar

module.exports = router;
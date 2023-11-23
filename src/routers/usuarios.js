const express = require("express")
const usuariosModel =require("../models/usuarios");
const router =express.Router();


//get
router.get("/usuarios",(req, res)=>{
    usuariosModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});

//post
router.post("/usuarios",(req, res)=>{
    const usuario = usuariosModel(req.body);
    console.log(req.body)
    usuario.save()
        .then((data) => res.json({mensaje:"cuenta creada"}))
        .catch((error) => res.json({mensaje:error}))
});
//exportar

module.exports = router;
const express = require("express")
const categoriasModel =require("../models/categorias");
const router =express.Router();


//get
router.get("/categorias",(req, res)=>{
    categoriasModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});
//getbyId
router.get("/categorias/:id", (req, res) => {
    const {id} = req.params;
    categoriasModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))
});

//exportar

module.exports = router;
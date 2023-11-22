const express = require("express")
const productosModel =require("../models/productos");
const router =express.Router();


//get
router.get("/productos",(req, res)=>{
    productosModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});


//exportar

module.exports = router;
const express = require("express")
const marcasModel =require("../models/marcas");
const router =express.Router();


//get
router.get("/marcas",(req, res)=>{
    marcasModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});
//getbyId
router.get("/marcas/:id", (req, res) => {
    const {id} = req.params;
    marcasModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({mensaje:error}))
});

//exportar

module.exports = router;
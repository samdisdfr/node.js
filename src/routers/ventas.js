const express = require("express")
const ventasModel =require("../models/ventas");
const router =express.Router();


//get
router.get("/ventas",(req, res)=>{
    ventasModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});

//post
router.post("/ventas",(req, res)=>{
    const venta = ventasModel(req.body);
    console.log(req.body)
    venta.save()
        .then((data) => res.json({mensaje:"compra enviado"}))
        .catch((error) => res.json({mensaje:error}))
});
//delete
router.delete("/ventas/:id",(req, res) => {
    const {id} = req.params;
    ventasModel.deleteOne({_id:id})
        .then((data) => res.json({mensaje:"compra eliminada"}))
        .catch((error) => res.json({mensaje:error}))
});


//exportar

module.exports = router;
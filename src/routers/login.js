const express = require("express")
const loginModel =require("../models/login");
const router =express.Router();


//get
router.get("/login",(req, res)=>{
    loginModel.find()
         .then((data) => res.json(data) )
         .catch((error) =>res.json({mensaje:error}))
});

//post
router.post("/login",(req, res)=>{
        const login = loginModel(req.body);
        console.log(req.body)
        login.save()
            .then((data) => res.json({mensaje:"acceso concedido"}))
            .catch((error) => res.json({mensaje:error}))
});

//exportar

module.exports = router;
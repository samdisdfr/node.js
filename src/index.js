//lamado de paquetes
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const ventas =require("./routers/ventas")
const usuarios =require("./routers/usuarios")
const productos =require("./routers/productos")
const marcas =require("./routers/marcas")
const categorias=require("./routers/categorias")
const login=require("./routers/login")
//configuraciones
const app=express();
const puerto =5000;
app.use(express.json())

//rutas 
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    })

app.get("/prueba",(req, res) =>{res.send("pagina de prueba segundaria")})
app.use("/api",ventas);
app.use("/api",usuarios);
app.use("/api",productos);
app.use("/api",marcas);
app.use("/api",categorias);
app.use("/api",login);


//ejecucion
mongoose.connect(process.env.mongodb)
      .then(() => {console.log("conexion exitosa")})
      .catch((error) => {console.log(error)})
app.listen(puerto,() => {console.log("el servidor escuchando en el puerto:"+puerto)})
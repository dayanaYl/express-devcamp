//1. Crear el objeto express 
const express = require('express')
//2.Citar las dependencias necesarias 
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoint = require('express-list-endpoints')
//los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')


//3.establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

//Crear el objeto aplicacion
//para el servidor de desarrollo
const app = express()


//rutas de proyecto
app.use('/api/v1/bootcamp' , bootcampRoutes)


//endpoint de aplicacion 
app.get('/' , (request , response)=>{
    response
    .status(200)
    .json({
        "success": true,
        "data" : "request exitosa"
    })
    
})

//endpoints
//bootcamps


//imprimir la lista de endpoint
//vallidas del proyecto
console.log(listEndpoint(app))



//ejecutar el servidor de desarrollo 
//parametros
//puerto de escucha - listen
app.listen(process.env.PORT , ()=>{
    console.log(`servidor activo en puerto 5000` .bgMagenta.blue)
})
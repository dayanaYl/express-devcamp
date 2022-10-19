const { Router } = require('express')
const express = require('express')

//definir objeto de ruteo 
const router = express.Router()

//listar todos los courses
router.get('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui va a salir todos los course"
    })
})

//Listar course pi Id
router.get('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a salir el course cuyo id es ${req.params.id}`
    })
})

//Actualizar courses
router.put('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el courses cuyo id es ${req.params.id}`
    })
})

//Eliminar courses
router.delete('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el courses cuyo id es ${req.params.id}`
    })
})

//Crear nuevo courses
router.post('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar course"
    })
})


module.exports = router
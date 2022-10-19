const express = require('express')

//definir objeto de ruteo 
const router = express.Router()

//listar todos los bootcamsp
router.get('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui va a salir todos los bootcamps"
    })
})

//Listar bootcamp pi Id
router.get('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a salir el bootcamps cuyo id es ${req.params.id}`
    })
})

//Actualizar bootcamps
router.put('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el bootcamps cuyo id es ${req.params.id}`
    })
})

//Eliminar bootcamps
router.delete('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el bootcamps cuyo id es ${req.params.id}`
    })
})

//Crear nuevo bootcamps
router.post('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar bootcamp"
    })
})


module.exports = router
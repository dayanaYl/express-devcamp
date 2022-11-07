const express = require('express')

//definir objeto de ruteo 
const router = express.Router()

const{
    getAllBootcamps,
    getSingleBootcamp,
    updateBootcamp,
    deleteBootcamp,
    createBootcamp
} = require('../controllers/BootcampsController')
 //crear rutas sin parametro 
 router.route('/')
                .get(getAllBootcamps)
                .post(createBootcamp)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleBootcamp)
        .put(updateBootcamp)
        .delete(deleteBootcamp)


//listar todos los bootcamsp
/*router.get('/' , (req , res) =>{
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
        "data" : `aqui va a salir el bootcamp cuyo id es: ${req.params.id}`
    })
})

//Actualizar bootcamps
router.put('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el bootcamp cuyo id es: ${req.params.id}`
    })
})

//Eliminar bootcamps
router.delete('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el bootcamps cuyo id es: ${req.params.id}`
    })
})

//Crear nuevo bootcamps
router.post('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar un bootcamp"
    })
})
*/

module.exports = router
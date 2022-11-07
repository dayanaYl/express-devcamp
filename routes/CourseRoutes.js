//const { Router } = require('express')
const express = require('express')

//definir objeto de ruteo 
const router = express.Router()
const{
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse

} = require('../controllers/CoursesController')

 //crear rutas sin parametro 
 router.route('/')
                .get(getAllCourses)
                .post(createCourse)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleCourse)
        .put(updateCourse)
        .delete(deleteCourse)

//listar todos los courses
/*router.get('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui va a salir todos los courses"
    })
})

//Listar course pi Id
router.get('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a salir el course cuyo id es: ${req.params.id}`
    })
})

//Actualizar courses
router.put('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el course cuyo id es: ${req.params.id}`
    })
})

//Eliminar courses
router.delete('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el course cuyo id es: ${req.params.id}`
    })
})

//Crear nuevo courses
router.post('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar un course"
    })
})*/


module.exports = router
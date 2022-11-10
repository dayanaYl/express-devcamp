const express = require('express')

//definir objeto de ruteo 
const router = express.Router()
const {
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
 } = require('../controllers/ReviewsController')

 //crear rutas sin parametro 
 router.route('/')
                .get(getAllReviews)
                .post(createReview)
//crear rutas con parametro 
router.route('/:id')
        .get(getSingleReview)
        .put(updateReview)
        .delete(deleteReview)

module.exports = router

//listar todos los reviews
/*router.get('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui va a salir todos los reviews"
    })
})

//Listar review pi Id
router.get('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a salir el review cuyo id es: ${req.params.id}`
    })
})

//Actualizar reviews
router.put('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va actualizarse el review cuyo id es: ${req.params.id}`
    })
})

//Eliminar reviews
router.delete('/:id' , (req , res) =>{
    console.log(req.params.id)
    res
    .status(200)
    .json({
        "success": true,
        "data" : `aqui va a eliminar el review cuyo id es: ${req.params.id}`
    })
})

//Crear nuevo reviews
router.post('/' , (req , res) =>{
    res
    .status(200)
    .json({
        "success": true,
        "data" : "aqui vamos a registrar un review"
    })
})


module.exports = router*/
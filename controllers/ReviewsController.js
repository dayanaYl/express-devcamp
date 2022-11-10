//dependencias
const sequelize = require ('../config/Seq')
//data
const {DataTypes, ValidationError} = require ('sequelize')
//el modelo 
const ReviewModel = require ('../models/reviews')
//crear la entidad 
const reviews = ReviewModel(sequelize,DataTypes)



//listar todos los user
exports.getAllReviews =  async (req , res) =>{
   try {
        //traer los usuarios 
   const review = await  reviews.findAll();
   //responde con los datos 
   res
   .status(200)
   .json({
       "success": true,
       "data" : review
   })
   } catch (error) {
       res
       .status(400)
       .json({
           "sucess":false,
           "errors":"error de servidor desconocido"

       }) 
   }
  
}
//Listar user pi Id
exports.getSingleReview = async (req , res) =>{
   try {
       //traer los usuarios 
    const singleReview = await reviews.findByPk(req.params.id);
    if (singleReview){
       res
   .status(200)
   .json({
       "success": true,
       "data" : singleReview
   })  
    }else{
       res
       .status(400)
       .json({
           "success": false,
           "errors":"usuario no existente"
       })
    }
   
   } catch (error) {
       res
       .status(400)
       .json({
           "sucess":false,
           "errors":"error de servidor desconocido"

       }) 
   }
  
}


//Actualizar user
exports.updateReview = async (req , res) =>{
    
   try {
   const singleReview = await reviews.findByPk(req.params.id);
    if(!singleReview){
       res
       .status(400)
       .json({
           "success": false,
           "errors":"usuario no existente"
       })
    }else{
       // en caso que actualizo el usuario
       //console.log(req.params.id)
       await Review.update (req.body,{
       where:{
           id: req.params.id
       }});
       //selecciono user actualizado
       const updateReview = await Review.findByPk(req.params.id);
   res
   .status(200)
   .json({
       "success": true,
       "data" : updateReview
   })
}
} catch (error) {
       res
       .status(400)
       .json({
           "sucess":false,
           "errors":"error de servidor desconocido"

       }) 
   }
   
}

//Eliminar user
exports.deleteReview = async (req , res) =>{

   try {
       const singleReview = await reviews.findByPk(req.params.id);
           //selecciono user actualizado
       res
       .status(200)
       .json({
           "success": true,
           "data" : deleteReview
       })
   }
    catch (error) {
           res
           .status(400)
           .json({
               "sucess":false,
               "errors":"error de servidor desconocido"
   
           }) 
       
   
}

}

//Crear nuevo user
exports.createReview = async (req , res) =>{
try {
   const newReview = await reviews.create(req.body);
   res
   .status(200)
   .json({
       "success": true,
       "data" :newReview
   })
} catch (error) {
   if(error instanceof ValidationError){
      //recoramos el areglo de errores 
      //foreach 
      //map 
      const errores = error.errors.map((elemento)=>{return elemento.message})
       res
       .status(400)
       .json({
           "sucess":false,
           "errors":errores
       }) 
   }else{
       res
       .status(400)
       .json({
           "sucess":false,
           "errors":"errror de servidor"

       }) 
   }
}
   
}



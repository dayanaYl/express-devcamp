//dependencias
const sequelize = require ('../config/Seq')
//data
const {DataTypes, ValidationError} = require ('sequelize')
//el modelo 
const UserModel = require ('../models/courses')
//crear la entidad 
const Course = UserModel(sequelize,DataTypes)



//listar todos los Courses
exports.getAllCourses =  async (req , res) =>{
   try {
        //traer los usuarios 
   const  courses = await  Course.findAll();
   //responde con los datos 
   res
   .status(200)
   .json({
       "success": true,
       "data" : courses
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
exports.getSingleCourse = async (req , res) =>{
   try {
       //traer los usuarios 
    const singleCourse = await Course.findByPk(req.params.id);
    if (singleCourse){
       res
   .status(200)
   .json({
       "success": true,
       "data" : singleCourse
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
exports.updateCourse = async (req , res) =>{
    
   try {
   const singleCourse = await Course.findByPk(req.params.id);
    if(!singleCourse){
       res
       .status(400)
       .json({
           "success": false,
           "errors":"usuario no existente"
       })
    }else{
       // en caso que actualizo el usuario
       //console.log(req.params.id)
       await Course.update (req.body,{
       where:{
           id: req.params.id
       }});
       //selecciono user actualizado
       const updateCourse = await Course.findByPk(req.params.id);
   res
   .status(200)
   .json({
       "success": true,
       "data" : updateCourse
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
exports.deleteCourse = async (req , res) =>{

   try {
       const singleCourses = await Courses.findByPk(req.params.id);
           //selecciono user actualizado
       res
       .status(200)
       .json({
           "success": true,
           "data" : deleteCourse
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

//Crear nuevo Courses
exports.createCourse = async (req , res) =>{
try {
   const newCourse = await Course.create(req.body);
   res
   .status(200)
   .json({
       "success": true,
       "data" :newCourse
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



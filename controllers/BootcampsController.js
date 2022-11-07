//dependencias
const sequelize = require ('../config/Seq')
//data
const {DataTypes, ValidationError} = require ('sequelize')
//el modelo 
const BootcampModel = require ('../models/Bootcamp')
//crear la entidad 
const Bootcamp = BootcampModel(sequelize,DataTypes)



//listar todos los Bootcamp
exports.getAllBootcamps =  async (req , res) =>{
   try {
        //traer los Bootcamp 
   const bootcamps = await  Bootcamp.findAll();
   //responde con los datos 
   res
   .status(200)
   .json({
       "success": true,
       "data" : bootcamps
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
exports.getSingleBootcamp = async (req , res) =>{
   try {
       //traer los usuarios 
    const singleBootcamp = await Bootcamp.findByPk(req.params.id);
    if (singleBootcamp){
       res
   .status(200)
   .json({
       "success": true,
       "data" : singleBootcamp
   })  
    }else{
       res
       .status(400)
       .json({
           "success": false,
           "errors":"Bootcamp no existente"
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
exports.updateBootcamp = async (req , res) =>{
    
   try {
   const singleBootcamp = await Bootcamp.findByPk(req.params.id);
    if(!singleBootcamp){
       res
       .status(400)
       .json({
           "success": false,
           "errors":"usuario no existente"
       })
    }else{
       // en caso que actualizo el usuario
       //console.log(req.params.id)
       await Bootcamp.update (req.body,{
       where:{
           id: req.params.id
       }});
       //selecciono user actualizado
       const updateBootcamp = await Bootcamp.findByPk(req.params.id);
   res
   .status(200)
   .json({
       "success": true,
       "data" : updateBootcamp
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
exports.deleteBootcamp = async (req , res) =>{

   try {
       const singleBootcamp = await Bootcamp.findByPk(req.params.id);
           //selecciono user actualizado
       res
       .status(200)
       .json({
           "success": true,
           "data" : deleteBootcamp
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
exports.createBootcamp = async (req , res) =>{
try {
   const newBootcamp = await Bootcamp.create(req.body);
   res
   .status(200)
   .json({
       "success": true,
       "data" :newBootcamp
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



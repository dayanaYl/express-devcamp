//dependencias
 const sequelize = require ('../config/Seq')
 //data
 const {DataTypes, ValidationError} = require ('sequelize')
 //el modelo 
 const UserModel = require ('../models/user')
 //crear la entidad 
 const User = UserModel(sequelize,DataTypes)



//listar todos los user
exports.getAllUsers =  async (req , res) =>{
    try {
         //traer los usuarios 
    const users = await  User.findAll();
    //responde con los datos 
    res
    .status(200)
    .json({
        "success": true,
        "data" : users
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
exports.getSingleUser = async (req , res) =>{
    try {
        //traer los usuarios 
     const singleUser = await User.findByPk(req.params.id);
     if (singleUser){
        res
    .status(200)
    .json({
        "success": true,
        "data" : singleUser
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
exports.updateUser = async (req , res) =>{
     
    try {
    const singleUser = await User.findByPk(req.params.id);
     if(!singleUser){
        res
        .status(400)
        .json({
            "success": false,
            "errors":"usuario no existente"
        })
     }else{
        // en caso que actualizo el usuario
        //console.log(req.params.id)
        await User.update (req.body,{
        where:{
            id: req.params.id
        }});
        //selecciono user actualizado
        const updateUser = await User.findByPk(req.params.id);
    res
    .status(200)
    .json({
        "success": true,
        "data" : updateUser
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
exports.deleteUser = async (req , res) =>{
 
    try {
        const singleUser = await User.findByPk(req.params.id);
            //selecciono user actualizado
        res
        .status(200)
        .json({
            "success": true,
            "data" : deleteUser
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
exports.createUser = async (req , res) =>{
 try {
    const newUser = await User.create(req.body);
    res
    .status(200)
    .json({
        "success": true,
        "data" :newUser
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



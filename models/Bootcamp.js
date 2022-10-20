const mongoose = require('mongoose')

//Modelo de bootcaps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Por favor, ingresa nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admiten bootcamps > 30"
        ]
    },
    description: {
        type: String,
        require:[
            true,
            'por favor, ingrese descripcion'
        ],
        mxlength: [
            500,
            "Nose admiten descripcion > 500"
        ]
    },
    phone: {
        type: String,
        maxlength: [
            20,
            "telefonod no mayores a 20"
        ]
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese email valido'
        ]
    },
    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1, 'Calificacion minima: 1 '] ,
        max:[10, 'Calificacion maximo:10']
    }
}) 
module.exports = mongoose.model('bootcamp', BootcampsSchema)
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bootcamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bootcamp.init({   
    name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate:{
      unique(value) {  
        return User.findOne({where:{username:value}})
          .then((username) => {
            if (username) {
              throw new Error('Error hay mas de un nombre asi');
            }
          })
      },
      isAlpha: {
        args: true,
        msg: 'username debe tener solo letras',
      },
      notNull: {
        args: true,
        msg: 'username debe estar presente'
      },
      notEmpty: {
        args: true,
        msg: 'username no debe ser vacio'
      },
    
       
    }
  },
  description:{
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate:{
      unique(value) {  
        return Bootcamp.findOne({where:{name:value}})
          .then((username) => {
            if (username) {
              throw new Error('Error hay mas de un nombre asi');
            }
          })
      },
    notNull: {
      args: true,
      msg: 'username debe estar presente'
    },
    notEmpty: {
      args: true,
      msg: 'username no debe ser vacio'
    },
  }
  },
  website:{
    type:DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate:{
      notNull: {
        args: true,
        msg: 'username debe estar presente'
      },
      notEmpty: {
        args: true,
        msg: 'username no debe ser vacio'
      },
    }
  },
    phone:{
      type: DataTypes.STRING,
      validate:{
        len:{
          args: [10],
          msg:"phone minimo  10 numeros"
        },
      }
    },
    average_rating:{
      type:DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    average_cost:{
      type:DataTypes.FLOAT,
      unique: true,
      allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'Bootcamp',
  });
  return Bootcamp;
};
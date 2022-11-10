'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        unique(value) {  
          return Course.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un title asi');
              }
            })
        },
        isAlpha: {
          args: true,
          msg: 'title debe tener solo letras',
        },
        notNull: {
          args: true,
          msg: 'title debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'title no debe ser vacio'
        },
      
         
      }
    },

    description: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'description debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'description no debe ser vacio'
        },
      }
    },

    weeks:{
      type:DataTypes.INTEGER,
      validate:{
        len:{
          args: [5,5],
          msg:"weeks 5 caracteristicas"
        },
      }
    }, 
    enroll_cost:{
      type:DataTypes.FLOAT,
      validate:{
        isNumeric:{
          args: true,
          msg: 'enroll_cost debe tener solo numeros'
        },
        notEmpty: {
          args: true,
          msg: 'enroll_cost no debe ser vacio'
        }
      }
    },

    minimun_skil: {
      type:DataTypes.STRING,
      validate:{
        isAlpha: {
          args: true,
          msg: '  minimun_skil debe tener solo letras',
        },
        notEmpty: {
          args: true,
          msg: '  minimun_skil no debe ser vacio'
        }
      }
    }
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Course',
  });
  return Course;
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //addColumn: parametros: 
    //             1. la tabla en la cual poner la columna 
    //             2. el nombre de la nueva columna 
    //             3. opciones de la nueva columna 
    await queryInterface.addColumn('bootcamps',
                                    'user_id',{
                                      type: Sequelize.INTEGER,
                                      reference:{
                                        model: 'users',
                                        key: 'id' 
                                      },
                                      onUpdate: 'CASCADE',
                                      onDelete: 'SET NULL'
                                    }    
                                    )
  },

  async down (queryInterface, Sequelize) {
    //METODO REMOVEN COLUMN
    //Parametros:
    //      1. la tabla de donde vas remover
    //      2. la columna a elminar 
    await queryInterface.removeColumn('bootcamps', 'user_id')
  }
};

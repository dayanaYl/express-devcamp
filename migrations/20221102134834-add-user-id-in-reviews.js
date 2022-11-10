'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('reviews', 'bootcamps_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'bootcamps',
        key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    } )

    await queryInterface.addColumn('reviews', 'user_id',{
      type: Sequelize.INTEGER,
      references:{
        model:'users',
        key: 'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
    } )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews', 'bootcamps_id')
    await queryInterface.removeColumn('reviews', 'user_id')
  }
};
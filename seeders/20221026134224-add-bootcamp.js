'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [{
      name: 'php Bootcamp',
      description: 'Bootcamp fot php',
      phone: '6666',
      average_cost:4500,
      average_rating:3,
      user_id:1
     
    },
    {
      name: 'Java  Bootcamp',
      description: 'Bootcamp fot Java ',
      phone: '6666',
      average_cost:4500,
      average_rating:3,
      user_id:2
    },
    {
      name: 'Express Bootcamp',
      description: 'Bootcamp fot Javascript ',
      phone: '6666',
      average_cost:4500,
      average_rating:3,
      user_id:3
    }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};

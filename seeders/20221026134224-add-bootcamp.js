'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('bootcamps', [{
      name: 'Yari',
      description: 'ydcufino@misena.edu.co',
      website: '12345',
      phone: '6666',
     
    },
    {
      name: 'Nicolas',
      description: 'nperaza@misena.edu.co',
      website: '4566',
      phone: '0000'
    },
    {
      name: 'Sindy',
      description: 'syprada@misena.edu.co',
      website: '7890',
      phone:'7685'
    }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  }
};

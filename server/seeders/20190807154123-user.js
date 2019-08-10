// const Helper = require('../helpers/helper')
require('@babel/polyfill')

// const password = Helper.hashPassword('oladimeji1');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstname: 'Abiola',
      lastname: 'Ojo',
      email: 'abiolaojo@gmail.com',
      password: 'oladimeji1',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

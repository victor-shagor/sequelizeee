"use strict";

var _helper = _interopRequireDefault(require("../helpers/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var password = _helper["default"].hashPassword('oladimeji1');

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstname: 'Abiola',
      lastname: 'Ojo',
      email: 'abiolaojo@gmail.com',
      password: password,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
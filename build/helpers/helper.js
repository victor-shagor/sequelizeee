"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable camelcase */
_dotenv["default"].config();

var Helper = {
  hashPassword: function hashPassword(password) {
    return _bcrypt["default"].hashSync(password, _bcrypt["default"].genSaltSync(8));
  },
  comparePassword: function comparePassword(hashPassword, password) {
    return _bcrypt["default"].compareSync(password, hashPassword);
  },
  isValidNumber: function isValidNumber(number) {
    return /^\d+$/.test(number);
  },
  generateToken: function generateToken(user_id, email, is_admin, first_name) {
    var token = _jsonwebtoken["default"].sign({
      user_id: user_id,
      email: email,
      is_admin: is_admin,
      first_name: first_name
    }, process.env.SECRET, {
      expiresIn: '7d'
    });

    return token;
  }
};
var _default = Helper;
exports["default"] = _default;
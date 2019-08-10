"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("../services/users"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var _helper = _interopRequireDefault(require("../helpers/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util = new _Utils["default"]();

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "addUser",
    value: function () {
      var _addUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res) {
        var password, newUser, createUser;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                password = _helper["default"].hashPassword(req.body.password);
                req.body.password = password;
                newUser = req.body;
                _context.prev = 3;
                _context.next = 6;
                return _users["default"].createUser(newUser);

              case 6:
                createUser = _context.sent;
                util.handleSuccess(201, 'User Created', createUser);
                return _context.abrupt("return", util.send(res));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);

                if (!(_context.t0.name === 'SequelizeUniqueConstraintError')) {
                  _context.next = 16;
                  break;
                }

                util.handleError(409, 'Email has already being used');
                return _context.abrupt("return", util.send(res));

              case 16:
                util.handleError(500, 'Something went wrong please try again later');

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      function addUser(_x, _x2) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }()
  }]);

  return UserController;
}();

var _default = UserController; // /* eslint-disable camelcase */
// import Helper from '../helpers/helper';
// import pool from '../config';
// const User = {
//   create(req, res) {
//     const { email, first_name, last_name } = req.body;
//     const is_admin = false;
//     const password = Helper.hashPassword(req.body.password);
//     pool.query('INSERT INTO users (first_name, last_name, email, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING user_id', 
//       [first_name, last_name, email, password, is_admin], (error, results) => {
//         const { user_id } = results.rows[0];
//         const data = {
//           user_id,
//           is_admin,
//           token: Helper.generateToken(user_id, email, is_admin, first_name),
//           email,
//           first_name,
//           last_name,
//         };
//         res.status(201).send({
//           status: 201,
//           data,
//         });
//       });
//   },
//   signin(req, res) {
//     const { email } = req.body;
//     pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
//       const {
//         user_id, is_admin, first_name, last_name,
//       } = results.rows[0];
//       const token = Helper.generateToken(user_id, email, is_admin, first_name);
//       const data = {
//         user_id,
//         is_admin,
//         token,
//         email,
//         first_name,
//         last_name,
//       };
//       res.status(200).send({
//         status: 200,
//         data,
//       });
//     });
//   },
// };
// export default User;

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _expressValidator = require("express-validator");

var _utils = _interopRequireDefault(require("../utils/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var util = new _utils["default"](); // const validate = {

var signUp = [(0, _expressValidator.check)('firstname').not().isEmpty().withMessage('First name is required').trim().isLength({
  min: 3,
  max: 25
}).withMessage('First name should be between 3 to 25 characters').isAlpha().withMessage('First name should contain alphabets only'), (0, _expressValidator.check)('lastname').not().isEmpty().withMessage('Last name is required').trim().isLength({
  min: 3,
  max: 25
}).withMessage('Last name should be between 3 to 25 characters').isAlpha().withMessage('Last name should contain alphabets only'), (0, _expressValidator.check)('email').not().isEmpty().withMessage('Email is required').trim().isEmail().withMessage('Invalid Email Address').customSanitizer(function (email) {
  return email.toLowerCase();
}), (0, _expressValidator.check)('password').not().isEmpty().withMessage('Password is required').trim().isLength({
  min: 5,
  max: 100
}).withMessage('Password must be atleast 8 to 100 characters')]; // ,(req,res,next)=>{
//   const errors = validationResult(req);
//   console.log(errors)
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }
//   next()
// })

var _default = signUp; // /* eslint-disable camelcase */
// import validator from 'validator';
// import Helper from '../helpers/helper';
// import pool from '../config';
// const validateUser = {
//   verifyInput(req, res, next) {
//     const requiredFields = ['first_name', 'last_name', 'email', 'password'];
//     const missingFields = [];
//     requiredFields.forEach((fields) => {
//       if (req.body[fields] === undefined) {
//         missingFields.push(fields);
//       }
//     });
//     if (missingFields.length !== 0) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'The following field(s) is/are required',
//         fields: missingFields,
//       });
//     }
//     const {
//       first_name, last_name, email, password,
//     } = req.body;
//     if (!validator.isAlpha(first_name) || !validator.isAlpha(last_name)) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'Your names can only be in alphabets',
//       });
//     }
//     if (!validator.isEmail(email)) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'please enter a valid email address',
//       });
//     }
//     if (!password || !validator.isLength(password, { min: 5 })) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'Your password cannot be less than 5 characters',
//       });
//     }
//     pool.query('SELECT email FROM users WHERE email = $1 ', [email], (error, results) => {
//       if (results.rows[0]) {
//         return res.status(409).send({
//           status: 'error',
//           error: 'This email has already being used',
//         });
//       }
//       next();
//     });
//   },
//   verifySignin(req, res, next) {
//     const { password, email } = req.body;
//     if (password === undefined || email === undefined) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'Email and password is required',
//       });
//     }
//     if (validator.isEmpty(password) || validator.isEmpty(email)) {
//       return res.status(400).send({
//         status: 'error',
//         error: 'please provide email and password',
//       });
//     }
//     pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
//       if (!results.rows[0] || !Helper.comparePassword(results.rows[0].password, password)) {
//         return res.status(400).send({
//           status: 'error',
//           error: 'Email/password is incorrect',
//         });
//       }
//       return next();
//     });
//   },
// };
// export default validateUser;

exports["default"] = _default;
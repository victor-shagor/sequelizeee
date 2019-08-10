"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("../controllers/users"));

var _userValidations = _interopRequireDefault(require("../middleware/userValidations"));

var _middleware = _interopRequireDefault(require("../middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import User from '../controllers/users';
// import validate from '../middleware/userValidations';
// import {signUp} from '../middleware/userValidations';
var userRouter = _express["default"].Router(); // const { signUp } = validate;
// const { create, signin } = User;


userRouter.route('/api/v1/auth/signup').post(_middleware["default"].validate('signup'), _middleware["default"].checkValidationResult, _users["default"].addUser); // userRouter.route('/api/v1/auth/signin').post(verifySignin, signin);

var _default = userRouter;
exports["default"] = _default;
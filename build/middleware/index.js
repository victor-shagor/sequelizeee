"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = _interopRequireDefault(require("../utils/utils"));

var _expressValidator = require("express-validator");

var _userValidations = _interopRequireDefault(require("./userValidations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util = new _utils["default"]();

var Validate =
/*#__PURE__*/
function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: "validate",
    value: function validate(route) {
      switch (route) {
        case 'signup':
          return _userValidations["default"];
      }
    }
  }, {
    key: "checkValidationResult",
    value: function checkValidationResult(req, res, next) {
      var errors = (0, _expressValidator.validationResult)(req); // console.log(errors.array())

      if (!errors.isEmpty()) {
        var allErrors = [];
        errors.array().forEach(function (error) {
          var errorMessage = error.msg;
          allErrors.push(errorMessage);
        });
        console.log(allErrors);
        util.handleError(400, allErrors);
        return util.send(res);
      }

      return next();
    }
  }]);

  return Validate;
}();

var _default = Validate;
exports["default"] = _default;
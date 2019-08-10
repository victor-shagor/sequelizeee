"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _postRouter = _interopRequireDefault(require("./routes/postRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use('/', _userRouter["default"]); // app.use('/', postRouter);

app.get('/', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to Post it'
  });
});
app.use('*', function (req, res) {
  return res.status(404).send({
    message: 'route not found'
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening from port ".concat(port));
});
var _default = app;
exports["default"] = _default;
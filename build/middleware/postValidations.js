"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _helper = _interopRequireDefault(require("../helpers/helper"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable camelcase */
var validateTrip = {
  verifyCreate: function verifyCreate(req, res, next) {
    var _req$body = req.body,
        title = _req$body.title,
        body = _req$body.body;

    if (!title || !body) {
      return res.status(400).send({
        status: 'error',
        error: 'title and body is required to create a post'
      });
    }

    return next();
  },
  verifyDel: function verifyDel(req, res, next) {
    var decoded = _jsonwebtoken["default"].decode(req.headers['token'], {
      complete: true
    });

    var post_id = req.params.post_id;

    if (!_helper["default"].isValidNumber(post_id)) {
      return res.status(400).send({
        status: 'error',
        error: 'id can only be a number'
      });
    }

    _config["default"].query('SELECT * FROM posts WHERE owner_id =$1 AND post_id =$2', [decoded.payload.user_id, post_id], function (error, results) {
      if (!results.rows[0]) {
        return res.status(404).send({
          status: 'error',
          error: 'post not on your post list'
        });
      }

      return next();
    });
  },
  verifyGet: function verifyGet(req, res, next) {
    var decoded = _jsonwebtoken["default"].decode(req.headers['token'], {
      complete: true
    });

    var post_id = req.params.post_id;

    if (!_helper["default"].isValidNumber(post_id)) {
      return res.status(400).send({
        status: 'error',
        error: 'id can only be a number'
      });
    }

    _config["default"].query('SELECT * FROM posts WHERE post_id =$1', [post_id], function (error, results) {
      if (!results.rows) {
        return res.status(404).send({
          status: 'error',
          error: 'post not found'
        });
      }

      return next();
    });
  }
};
var _default = validateTrip;
exports["default"] = _default;
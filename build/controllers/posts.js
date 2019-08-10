"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable camelcase */
var post = {
  create: function create(req, res) {
    var decoded = _jsonwebtoken["default"].decode(req.headers['token'], {
      complete: true
    });

    var _req$body = req.body,
        title = _req$body.title,
        body = _req$body.body;

    _config["default"].query('INSERT INTO posts (title, body, created_at, owner, owner_id) VALUES($1, $2, $3, $4, $5) RETURNING *', [title, body, new Date(), decoded.payload.first_name, decoded.payload.user_id], function (error, result) {
      if (error) {
        throw error;
      }

      _config["default"].query('INSERT INTO notifications (post_id, owner, created_at) VALUES($1, $2, $3)', [result.rows[0].post_id, result.rows[0].owner, result.rows[0].created_at], function (error, results) {
        if (error) {
          throw error;
        }

        res.status(201).send({
          status: 'success',
          data: result.rows[0]
        });
      });
    });
  },
  getPosts: function getPosts(req, res) {
    _config["default"].query('SELECT * FROM posts', function (error, results) {
      return res.status(200).send({
        status: 'success',
        data: results.rows
      });
    });
  },
  get: function get(req, res) {
    var post_id = req.params.post_id;

    _config["default"].query('SELECT * FROM posts WHERE post_id =$1', [post_id], function (error, results) {
      return res.status(200).send({
        status: 'success',
        data: results.rows[0]
      });
    });
  },
  getNotifications: function getNotifications(req, res) {
    _config["default"].query('SELECT * FROM Notifications', function (error, results) {
      return res.status(200).send({
        status: 'success',
        data: results.rows
      });
    });
  },
  deletePost: function deletePost(req, res) {
    var id = parseInt(req.params.post_id);

    var decoded = _jsonwebtoken["default"].decode(req.headers['token'], {
      complete: true
    });

    _config["default"].query('DELETE FROM posts WHERE owner_id =$1 AND post_id =$2 RETURNING *', [decoded.payload.user_id, id], function (error, result) {
      res.status(200).send({
        status: 'success',
        data: result.rows[0]
      });
    });
  }
};
var _default = post;
exports["default"] = _default;
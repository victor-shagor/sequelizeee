/* eslint-disable camelcase */
import validator from 'validator';
import jwt from 'jsonwebtoken';

import Helper from '../helpers/helper';
import pool from '../config';


const validateTrip = {
  verifyCreate(req, res, next) {
    const {
      title, body
    } = req.body;

    if (!title || !body) {
      return res.status(400).send({
        status: 'error',
        error: 'title and body is required to create a post',
      });
    }
      return next();
  },
  verifyDel(req, res, next) {
    const decoded = jwt.decode(req.headers['token'], { complete: true });
    const { post_id } = req.params;
    if (!Helper.isValidNumber(post_id)) {
      return res.status(400).send({
        status: 'error',
        error: 'id can only be a number',
      });
    }
    pool.query('SELECT * FROM posts WHERE owner_id =$1 AND post_id =$2', [decoded.payload.user_id, post_id], (error, results) => {
      if (!results.rows[0]) {
        return res.status(404).send({
          status: 'error',
          error: 'post not on your post list',
        });
      }
      return next();
    });
  },
  verifyGet(req, res, next) {
    const decoded = jwt.decode(req.headers['token'], { complete: true });
    const { post_id } = req.params;
    if (!Helper.isValidNumber(post_id)) {
      return res.status(400).send({
        status: 'error',
        error: 'id can only be a number',
      });
    }
    pool.query('SELECT * FROM posts WHERE post_id =$1', [post_id], (error, results) => {
      if (!results.rows) {
        return res.status(404).send({
          status: 'error',
          error: 'post not found',
        });
      }
      return next();
    });
  },
};
export default validateTrip;

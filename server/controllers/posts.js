// /* eslint-disable camelcase */
// import jwt from 'jsonwebtoken';

// import pool from '../config';

// const post = {
//   create(req, res) {
//     const decoded = jwt.decode(req.headers['token'], { complete: true });
//     const { title, body } = req.body;
//     pool.query('INSERT INTO posts (title, body, created_at, owner, owner_id) VALUES($1, $2, $3, $4, $5) RETURNING *',[title, body, new Date(), decoded.payload.first_name, decoded.payload.user_id], (error, result) => {
//         if(error){
//           throw error
//         }
//         pool.query('INSERT INTO notifications (post_id, owner, created_at) VALUES($1, $2, $3)',
//       [result.rows[0].post_id, result.rows[0].owner, result.rows[0].created_at], (error, results) => {
//         if(error){
//           throw error
//         }
//         res.status(201).send({
//           status: 'success',
//           data: result.rows[0],
//         });
//       });
//     })
//   },
//   getPosts(req, res) {
//     pool.query('SELECT * FROM posts', (error, results) => {
//       return res.status(200).send({
//         status: 'success',
//         data: results.rows,
//       });
//     });
//   },
//   get(req, res) {
//     const {post_id} = req.params
//     pool.query('SELECT * FROM posts WHERE post_id =$1',[post_id], (error, results) => {
//       return res.status(200).send({
//         status: 'success',
//         data: results.rows[0],
//       });
//     });
//   },
//   getNotifications(req, res) {
//     pool.query('SELECT * FROM Notifications', (error, results) => {
//       return res.status(200).send({
//         status: 'success',
//         data: results.rows,
//       });
//     });
//   },
//   deletePost(req, res) {
//     const id = parseInt(req.params.post_id);
//     const decoded = jwt.decode(req.headers['token'], { complete: true });
//     pool.query('DELETE FROM posts WHERE owner_id =$1 AND post_id =$2 RETURNING *', [decoded.payload.user_id, id], (error, result) => {
//       res.status(200).send({
//         status: 'success',
//         data: result.rows[0],
//       });
//     });
//   },
// };
// export default post;
 
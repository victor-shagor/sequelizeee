import UserServices from '../services/users';
import Util from '../utils/utils';
import helper from '../helpers/helper';

const util = new Util();

class UserController{
 static async addUser(req, res){
  const password = helper.hashPassword(req.body.password)
  req.body.password = password
  const newUser = req.body;
   try{
     const createUser = await UserServices.createUser(newUser)
     util.handleSuccess(201, 'User Created', createUser)
     return util.send(res)
   }catch(error){
     console.log(error)
    if(error.name === 'SequelizeUniqueConstraintError'){
      util.handleError(409, 'Email has already being used')
      return util.send(res)
    }
    util.handleError(500, 'Something went wrong please try again later')
    util.send(res)
   }
 }
}
export default UserController






// /* eslint-disable camelcase */
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

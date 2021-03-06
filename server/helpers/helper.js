/* eslint-disable camelcase */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const Helper = {
  hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  },
  comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  },
  isValidNumber(number) {
    return /^\d+$/.test(number);
  },
  generateToken(user_id, email, is_admin, first_name) {
    const token = jwt.sign({
      user_id,
      email,
      is_admin,
      first_name
    },
    process.env.SECRET, { expiresIn: '7d' });
    return token;
  },
};

export default Helper;

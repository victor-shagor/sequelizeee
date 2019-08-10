import express from 'express';

// import User from '../controllers/users';
// import validate from '../middleware/userValidations';
import UserController from '../controllers/users';
// import {signUp} from '../middleware/userValidations';
import signUp from '../middleware/userValidations'
import Validate from '../middleware'


const userRouter = express.Router();

// const { signUp } = validate;
// const { create, signin } = User;


userRouter.route('/api/v1/auth/signup').post(Validate.validate('signup'), Validate.checkValidationResult, UserController.addUser);
// userRouter.route('/api/v1/auth/signin').post(verifySignin, signin);


export default userRouter;

import Util from '../utils/utils';
import { validationResult } from 'express-validator';
import signUp from './userValidations'

const util = new Util()

class Validate {
 
 static validate(route) {
   switch (route) {
     case 'signup':
       return signUp;
   }
  }
  static checkValidationResult(req, res, next) {
   const errors = validationResult(req);
   // console.log(errors.array())
   if (!errors.isEmpty()) {
    const allErrors = []
    errors.array().forEach((error) => {
     const errorMessage = error.msg
     allErrors.push(errorMessage)
    })
    console.log(allErrors)
    util.handleError(400, allErrors);
    return util.send(res)
   }
   return next()
 }
}
export default Validate
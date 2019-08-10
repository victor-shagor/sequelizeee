import database from '../models';
import '@babel/polyfill'

class UserServices{
 static async createUser(newUser) {
  try{
   return await database.User.create(newUser)
  }catch(error){
   throw error
  }
 }
 static async getUser(email) {
  try{
   const user = await database.User.findOne({
    where: {email}
   })
   return user
  }catch(error){
   throw error
  }
 }
}
export default UserServices
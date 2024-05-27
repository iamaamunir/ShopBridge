import User from "../models/userModel.js";
import omit from 'lodash'
import RESPONSE_MESSAGE from "../../constant/index.js";
import ConflictError from "../../utils/customErrors.js";
const registerAccountService = async (payload) => {
  let account = await User.findOne({ email: payload.email });
  if (account) {
    throw new ConflictError(RESPONSE_MESSAGE.CONFLICT)
  }
  
  account = await User.create({
    firstname: payload.firstname,
    lastname: payload.lastname,
    email: payload.email,
    mobile: payload.mobile,
    password: payload.password
  }); 
   const { password, ...accountWithoutPassword } = account.toObject
     ? account.toObject()
     : account;
  return accountWithoutPassword;
  // account = omit(account.toObject(), "password");
  // return {
  //   user: account
  // };
}

  export default registerAccountService

import User from "../models/userModel.js";
import RESPONSE_MESSAGE from "../../constant/index.js";
import * as customErrors from "../../utils/customErrors.js";
import CONFIG from "../../config/default.js";
import jwt from "jsonwebtoken";

export const registerAccountService = async function (payload) {
  let account = await User.findOne({ email: payload.email });
  if (account) {
    throw new customErrors.ConflictError(RESPONSE_MESSAGE.CONFLICT);
  }

  account = await User.create({
    firstname: payload.firstname,
    lastname: payload.lastname,
    email: payload.email,
    mobile: payload.mobile,
    password: payload.password,
  });

 
  const { password,__v, ...accountWithoutPassword } = account.toObject
    ? account.toObject()
    : account;
  return accountWithoutPassword;
};

export const loginAccountService = async function(payload) {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new customErrors.invalidCredentials(
      RESPONSE_MESSAGE.INVALIDCRENDENTIALS
    );
  }
  const validPassword = await user.comparePassword(payload.password);
  if (validPassword) {
    const token = jwt.sign({ id: user._id, email: user.email }, CONFIG.TOKEN_KEY, {
      expiresIn: "2h",
    });

    user.token = token;
    return token
  } else {
    throw new customErrors.invalidCredentials(RESPONSE_MESSAGE.INVALIDCRENDENTIALS);
  }
};


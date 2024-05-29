// import omit from "lodash";
import responseHandler from "../../utils/responseHandler.js";

import RESPONSE_MESSAGE from "../../constant/index.js";

import * as accountServices from "../services/authServices.js";



export const registerAccount = async function (req, res, next) {
  const payload = { ...req.body };
  try {
    let registrationData = await accountServices.registerAccountService(payload);
    return new responseHandler(
      res,
      registrationData,
      201,
      RESPONSE_MESSAGE.CREATE_SUCCESSFUL
    );
  } catch (error) {
    next(error);
  }
};

export const loginAccount = async function(req, res, next) {
  const payload = { ...req.body }
  try {
    let userDetails = await accountServices.loginAccountService(payload);
    return new responseHandler(
      res,
      userDetails,
      200,
      RESPONSE_MESSAGE.LOGIN_SUCCESSFUL
    );
  }
  catch (error) {
    next(error)
  }
}

export default registerAccount;

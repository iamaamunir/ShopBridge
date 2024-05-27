// import omit from "lodash";
import responseHandler from "../../utils/responseHandler.js";

import RESPONSE_MESSAGE from "../../constant/index.js";

import registerAccountService from "../services/authServices.js";
import ConflictError from "../../utils/customErrors.js";

const registerAccount = async (req, res, next) => {
  const payload = { ...req.body };
  try {
    let registrationData = await registerAccountService(payload);
    // omit user password- to be done later
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

export default registerAccount;

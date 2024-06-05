import * as accountServices from "../services/accountServices.js"
import RESPONSE_MESSAGE from "../../constant/index.js";
import responseHandler from "../../utils/responseHandler.js";
export const getAccounts = async function (req, res) {
  const { data, meta } = await accountServices.getAccounts(req)
  const sanitizedData = data.map((account) => {
    const { password, ...rest } = account.toObject
      ? account.toObject()
      : account;
    return rest;
  });
   new responseHandler(res, sanitizedData, 200, RESPONSE_MESSAGE.SUCCESS, meta);
}
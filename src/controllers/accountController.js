import * as accountServices from "../services/accountServices.js";
import RESPONSE_MESSAGE from "../../constant/index.js";
import responseHandler from "../../utils/responseHandler.js";

export const getAccounts = async function (req, res, next) {
  const { data, meta } = await accountServices.getAccounts(req);
  try {
    // refractor later
    const sanitizedData = data.map((account) => {
      const { password, ...rest } = account.toObject
        ? account.toObject()
        : account;
      return rest;
    });
    new responseHandler(
      res,
      sanitizedData,
      200,
      RESPONSE_MESSAGE.SUCCESS,
      meta
    );
  } catch (error) {
    next(error);
  }
};

export const getAccount = async function (req, res, next) {
  const id = req.params.id;
  try {
    const data = await accountServices.getAccount(id);
    const { password, ...sanitizedAccount } = data.toObject
      ? data.toObject()
      : data;
    new responseHandler(res, sanitizedAccount, 200, RESPONSE_MESSAGE.SUCCESS);
  } catch (error) {
    next(error);
  }
};

export const deleteAccount = async function (req, res, next) {
  try {
    const id = req.user.id
    const deletedAccount = await accountServices.deleteAccount(
      id,
      req.body.password
    );
    new responseHandler(res, deletedAccount, 200, RESPONSE_MESSAGE.SUCCESS);
  }
  catch (error) {
    next(error)
  }
};

import User from "../models/userModel.js";
import APIFeatures from "../../utils/apiFeatures.js";
import * as customErrors from "../../utils/customErrors.js";
import RESPONSE_MESSAGE from "../../constant/index.js";
import  verifyCredentials  from "../../utils/helper.js";

export const getAccounts = async function ({ query }) {
  try {
    const accountsQuery = User.find({});
    const accounts = await new APIFeatures(accountsQuery, query)
      .sort()
      .paginate();
    return accounts;
  } catch (error) {
    throw new customErrors.NotFoundError(RESPONSE_MESSAGE.NOT_FOUND);
  }
};

export const getAccount = async function (id, next) {
  try {
    const account = await User.findById(id);
    return account;
  } catch (error) {
    throw new customErrors.NotFoundError(RESPONSE_MESSAGE.NOT_FOUND);
  }
};

export const deleteAccount = async function (id, password) {
  try {
    const account = await User.findById({ _id: id });
    if (!account) {
      throw new customErrors.NotFoundError(RESPONSE_MESSAGE.NOT_FOUND);
    }
    const deletedAccount = await verifyCredentials(account.email, password);
    if (!deletedAccount) {
      throw new customErrors.invalidCredentials(
        RESPONSE_MESSAGE.INVALIDCRENDENTIALS
      );
    }
    
    const accountDel = await User.findByIdAndDelete({ _id: id });
    // add later to user model
    //    account.isDeleted = true;
    // account.save();

    return accountDel;
  } catch (error) {
    return error;
  }
};

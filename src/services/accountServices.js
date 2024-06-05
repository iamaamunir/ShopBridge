import User from "../models/userModel.js"
import APIFeatures from "../../utils/apiFeatures.js"

export const getAccounts = async function ({ query }) {
  const accountsQuery = User.find({})
  const accounts = await new APIFeatures(accountsQuery, query).sort().paginate()
  return accounts
}
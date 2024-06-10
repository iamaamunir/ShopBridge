import bcryptjs from "bcryptjs";
import User from "../src/models/userModel.js";

async function verifyPassword(plain, hashed) {
  return await bcryptjs.compare(plain, hashed);
}

async function verifyCredentials(email, password) {
  const account = await User.findOne({ email: email }).select("+password");
  if (!account) {
    return false;
  }
  const passwordMatch = await verifyPassword(password, account.password);
  if (!passwordMatch) return false;
  return account;
}

export default verifyCredentials;

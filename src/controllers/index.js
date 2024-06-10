import express from "express";
import verifyToken from "../../utils/verifyToken.js";
import {
  registerAccount,
  loginAccount,
} from "../controllers/userController.js";
import { getAccounts, getAccount, deleteAccount } from "./accountController.js";
const userRouter = express.Router();
userRouter.post("/register", registerAccount);
userRouter.post("/login", loginAccount);
userRouter.get("/accounts", getAccounts);
userRouter.get("/account/:id", getAccount);
userRouter.delete("/account", verifyToken, deleteAccount);

export default userRouter;

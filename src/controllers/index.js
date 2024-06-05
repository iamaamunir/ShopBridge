import express from "express";
import {
  registerAccount,
  loginAccount,
} from "../controllers/userController.js";
import { getAccounts } from "./accountController.js";
const userRouter = express.Router();
userRouter.post("/register", registerAccount);
userRouter.post("/login", loginAccount);
userRouter.get("/accounts", getAccounts);
export default userRouter;

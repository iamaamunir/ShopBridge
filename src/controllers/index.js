import express from "express";
import {registerAccount, loginAccount} from "../controllers/userController.js";

const authRouter = express.Router();
authRouter.post("/register", registerAccount);
authRouter.post("/login", loginAccount);
export default authRouter;

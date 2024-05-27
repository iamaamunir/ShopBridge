import express from "express";
import registerAccount from "../controllers/userController.js";
const authRouter = express.Router();
authRouter.post("/register", registerAccount);

export default authRouter;

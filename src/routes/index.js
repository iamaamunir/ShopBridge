import express from 'express'
import authRouter from '../controllers/index.js'
const indexRouter = express.Router()


indexRouter.use("/auth", authRouter);

export default indexRouter;
import express from 'express'
import userRouter from '../controllers/index.js'
const indexRouter = express.Router()


indexRouter.use("/user", userRouter);

export default indexRouter;
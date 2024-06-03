import express from "express";
import bodyParser from "body-parser";
import authRouter from "../src/routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
// import notFound from "./middlewares/notFound.js";

const app = express();
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", authRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to ShopBridge",
  });
});


// app.use(notFound);

export default app;

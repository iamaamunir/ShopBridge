import jwt from "jsonwebtoken";

import CONFIG from "../config/default.js";

const verifyToken = (req, res, next) => {
  try {
    if (req.headers.authorization === undefined) {
      next();
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, CONFIG.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    next(err);
  }
  return next();
};

export default verifyToken;

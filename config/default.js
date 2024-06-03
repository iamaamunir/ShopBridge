import dotenv from 'dotenv'
dotenv.config();

const CONFIG = {
  PORT: process.env.PORT || 4000,
  MONGODB_URL: process.env.MONGODB_URL,
  TOKEN_KEY : process.env.TOKEN_KEY
}

export default CONFIG
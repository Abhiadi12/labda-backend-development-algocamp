import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 3000,
<<<<<<< HEAD
  REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379", 10),
  REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1'
=======
>>>>>>> c690deaf2646bc50f1b3baae34a144444c43ac08
};

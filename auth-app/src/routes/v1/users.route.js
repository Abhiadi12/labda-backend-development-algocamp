const express = require("express");
const { userController } = require("../../controllers/v1/index");

const userRouter = express.Router();
userRouter.get("/ping", userController.pingUserController);

module.exports = userRouter;

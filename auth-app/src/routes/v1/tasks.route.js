const express = require("express");
const { taskController } = require("../../controllers/v1/index");

const taskRouter = express.Router();
taskRouter.get("/ping", taskController.pingTaskController);

module.exports = taskRouter;

const express = require("express");
const userRouter = require("./users.route");
const taskRouter = require("./tasks.route");
const categoryRoute = require("./categories.route");

const v1Router = express.Router();

v1Router.use("/users", userRouter);
v1Router.use("/tasks", taskRouter);
v1Router.use("/categories", categoryRoute);

module.exports = v1Router;

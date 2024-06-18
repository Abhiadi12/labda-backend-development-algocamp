const express = require("express");
const { categoryController } = require("../../controllers/v1/index");

const categoryRoute = express.Router();
categoryRoute.get("/ping", categoryController.pingCategoryController);

module.exports = categoryRoute;

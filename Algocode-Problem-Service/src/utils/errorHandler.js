const BaseError = require("../error/base.error");
const { StatusCodes } = require("http-status-codes");

function errorHandler(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      error: err.details,
      data: null,
    });
  }

  return res.status(StatusCodes.INSUFFICIENT_STORAGE).json({
    success: false,
    message: "Something went wrong",
    error: err,
    data: {},
  });
}

module.exports = errorHandler;

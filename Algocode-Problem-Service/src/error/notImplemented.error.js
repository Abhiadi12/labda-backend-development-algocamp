const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplemented extends BaseError {
  constructor(methodName, details = {}) {
    super(
      "NotImplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not Implemented.`,
      details
    );
  }
}

module.exports = NotImplemented;

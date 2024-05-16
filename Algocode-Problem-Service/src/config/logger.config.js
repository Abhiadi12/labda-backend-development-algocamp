const winston = require("winston");
const dayjs = require("dayjs");
const fs = require("fs");
const path = require("path");

const logDirectory = "logs";
//ensure the directory exists
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const getFormattedDate = () => dayjs().format("DD-MM-YYYY");

const dailyRotateFileTransport = new winston.transports.File({
  filename: path.join(logDirectory, `${getFormattedDate()}.log`),
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) =>
        `${log.timestamp} [${log.level.toLocaleUpperCase()}]: ${log.message}`
    )
  ),
});

const allowedTransports = [];
allowedTransports.push(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) =>
          `${log.timestamp} [${log.level.toLocaleUpperCase()}] ${log.message}`
      )
      // winston.format.colorize(),
      // winston.format.simple()
    ),
  })
);

allowedTransports.push(dailyRotateFileTransport);

const logger = winston.createLogger({
  format: winston.format.combine(
    //First argument to the combine method os defining how we want the timestamp to come up
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) =>
        `${log.timestamp} [${log.level.toLocaleUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;

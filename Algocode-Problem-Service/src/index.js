const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("./utils/errorHandler");
const connectToDB = require("./config/db.config");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//If any request comes and route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Servive is alive" });
});

//Override the default error middleware of the express and it is the last middleware
//It only executes when some error occurs
//4 parameters and first start with err
app.use(errorHandler);
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server started at PORT: ${PORT}`);
});

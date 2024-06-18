const express = require("express");
const bodyParser = require("body-parser");
const connectToDB = require("./config/dbConfig");
const apiRouter = require("./routes/index");

const { PORT } = require("./config/server.config");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use("/v1", apiRouter);
app.get("/ping", (req, res) => {
  return res.json({ message: "Problem Servive is alive" });
});

app.listen(PORT, async () => {
  connectToDB();
  console.log(`Server started at PORT: ${PORT}`);
});

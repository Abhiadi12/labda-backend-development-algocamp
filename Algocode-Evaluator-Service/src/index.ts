import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig";
import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app: Express = express();

app.use("/api", apiRouter);
app.use("bullmq-ui", bullBoardAdapter.getRouter());

app.get("/", (__, res) => {
  return res.send("hello express ts server abhisek-bidisha");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
  SampleWorker("SampleQueue");
  console.log(
    `Bullboard dashboard running on: http://localhost:${serverConfig.PORT}/bullmq-ui`
  );
});

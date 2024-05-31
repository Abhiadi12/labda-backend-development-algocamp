import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";
import bullBoardAdapter from "./config/bullBoardConfig";

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

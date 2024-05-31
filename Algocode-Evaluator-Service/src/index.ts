import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app: Express = express();

app.use("/api", apiRouter);
app.get("/", (__, res) => {
  return res.send("hello express ts server abhisek-bidisha");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
  SampleWorker("SampleQueue");

  sampleQueueProducer("SampleJob", {
    name: "Abhisek",
    company: "mindfire",
    position: "SDE 1",
    location: "Banglore",
  });
});

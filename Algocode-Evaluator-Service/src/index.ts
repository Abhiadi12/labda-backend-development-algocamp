import express, { Response } from "express";
import serverConfig from "./config/serverConfig";

const app = express();

app.get("/", (__, res: Response) => {
  return res.send("hello express ts server abhisek-bidisha");
});

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
});

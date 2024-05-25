<<<<<<< HEAD
import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";


const app: Express = express();

app.use('/api', apiRouter);
=======
import express, { Response } from "express";
import serverConfig from "./config/serverConfig";

const app = express();

app.get("/", (__, res: Response) => {
  return res.send("hello express ts server abhisek-bidisha");
});
>>>>>>> c690deaf2646bc50f1b3baae34a144444c43ac08

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *:${serverConfig.PORT}`);
});

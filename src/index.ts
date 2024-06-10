import "dotenv/config";
import "reflect-metadata";
import "express-async-errors";
import { AppDataSource } from "./data-source";
import express from "express";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { ServerError } from "./helpers/api-error";
import routes from "./routes";

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(routes);

    app.use(errorMiddleware);
    return app.listen(process.env.PORT);
  })
  .catch((error: any) => {
    throw new ServerError(error.message);
  });

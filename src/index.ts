import express from "express";
import cors from "cors";
import compression from "compression";
import { config } from "dotenv";
import { router as baseRouter, path as basePath } from "./routes";
import { config as Config } from "./config";
import { ContainerBuilder } from "node-dependency-injection";
import { di } from "./services";


declare global {
    namespace Express {
      interface Request {
        container: ContainerBuilder;
      }
    }
  }

const app = express();
app.use(express.static("public"));
config();
const PORT: string | number = Config.PORT;
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(compression());
app.use<string, unknown>("*", cors());
export { app, di, PORT, baseRouter, basePath };

import { router as baseRouter, path as basePath } from "./base";
import { Router } from "express";
import cors from "cors";                    

const router = Router();
const path = "/api/";
router.use(basePath, cors(), baseRouter); 
export { router, path };

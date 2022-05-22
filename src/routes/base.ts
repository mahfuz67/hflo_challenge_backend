import { Router } from "express";
import { ApiPath } from "../types";
import { getCycleData } from "../controllers";

const router = Router();
const path = "/";
router.post(ApiPath.GET_CYCLE_DATA, getCycleData);
export { router, path };

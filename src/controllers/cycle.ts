import { Request, Response } from "express";
import { ResponseService } from "../services/response";
import { CustomError } from "../errors";
import { CycleService } from "../services/cycle";

const getCycleData = async (req: Request, res: Response) => {
    const container = req.container;
    const responseService = container.get("service.responseService") as ResponseService;
    try {
        const cycleService = container.get("service.cycleService") as CycleService;
        const resObj = await cycleService.getCycledDataForXCycles(req.body);
        res.status(200).json(resObj)
    } catch (err) {
       res.status(200).json(responseService.createErrorResponse(err as CustomError)); 
    }
}


export { getCycleData };
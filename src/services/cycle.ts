import { RequestBody } from "src/types";
import moment from 'moment';
import { CustomError } from "../errors";
import { ResponseService } from "./response";


export class CycleService {

    private _responseService: ResponseService;

    constructor(
        responseService: ResponseService,
    ) {
        this._responseService = responseService;
    }

    public async getCycledDataForXCycles(data: RequestBody) {
        try {
        const averageLengthOfCircle = data.averageLengthCycle;
        const averageLengthOfPeriod = data.averageLengthPeriod;
        const cycle = data.cycle ?? 3;
        const cycleInfoArray = [];

        for (let i = 0; i < cycle; i++) {
            //menstrual
            const startDayM = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days');
            const endDayM = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfPeriod - 1), 'days');
            const periodM = averageLengthOfPeriod;

            //luteal
            const endDayL = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfCircle - 1), 'days');
            const periodL = parseInt((0.4 * averageLengthOfCircle).toString().split('.')[0]);
            const startDayL = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfCircle - 1), 'days').subtract((periodL - 1), 'days');

            //ovulatory
            const endDayO = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfCircle - 1), 'days').subtract((periodL - 1), 'days').subtract((1), 'days');
            const periodO = 4;
            const startDayO = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfCircle - 1), 'days').subtract((periodL - 1), 'days').subtract((1), 'days').subtract((periodO - 1), 'days');

            //follicular
            const startDayF = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfPeriod - 1), 'days').add((1), 'days');
            const endDayF = moment(data.lastPeriod).add(averageLengthOfCircle * (i), 'days').add((averageLengthOfCircle - 1), 'days').subtract((periodL - 1), 'days').subtract((1), 'days').subtract((periodO - 1), 'days').subtract((1), 'days');
            const periodF = averageLengthOfCircle - periodM - periodO - periodL;
            cycleInfoArray.push({
                menstrual: {
                    startDay: startDayM.toISOString(),
                    endDay: endDayM.toISOString(),
                    period: periodM,
                },
                follicular: {
                    startDay: startDayF.toISOString(),
                    endDay: endDayF.toISOString(),
                    period: periodF,
                },
                ovulatory: {
                    startDay: startDayO.toISOString(),
                    endDay: endDayO.toISOString(),
                    period: periodO,
                },
                luteal: {
                    startDay: startDayL.toISOString(),
                    endDay: endDayL.toISOString(),
                    period: periodL,
                },
            })
        }
        return this._responseService.createSuccessResponse(
            `Cycle info for ${cycle} cycles!`,
            cycleInfoArray,
          );
        } catch (e) {
            return this._responseService.createErrorResponse(e as CustomError);
          }
    }

}
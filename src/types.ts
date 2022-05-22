export type ResponseData =
    | string
    | [{ [key: string]: string | number }]
    | number
    | boolean;


export enum ApiPath {
    GET_CYCLE_DATA = "/get-cycle-data",
}

export type RequestBody = {
    lastPeriod: string;
    averageLengthPeriod: number;
    averageLengthCycle: number;
    cycle?: number;
}





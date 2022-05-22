export interface ICycleInfo {
    menstrual: IPhaseInfo;
    follicular: IPhaseInfo;
    ovulatory: IPhaseInfo;
    luteal: IPhaseInfo;
}

export interface IPhaseInfo {
    startDay: string;
    endDay: string;
    period: number;
}
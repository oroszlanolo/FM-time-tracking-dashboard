export interface TimeFrame {
    current: number,
    previous: number
}

export interface TrackCategory {
    title: string,
    timeframes: {[id:string]: TimeFrame}
}

export enum ReportRange {
    daily,
    weekly,
    monthly
}

export enum weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Coludy = 'coludy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'

}

export interface diaryEntry {
    id: number,
    date: string,
    weather: weather,
    visibility: Visibility,
    comment: string
}

//export type NonSensitiveInfoDiaryEntry = pick<diaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<diaryEntry, 'commment'>
export type newDiaryEntry = Omit<diaryEntry, 'id'>
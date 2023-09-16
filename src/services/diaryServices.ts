import { diaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: diaryEntry[] = diaryData as diaryEntry[]

export const getEntries = (): diaryEntry[]  => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = ():NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility, comment}) => {
        return {
            id,
            date,
            weather,
            visibility,
            comment
        }
    })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): diaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) +1,
       ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}

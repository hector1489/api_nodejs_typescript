import { newDiaryEntry, weather, Visibility  } from "./types"

const parseComment = (commentFromRequest: any): string => {
    if (!isString(typeof commentFromRequest)) {
        throw new Error('incorrect or missing comment')
    }
    return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date')
    }
    return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('incorrect or missing Weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('incorrect or missing Visibility')
    }
    return visibilityFromRequest
}

const isWeather = (param: any): boolean => {
    return Object.values(weather).includes(param)
}

const isString = (string: string): boolean => {
    return typeof string === 'string'
}

const isDate = (date: string): boolean => {
    return !isNaN(Date.parse(date))
}

const isVisibility = (param: any): boolean => {
    return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
        // ...
    };
    return newEntry;
};

export default toNewDiaryEntry
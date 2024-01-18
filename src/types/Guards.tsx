// IMPORTING NECESSARY TYPES
import {MovieDataType} from "./Types"

// A GUARD TO VALIDATA IF DATA IS OF THE MOVIE TYPE
export function arrayHasMovies(array: unknown): array is MovieDataType[]{
    if(Array.isArray(array) && array.length){
        return array.every(item => (
            typeof item === "object" && item !== null &&
            "Title" in item && typeof item.Title === "string" &&
            "Year" in item && typeof item.Year === "string" &&
            "imdbID" in item && typeof item.imbdID === "string" &&
            "Type" in item && typeof item.Type === "string" &&
            "Poster" in item && typeof item.Poster === "string"
        ))
    }

    return false
}
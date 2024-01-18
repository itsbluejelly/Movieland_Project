// IMPORTING NECESSARY GENERICS
import {ObjectGenerator} from "./Generics"

// DECLARING A TYPE FOR THE APPFORMDATA
export type AppFormData = { name: string }
// DECLARING A TYPE FOR THE MOVIEDATA
export type MovieDataType = ObjectGenerator<"Title" | "Year" | "imdbID" | "Type" | "Poster", string>
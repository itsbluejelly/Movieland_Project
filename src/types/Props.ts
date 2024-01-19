// IMPORTING NECESSARY FILES
    // IMPORTING TYPES
import {AppFormData, MovieDataType} from "./Types"
    // IMPORTING GENERICS
import {ObjectEmitter} from "./Generics"

// DECLARING PROPS FOR THE INPUTBAR COMPONENT
export type InputBarProps = {
    formData: AppFormData,
    handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    loading: boolean,
    fetchData: (searchString: string) => Promise<void>
}

// DECLARING PROPS FOR THE MOVIE COMPONENT
export type MovieProps = ObjectEmitter<MovieDataType, "imdbID">
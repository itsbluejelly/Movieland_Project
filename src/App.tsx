// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING TYPES
import {AppFormData} from "./types/Types"
    // IMPORTING COMPONENTS
import InputBar from "./components/InputBar"
    // IMPORTING GUARDS
import {arrayHasMovies} from "./types/Guards"

// A VARIABLE TO HOLD THE API URL
const API_URL: string = "http://www.omdbapi.com/?apikey=86d3b8e1"

// DECLARING A FUNCTION THAT RETURNS AN APP COMPONENT
export default function App() {
    // DECLARING STATES
        // A STATE TO KEEP TRACK OF THE FORM DATA
    const [formData, setFormData] = React.useState<AppFormData>({ name: "" })
        // A STATE TO TRACK WHETHER THE SEARCH BUTTON IS ACTIVE OR NOT
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    // A FUNCTION TO HANDLE THE FORM DATA
    function handleFormData(e: React.ChangeEvent<HTMLInputElement>): void{
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A FUNCTION TO FETCH THE MOVIE DATA
    async function fetchMovieData(): Promise<void>{
        setIsLoading(true)

        try{
            const res: Response = await fetch(`${API_URL}&s=${formData.name}`)
            const {Search, Response} = await res.json()

            if(Response === "False"){
                throw new Error("Error obtained in fetching movie data")
            }else if(!arrayHasMovies(Search)){
                throw new Error("The data obtained is not of the required movie format")
            }

            console.log(Search, Response)
        }catch(error: unknown){
            console.error(`${(error as Error).name}: ${(error as Error).message}`)
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            
            <InputBar
                formData={formData}
                handleFormData={handleFormData}
                loading={isLoading}
                fetchData={fetchMovieData}
            />
        </div>
    )
}
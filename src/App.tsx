// IMPORTING NECESSARY FILES
    // IMPORTING MODULES
import React from "react"
    // IMPORTING TYPES
import {AppFormData, MovieDataType} from "./types/Types"
    // IMPORTING COMPONENTS
import InputBar from "./components/InputBar"
import Movie from "./components/Movie"
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
        // A STATE TO KEEP TRACK OF THE MOVIE DATA
    const [movies, setMovies] = React.useState<MovieDataType[]>([])
        // A STATE TO KEEP TRACK OF ERRORS
    const [error, setError] = React.useState<string>('')

    // A FUNCTION TO HANDLE THE FORM DATA
    function handleFormData(e: React.ChangeEvent<HTMLInputElement>): void{
        const {name, value} = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A FUNCTION TO FETCH THE MOVIE DATA
    const fetchMovieData: (searchString: string) => Promise<void> = React.useCallback(async(searchString) => {
        setIsLoading(true)
        setError('')

        try{
            const res: Response = await fetch(`${API_URL}&s=${searchString}`)
            const {Search, Response, Error: error} = await res.json()

            if(Response === "False"){
                throw new Error(error)
            }else if(!arrayHasMovies(Search)){
                throw new Error("The data obtained is not of the required movie format")
            }

            setMovies(Search)
        }catch(error: unknown){
            setError(`${(error as Error).name}: ${(error as Error).message}`)
        }finally{
            setIsLoading(false)
        }
    }, [])

    // A USEEFFECTHOOK TO FTCH THE DATA ON FIRST LOAD
    React.useEffect(() => {
        const currentYear: number = new Date().getFullYear()
        fetchMovieData(currentYear.toString())
    }, [fetchMovieData])

    // A FUNCTION TO GENERATE AN ARRAY OF MOVIES
    const generateMoviesArray: JSX.Element[] = React.useMemo(() => movies.map(movie => <Movie
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
        Poster={movie.Poster}
        key={movie.imdbID}
    />), [movies])

    return (
        <div className="app">
            <h1>MovieLand</h1>
            
            <InputBar
                formData={formData}
                handleFormData={handleFormData}
                loading={isLoading}
                fetchData={fetchMovieData}
            />

            {
                isLoading || error
                    ?
                <div className="empty">
                    <h2>{error ? error : "Loading..."}</h2>
                </div>
                    :
                <div className={movies.length ? "container" : "empty"}>
                    {
                        movies.length
                            ?
                        generateMoviesArray
                            :
                        <h2>No movies found😥</h2>
                    }
                </div>
            }
        </div>
    )
}
// IMPORTING NECESSARY PROPS
import {MovieProps} from "../types/Props"

// DECLARING A FUNCTION THAT RETURNS A MOVIE COMPONENT
export default function Movie(props: MovieProps){
    return(
        <div className="container">
            <div className="movie">
                <div>
                    <p>{props.Year}</p>
                </div>

                <div>
                    <img
                        src={props.Poster}
                        title={props.Title}
                        alt={props.Title}
                        loading="lazy"
                        width={100}
                    />
                </div>

                <div>
                    <span>{props.Type}</span>
                    <span>{props.Title}</span>
                </div>
            </div>
        </div>
    )
}
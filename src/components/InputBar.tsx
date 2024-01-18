// IMPORTING NECESSARY PROPS
import {InputBarProps} from "../types/Props"

// DECLARING A FUNCTION THAT RETURNS AN INPUTBAR COMPONENT
export default function InputBar({formData, handleFormData, loading, fetchData}: InputBarProps){
    // A VARIABLE CONTAINING THE IMAGE URL DYNAMICALLY
    const imgURL: string = new URL("../../public/icons/searchIcon.svg", import.meta.url).href 

    return(
        <div className="search">
            <input 
                type="text" 
                name="name" 
                placeholder="Enter Title Here"
                value={formData.name}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormData(e)}
            />

            {!loading && <img
                src={imgURL}
                alt="Search icon"
                title="Search icon"
                loading="lazy"
                onClick={() => fetchData()}
            />}
        </div>
    )
}
// IMPORTING NECESSARY TYPES
import {AppFormData} from "./Types"

// DECLARING PROPS FOR THE INPUTBAR COMPONENT
export type InputBarProps = {
    formData: AppFormData,
    handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    loading: boolean,
    fetchData: () => Promise<void>
}
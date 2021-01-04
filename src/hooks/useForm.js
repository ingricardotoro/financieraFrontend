import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const AddCodeAval = (code) => {
        console.log("SI HOOK")

        setValues({
            ...values,
            codeAval: code
        })
    }


    return [values, handleInputChange, reset, AddCodeAval, setValues]
}
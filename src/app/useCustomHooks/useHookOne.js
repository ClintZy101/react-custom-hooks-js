import { useEffect, useState } from "react";

// useEffect needs to be inside component so we are passing the custom hook to a component

export default function useCustomOne(defaultValue='orig value'){
    const [value, setValue] = useState(defaultValue || '')

    useEffect(()=>{
        setValue('updated')
    },[])
    return value
}
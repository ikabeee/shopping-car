import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState('Carlos'); 
    const showNameStudent = () =>{
        setNameStudent('Sebastián')
    }
    return(
        <>
        {/*<>Main Tags</> */}
        
        <button type="button" className="btn btn-rimary" onClick={showNameStudent}> {nameStudent}</button>
        </>
    )
}

export default Button
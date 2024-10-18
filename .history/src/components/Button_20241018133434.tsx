import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState('Carlos'); 
    const showNameStudent = () =>{
        //nameStudent = 'sebastian'
        setNameStudent('Sebastián')
    }
    return(
        <>
        {/*<>Main Tags</>*/} 
        <button className="btn btn primary" onClick={showNameStudent}> {nameStudent}</button>
        </>
    )
}

export default Button
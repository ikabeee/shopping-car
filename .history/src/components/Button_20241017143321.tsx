import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState('Carlos'); 
    return(
        <>
        {/*<>Main Tags</> */}
        {console.log(nameStudent)}
        <button type="button" className="btn btn-primary" onClick={setNameStudent}> Primary</button>
        </>
    )
}

export default Button
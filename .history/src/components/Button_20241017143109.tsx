import { useState } from "react"

const Button=()=>{
    const [nameStudent, setNameStudent] = /*Hook*/useState(); 
    return(
        <>
        {/*<>Main Tags</> */}
        <button type="button" className="btn btn-primary">Primary</button>
        </>
    )
}

export default Button
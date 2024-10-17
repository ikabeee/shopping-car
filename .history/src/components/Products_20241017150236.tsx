import { useState } from "react"

const Products = () => {
const [product, setProduct]=useState([])
const [loading, setLoading]=useState(true)
if (loading) {
    return(<h1></h1>);
}


    return (
        <>

        </>
    )
}
export default Products
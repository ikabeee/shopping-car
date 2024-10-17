import { useState } from "react"

const Products = () => {
const [product, setProduct]=useState([])
const [loading, setLoading]=useState(true)
if (loading) {
    return(<h1>Cargando datos</h1>);
}


    return (
        <>

        </>
    )
}
export default Products
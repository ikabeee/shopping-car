import { useState } from "react"

const Products = () => {
const [product, setProduct]=useState([])
const [loading, setLoading]=useState(true)
if (loading) {
    return('Cargando datos');
}


    return (
        <>

        </>
    )
}
export default Products
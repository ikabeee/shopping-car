import { useEffect, useState } from "react"

const Products = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    if (loading) return(<h1>Cargando datos</h1>);

    //useEffect = Realizan acciones cuando los componentes tengan un cambio y se implementan con funciones flecha
    useEffect(() => {
        try{
            const showProducts = async () => {
                /*Las funciones asincronas devuelven promesas 
                await es un ejemplo de promesa*/
                const response = await fetch('https://fakestoreapi.com/products/')
                /* fetch consume la informacion */
                /*Indicamos que vamos a recibir un formato json*/
                const result = await response.json()
                setProduct(result)
                setLoading(false)
                console.log(result)
        }catch
        /* Funciones asincronas permiten cargar independient */

        }
        showProducts();
    }, [])

    return (
        <>

        </>
    )
}
export default Products
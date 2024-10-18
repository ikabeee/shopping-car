import { useEffect, useState } from "react"

const Products = () => {
   // const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    //useEffect = Realizan acciones cuando los componentes tengan un cambio y se implementan con funciones flecha

    /* Funciones asincronas permiten cargar independient */
    const showProducts = async () => {

            /*Las funciones asincronas devuelven promesas 
            await es un ejemplo de promesa*/
            const response = await fetch('https://fakestoreapi.com/products/')
            /* fetch consume la informacion */
            /*Indicamos que vamos a recibir un formato json*/
            const result = await response.json()
         //   setProducts(result)
            setLoading(false)
            console.log(result)
    }
    //useEffect realiza acciones secundarias
    useEffect(() => {
        showProducts();
    }, [])

    if (loading) return(
        <>
            <h1>Cargando Datos..</h1>
            <button onClick={showProducts}>Consultar API</button>
        </>
    )
    return (
        <>
            <h1>Lista de Productos</h1>
            {/*
                products.map((item,index)=>(
                    <>
                    <h3>{item.title}</h3>
                    <h4>{item.price}</h4>
                    <img src={item.image}/>
                    </>
                ))
                    */
            }
        </>
    )
}
export default Products
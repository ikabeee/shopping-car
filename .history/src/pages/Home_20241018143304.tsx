const Home = () =>{
    const getProducts=()=>{
        const response = await fetch('https://fakestoreapi.com/products/')
        /* fetch consume la informacion */
        /*Indicamos que vamos a recibir un formato json*/
        const result = await response.json()
    }
    return(
        <>
        <div className="container">
            <h1>Bienvenidos</h1>
        </div>
        </>
    )
}

export default Home
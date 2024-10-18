import { useEffect, useState } from "react"

const Home = () =>{
    const [data, setData] = useState([])
    const getProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products/')
        const json = await response.json()
        setData(json);
    }
    useEffect(()=>{
        getProducts();
        console.log(data)
    }, [])
    return(
        <>
        <div className="container">
            <button onClick=></button>
            <h1>Bienvenidos</h1>
        </div>
        </>
    )
}

export default Home
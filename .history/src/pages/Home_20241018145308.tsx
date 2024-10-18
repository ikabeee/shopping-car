import { useEffect, useState } from "react"

const Home = () => {
    const [data, setData] = useState([])
    const getProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products/')
        const json = await response.json()
        setData(json);
    }
    useEffect(() => {
        getProducts();
        console.log(data)
    }, [])
    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {data.map((product) => {

                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title"></h5>
                                        <p className="card-text">Descripción</p>
                                        <p className="card-text">
                                            <small className="text-body-secondary">$ Precio</small>
                                        </p>
                                        <button className="btn btn-primary">Agregar a Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default Home
const Home = () =>{
    const [data, setData] = useState([])
    const getProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products/')
        const json = await response.json()
        setData(json);
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
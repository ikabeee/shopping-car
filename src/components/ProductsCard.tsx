
import { Card, CardBody, CardFooter } from "@nextui-org/react"
import { useEffect, useState } from "react";


const ProductsCard = () => {
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
            <div className="gap-8 grid grid-cols-4 sm:grid-cols-4">
                {data.map((product) => (
                    <Card shadow="sm" key={product.id} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <img src={product.image}

                                width="100%"
                                className="w-full object-cover h-[140px] rounded sm lg"
                                alt={product.title} />

                        </CardBody>

                        <CardFooter className="text-small justify-between">
                            <b>{product.title}</b>
                            <p className="text-default-500">{product.price}</p>

                        </CardFooter>

                    </Card>
                ))}
            </div>

        </>
    )
}

export default ProductsCard
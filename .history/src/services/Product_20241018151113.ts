export const getProducts=()=>{
     const response =await fetch('https://fakestoreapi.com/products/')
     const json=await response.json()
}
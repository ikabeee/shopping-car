export const getProducts=async ()=>{
     const response =await fetch('https://fakestoreapi.com/products/');
     const json=await response.json();
     return json
}
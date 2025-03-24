import { useState,useEffect } from "react";
export default function Users(){
    const [products, setproducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/docs#tag/Products').then(res => res.json()).then(p => setproducts(p))
    },[]
    
    )
    return (
        <>
                 {products.map(p => (
      <div key={p.id}>
        <h1>{p.title}</h1>
        <img src={p.image} alt={p.title} />
      </div>
    ))}
        </>
    )
}
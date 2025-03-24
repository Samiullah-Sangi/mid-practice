import { useState, useEffect } from "react";

function DisplayProducts(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1').then(res => res.json()).then(p => setProducts(p))
    }, [])

    return(
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

export default DisplayProducts
import React from 'react'

export default function Products(props) {
    const {product,onadd}=props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.price}</h3>
            <div>
                <button onClick={()=>onadd(product)}>Add to cart</button>
            </div>
        </div>
    )
}

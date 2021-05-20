import React from 'react';
import Products from './Products'
export default function Body(props){
const {product,onadd}=props;
return(
<main className="block col-2">
<h2> Products </h2>
<div className="row">
{ product.map((product)=>(
<Products key={product.id} product={product} onadd={onadd}> </Products>

))}
</div>
</main>     

)

}



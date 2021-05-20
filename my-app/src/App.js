import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Busket from './component/Busket';
import {data} from './component/data'
import React, { useState } from 'react';







function App() {
  const {products}=data;
  const [cartItem,setcartItem]=useState([]); //array
  function onadd(product) {
    const exit =cartItem.find(x=>x.id===product.id);
   if(exit){
    setcartItem(cartItem.map(x=>x.id===product.id?{...exit,qty:exit.qty+1}:x)) // ... = adding to the array
   }
   else {
    setcartItem([...cartItem,{...product,qty:1}]);
   }
 
  }

  function onremove(product) {
    const exit =cartItem.find(x=>x.id===product.id);
   if(exit.qty===1){
    setcartItem(cartItem.filter((x)=>x.id!==product.id)) // ... = adding to the array
   }
   else {
    setcartItem(cartItem.map(x=>x.id===product.id?{...exit,qty:exit.qty-1}:x)) // ... = adding to the array
   }
 
  }





  return (
    <div className="App">
    <Header></Header>
    <div className="row">
    <Body product={products} cartItem={cartItem} onadd={onadd}></Body>
    <Busket cartItem={cartItem} onadd={onadd} onremove={onremove}></Busket>
    {console.log("Reset Button",{products})}
    </div>
    </div>
  );
}

export default App;

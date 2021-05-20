import React from 'react'

export default function Busket(props) {
    const {cartItem,onadd,onremove}=props;
    return (

        //1) notify if the cart is empty or not 2) for each item 1- name , count * price  3) show two buttons to add , sub
        <aside className="block col-1">
        <div>
            {cartItem.length===0 && <div>cart is empty</div>}

        </div>

        <div>
        {cartItem.map((item)=>(
        
        <div key={item.id} className="row">
        <div className="col-2">{item.name}</div>
        <div className="col-2">

            <button className="remove" onClick={()=>onadd(item)}>+</button>
            <button className="add" onClick={()=>onremove(item)}>-</button>

        </div>
        
        <div>{item.qty} x$ {item.price}</div>
        </div>
        ))}

        </div>
        </aside>
    )
}

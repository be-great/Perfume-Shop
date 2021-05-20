import React from 'react'
import Busket from './Busket'

export default function Header(props) {
    return (

        <header className="row block">
        <div>
            <a href='/'>
            Perfume Shop
            </a>
        </div>
        <div>
        <a href='http://localhost:3000/Form'>signin </a> 
        
        <a href="/">Cart </a>
            
        </div>
       </header>
        )
}

import React from 'react';
import Logo from '../../imagenes/bolsa.png';
import {useCartContext} from '../../context/cartContext'


const CartWidget = () => {
    const {getUnits} = useCartContext();
    return (
       <div className="navbar-right">
           <a href="#">
            <img src={Logo} alt='carrito'></img><span className="cantidad">{getUnits()}</span>
            </a>
       </div>
    )
}

export default CartWidget



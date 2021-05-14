import React from 'react';
import Logo from '../../imagenes/bolsa.png';


const CartWidget = () => {
    return (
       <div className="navbar-right">
           <a href="#">
            <img src={Logo} alt='carrito'></img><span className="cantidad">0</span>
            </a>
       </div>
    )
}

export default CartWidget



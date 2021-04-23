import React from 'react';
import Logo from '../../imagenes/bolsa.png';

const CartWidget = () => {
    return (
       <div>
           <a>
            <img src={Logo} alt='carrito'></img>
            </a>
       </div>
    )
}

export default CartWidget
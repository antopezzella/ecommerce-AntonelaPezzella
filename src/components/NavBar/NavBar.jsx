import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <article>
            <h1>Título</h1>
            <ul>
                <li>Inicio</li>
                <li>Sobre nosotros</li>
                <li>Contacto</li>
            </ul>
            <button>Log In</button>
            <CartWidget/>
        </article>
    )
}



export default NavBar
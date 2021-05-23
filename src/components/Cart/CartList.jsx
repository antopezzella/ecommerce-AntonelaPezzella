import React from 'react'
import { CartItem } from './CartItem'
import './cart.css'
import { Link } from 'react-router-dom' 

export const CartList = ({cartItems, totalPrice, clearItems, finalPrice}) => {

  return(
    <>
      <div className="shopping-bg">
        <div style={{ display: cartItems.length == 0 ? "none" : "block" }}  >
          {cartItems.map((cartItem) =>
          <div key={cartItem.id}>
            <CartItem {...cartItem} totalPrice={totalPrice}/>
          </div>
          )}
        </div>
        <hr style={{display: !cartItems.length ? "none" : "block"}}/>
         {/* Cart total */}
        <div className="row d-flex justify-content-center" style={{display: cartItems.length && "none"}}> 
          <h6 className="texto col-xl-12 col-md-12 col-sm-12" style={{ display: cartItems.length != 0 ? "none" : "block" }}>Aun no tienes productos en el carrito</h6>
          <h6 className="texto col-xl-2 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>TOTAL</h6>
          <h6 id="totalPrice" className="texto col-xl-2 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>$ {finalPrice}</h6>
        </div>
        <hr style={{display: !cartItems.length ? "none" : "block"}}/>
        <div className="container" style={{margin:"auto"}}>
            <button className="btn-shop col-lg-5 col-md-5 col-xs-5 col-11" onClick={clearItems} style={{display: !cartItems.length && "none"}}>Vaciar carrito</button>
            <Link to={'/'}><button className="btn-shop col-lg-5 col-md-5 col-xs-5 col-11" style={{display: !cartItems.length && "none"}}>Finalizar compra</button></Link>
        </div>
      </div>
    </>
  )
}
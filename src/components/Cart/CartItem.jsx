import React from 'react'
import './cart.css'

export const CartItem = (props) => {

  const {codigo, imagen, precio, qty, title, totalPrice} = props;


  return(
    <>
    <div className="container">
      <div className="row d-flex align-items-center">
        <img className="image-product col-lg-2 col-md-2 col-sm-2 col-6" src={imagen} alt="Imagen del producto"/>
        <div className="texto col-lg-4 col-md-4 col-sm-12 col-12">
          <h5>{title} - {codigo}</h5>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-6">
          <p className="texto"><strong> Cantidad: </strong> {qty}</p>
        </div>
        <div className="texto col-lg-2 col-md-2 col-sm-2 col-12">
         <h5>$ {totalPrice(precio, qty)}</h5>
        </div>
      </div>
   </div>
    </>
  )
}
import React from 'react'
import './cart.css'

export const CartItem = (props) => {

  const {code, id, image, price, qty, stock, name, totalPrice} = props;


  return(
    <>
      <div className="row d-flex align-items-center">
        <img className="image-product col-lg-2 col-md-2 col-sm-2 col-6" src={image} alt="Imagen del producto"/>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <h2>{code} - {name}</h2>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-6">
          <p>{qty}</p>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-6">
         

          
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 col-12">
         <h2>$ {totalPrice(price, qty)}</h2>
        </div>
      </div>
    </>
  )
}
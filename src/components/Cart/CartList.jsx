import React, { useState} from 'react';
import { CartItem } from './CartItem';
import './cart.css';
import { Link } from 'react-router-dom'; 
import { Modal } from 'react-bootstrap';
import { CheckOutContainer } from '../../container/CheckOutContainer';

export const CartList = ({cartItems, totalPrice, clearItems, finalPrice}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <div className="shopping-bg">
        <div style={{ display: cartItems.length === 0 ? "none" : "block" }}  >
          {cartItems.map((cartItem) =>
          <div key={cartItem.id}>
            <CartItem {...cartItem} totalPrice={totalPrice}/>
          </div>
          )}
        </div>
        <hr style={{display: !cartItems.length ? "none" : "block"}}/>
        <div className="row d-flex justify-content-center" style={{display: cartItems.length && "none"}}> 
          <h6 className="col-xl-12 col-md-12 col-sm-12" style={{ display: cartItems.length !== 0 ? "none" : "block", textAlign:"center"}}>Aun no tienes productos en el carrito</h6>
          <Link to={'/productos'}><button className="btn col-lg-12 col-md-12 col-xs-12 col-12" style={{display: cartItems.length !== 0 ? "none" : "inline" }}>Ir al catalogo</button></Link>
          <h6 className="col-xl-2 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>TOTAL</h6>
          <h6 id="totalPrice" className="price col-xl-2 col-md-2 col-sm-3" style={{display: !cartItems.length ? "none" : "block"}}>$ {finalPrice}</h6>
        </div>
        <hr style={{display: !cartItems.length ? "none" : "block"}}/>
        <div style={{textAlign:"center"}}>
          <button className="btn-shop col-lg-5 col-md-5 col-xs-5 col-11" onClick={clearItems} style={{display: !cartItems.length && "none", width:"15%"}}>Vaciar carrito</button>
          <button type="button" className="btn-shop col-lg-5 col-md-5 col-xs-5 col-11" variant="primary" onClick={handleShow} style={{display: !cartItems.length && "none", width:"15%"}}>Finalizar compra</button>
        </div>
        <Modal 
          show={show} 
          onHide={handleClose} 
          backdrop="static" 
          keyboard={false} 
          aria-labelledby="contained-modal-title-vcenter"
          centered> 
          <Modal.Header closeButton>
            <Modal.Title>Finaliza tu compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CheckOutContainer finalPrice={finalPrice}/>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}
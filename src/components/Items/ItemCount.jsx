import React from 'react';
import './item.css';


const ItemCount = ({stockTotal, unitsToBuy, sumar, restar, onAdd, status}) => {

  return (
    <>
      <div className="btn-stock">
        <button className="botonRestar" onClick={restar} disabled={unitsToBuy === 1}>-</button>
        <p>{unitsToBuy}</p>
        <button className="botonSumar" onClick={sumar} disabled={stockTotal === 0}>+</button>
        <button className="btn-shop" onClick={onAdd}>Agregar al carrito</button>
      </div>
      <div>
        <p className="fin-stock">{status}</p>
      </div>
    </>
  )
}

export default ItemCount
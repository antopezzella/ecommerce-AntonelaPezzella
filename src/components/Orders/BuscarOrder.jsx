import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../Cart/cart.css'

 const BuscarOrder=()=>{
    const [orderFire, setOrderFire] = useState({order:''})
    const isDisabled = () => {
      const { order } = orderFire;
      return [order].includes('');
    };
    function onNameChange(evt) {
      setOrderFire({
        ...orderFire,
        [evt.target.name]: evt.target.value
      });
    } 
    return(
      <div className="orderB">
        <h5 className="title2">¿Querés ver tu orden?</h5>
        <input className="input" type="texto" name="order" onChange={onNameChange} placeholder="N° de Orden"/>
        <Link to={`/order/${orderFire.order}`}><button className='btn-shop' disabled={isDisabled()}>Buscar</button></Link>
      </div>
    )
}
export default BuscarOrder;
import React from 'react';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


const Item = ({imag,title,description,precio,stock, id}) => {

   return (
       <div className="producto">
           <div className="articulo-img">
               <img src={imag} className="img-fluid" alt="producto"/>
           </div>
           <div className="info-producto">
               <h3>
                   <a href="#">{title}</a>
               </h3>
           <div>{description}</div>
           <div className="precio-producto">
               <div className="espacio-precio">
                   <span className="precio">${precio}</span>
               </div>
           </div>
           <div>
               <ItemCount id={id} stock={stock}/>
               <Link to={`/item/${id}`}><button className="btn shop">Ver Info</button></Link>
           </div> 
           <button className="btn">Agregar</button>  
        </div>
    </div>
   )

}


export default Item;
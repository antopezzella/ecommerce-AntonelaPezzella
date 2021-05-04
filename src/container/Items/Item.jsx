import React from 'react';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import './item.css';

const Item = ({id,imagen,title,description,stockT,precio}) => {
    
   return (
    <section className="container">
         <div className="centered">
           <article className="card">
              <div className="column">
               <img className="img-card" style={{width:"80%", margin:"1em"}} src={imagen} alt="producto"/>
               <div className="info-producto">
               <h3>
                   <a href="#" className="titulos-productos">{title}</a>
               </h3>
               <div className="descripcion">{description}</div>
               <div className="precio-producto">
                 <div className="espacio-precio">
                   <span className="precio">${precio}</span>
                 </div>
               </div>
           <div>
               <ItemCount id={id} stock={stockT}/>
           </div>
           <Link to={`/item/${id}`}><button className="btn shop">Ver Info</button></Link>
          </div>
          </div>
        </article>
   </div>     
</section>
   )
}


export default Item;
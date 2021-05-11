import React from 'react';
import { Link } from 'react-router-dom'
import './item.css';

const Item = ({id,imagen,title,precio,}) => {
    
   return (
    <section className="container">
         <div className="centered">
           <article className="card">
              <div className="column">
               <img className="img-card" style={{width:"100%", marginTop:"1em", marginBottom:"0.5em"}} src={imagen} alt="producto"/>
               <div className="info-producto">
               <h3><Link to={`/item/${id}`}><a className="titulos-productos">{title}</a></Link></h3>
                 <div className="espacio-precio">
                   <span className="precio">${precio}</span>
                 </div>
           
           <Link to={`/item/${id}`}><button className="btn-info">Ver Info</button></Link>
          </div>
          </div>
        </article>
   </div>     
</section>
   )
}


export default Item;
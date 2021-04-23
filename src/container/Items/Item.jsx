import React from 'react';
import ItemCount from './ItemCount'

const Item = ({img,title,description,precio,stock}) => {

   return (
       <div className="producto">
           <div className="articulo-img">
               <img src={img} className="img-fluid" alt="producto"/>
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
               <ItemCount stock={stock}/>
           </div> 
           <button className="btn">Agregar</button>  
        </div>
    </div>
   )

}


export default Item;
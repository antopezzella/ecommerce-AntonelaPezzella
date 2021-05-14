import React from 'react';
import Item from './Item';


const ItemList = ({ productos }) =>  {
    console.log(productos) 
    return (
     <>
     <div className="card">
       { productos.map((prod) => (
          <Item key={prod.id} {...prod}/>
       ))}
     </div>
     </>
    );
};

export default ItemList;
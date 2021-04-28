import React from 'react';
import Item from './Item';



const ItemList = ({ productos }) =>  {

    return (
     <>
     <div className="col-lg-3 shop-info-grid mt-4">
         <Item id={productos.id} img={productos.imag} description={productos.description} precio={productos.precio} stock={productos.stockT}/>
     </div>
     </>
    );
};

export default ItemList
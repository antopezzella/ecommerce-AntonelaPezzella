import React from 'react';
import Item from './Item'

const ItemList = ({productos}) =>  {

    return (
        <>
        <div className="catalogo"></div>
        {productos.map((dato, Item)=>
        <div key={dato.id} className="col-lg-3 shop-info-grid mt-4">
            <Item img={dato.img} title={dato.title} description={dato.description} precio={dato.precio} stock={dato.stockT}/>
        </div>
        )}
        </>
    )
}

export default ItemList
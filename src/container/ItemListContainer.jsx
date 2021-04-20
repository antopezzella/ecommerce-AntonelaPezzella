import React, {useState, useEffect} from 'react';
import ItemList from './Items/itemList';

export const ItemListContainer = () => {

    useEffect(()=>{
        
    })

    const [arrayItems, setArrayItems] = useState([])

    const productos = [
        {
            img:"",
            description:"",
            id:"",
            title:"",
            price:"",
        },
        {
            img:"",
            description:"",
            id:"",
            title:"",
            price:"",
        },
        {
            img:"",
            description:"",
            id:"",
            title:"",
            price:"",
        },
        {
            img:"",
            description:"",
            id:"",
            title:"",
            price:"",
        },
    ]

    const listas = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })

    listas.then((res)=>{
       // setArrayItems(res)
    })


    return (
        <ItemList/>
    )
}

export default ItemListContainer
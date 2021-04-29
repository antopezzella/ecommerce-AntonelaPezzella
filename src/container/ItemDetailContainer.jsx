import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import loading from '../imagenes/loader.gif'
import Foto1 from '../imagenes/orquideavanda.jpg'

const ItemDetailContainer =() => {
    const [datos, setDatos] = useState([])
    const {id} = useParams ()
    console.log ({id})
    useEffect(() =>{
    const getItem = () => {
        return new Promise ((resolve,reject) => {
        const catalogo = [
            {id:1,
            imagen:Foto1,
            title:'Drácena Dorado',
            description:'La drácena dorado es una variedad de la dracaena deremensis y tiene hojas de color verde oscuro sólido con los bordes amarillos. Como el resto de drácenas, sufre una progresiva pérdida de las hojas inferiores durante su crecimiento, de modo que acaba adoptando una forma similar a la de una palmera, aunque sus hojas son más rizadas y adquieren una forma compacta.',
            stockT:'4',
            precio:'4000'},
            {id:2,
            imagen:Foto1,
            title:'Orquídea Duetto',
            description:'Dentro de la familia de las orquídeas , las phalaenopsis podrían considerarse las de más fácil cultivo. Las hay con flores de distintos colores, a veces con manchas, y más o menos grandes. Es importante que las raíces aéreas se mantengan sanas, en un recipiente transparente para que puedan realizar la fotosíntesis y adquieran un color verde intenso y cierta turgencia, signos ambos de su buena salud.',
            stockT:'3',
            precio:'5000'},
            {id:3,
            imagen:Foto1,
            title:'Ficus Benjamín Trenzado',
            description:'Más delicado que otros ficus, el benjamina se caracteriza por sus hojas verdes y brillantes y las posibilidades decorativas que ofrece su tronco, a veces esculpido, a veces trenzado.',
            stockT:'3',
            precio:'6000'},
            ];
            setTimeout(()=>{
                resolve(catalogo);
              },2000)
              getItem().then(dato => {
                const itemFilter = dato.filter(item => item.id == `${id}`)
                console.log(itemFilter)
                setDatos(itemFilter) 
            },[])
            console.log(datos)
        })
    }
    }
    )}

    return (
        <>
        <div className="container">
            <div className="row">
            <ItemDetail datos={datos}/> 
             <img src={loading}/>
             </div>
        </div>
        </>
    )

export default ItemDetailContainer;
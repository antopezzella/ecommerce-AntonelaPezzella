import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import Foto1 from '../imagenes/orquideavanda.jpg';
import './Items/item.css';

const ItemDetailContainer =() => {
    const [datos, setDatos] = useState({})
    const {id} = useParams ()
    console.log ({id})
    useEffect(() =>{
    const getItem = () => {
        return new Promise ((resolve,reject) => {
        const catalogo = [
            {id:1,
            imagen:Foto1,
            category:'interior',
            title:'Drácena Dorado',
            description:'La drácena dorado es una variedad de la dracaena deremensis y tiene hojas de color verde oscuro sólido con los bordes amarillos. Como el resto de drácenas, sufre una progresiva pérdida de las hojas inferiores durante su crecimiento, de modo que acaba adoptando una forma similar a la de una palmera, aunque sus hojas son más rizadas y adquieren una forma compacta.',
            stockT:'4',
            precio:'4000'},
            {id:2,
            imagen:Foto1,
            category:'interior',
            title:'Orquídea Duetto',
            description:'Dentro de la familia de las orquídeas , las phalaenopsis podrían considerarse las de más fácil cultivo. Las hay con flores de distintos colores, a veces con manchas, y más o menos grandes. Es importante que las raíces aéreas se mantengan sanas, en un recipiente transparente para que puedan realizar la fotosíntesis y adquieran un color verde intenso y cierta turgencia, signos ambos de su buena salud.',
            stockT:'3',
            precio:'5000'},
            {id:3,
            imagen:Foto1,
            category:'interior',
            title:'Ficus Benjamín Trenzado',
            description:'Más delicado que otros ficus, el benjamina se caracteriza por sus hojas verdes y brillantes y las posibilidades decorativas que ofrece su tronco, a veces esculpido, a veces trenzado.',
            stockT:'3',
            precio:'6000'},
            {id:4,
            imagen:Foto1,
            category:'exterior',
            title:'Cupressus Goldcrest Espiral',
            description:'El Cupressus Goldcrest es uno de los arbustos más utilizados para decorar entradas y como elementos ornamentales de topiaria. Son tupidos y tiene un rápido crecimiento. Tiene una forma muy densa, en forma de espiral, con hojas de color verde claro. Es una variedad muy rústica que se adapta a cualquier tipo de suelo y resiste a las proximidades del mar. Aguanta bien el frío.',
            stockT:'7',
            precio:'4500'},
            {id:5,
            imagen:Foto1,
            category:'exterior',
            title:'Adelfa Roja (Nerium Oleander)',
            description:'La adelfa puede que sea el arbusto más utilizado en jardines mediterráneos, pues se adapta a todo tipo de climatología. Es una planta muy rústica y con flores muy bellas y olorosas, que pueden ser simples, dobles o semidobles. Puede alcanzar alturas de 1 a 3 m.',
            stockT:'8',
            precio:'5000'},
            {id:6,
            imagen:Foto1,
            category:'exterior',
            title:'Solanum Jasminoides',
            description:'El Solanum Jasminoides, más conocido como Falso Jazmín, es originario de Sudamérica. Se caracteriza por su porte desordenado y sus perfumadas flores de color blanco. Al final estas flores dan unos frutos de color negro.',
            stockT:'9',
            precio:'7000'},
            ];
            setTimeout(()=>{
                resolve(catalogo);
              },2000) })
            }
              getItem().then(dato => {
                const itemFilter = dato.filter(item => `${item.id}` === id)
                console.log(itemFilter)
                setDatos(itemFilter[0])})
            },[]);
                        
    return (
        <>
        <div className="container">
            <div className="row">
             <ItemDetail datos={datos}/>
             </div>
        </div>
        </>
    )
}
            
export default ItemDetailContainer;
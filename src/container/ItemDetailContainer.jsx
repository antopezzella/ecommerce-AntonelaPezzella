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
            title:'Calathea Orbifolia',
            description:'La Calathea Orbifolia es una variedad procedente de la selva tropical, con unas exóticas hojas de gran tamaño y forma redondeada. ¡Su estampado en tonos verdes te asombrarán!',
            consejos: 'Sitúala en zonas poco iluminadas, donde no reciba luz directa. Al ser una planta tropical, necesitará un ambiente ligeramente húmedo. Evita las zonas con corrientes. Los riegos deben ser abundantes durante la época cálida, el resto del año realiza riegos moderados.',
            stockT:'4',
            precio:'4000'},
            {id:2,
            imagen:Foto1,
            category:'interior',
            title:'Orquídea Duetto',
            description:'Dentro de la familia de las orquídeas , las phalaenopsis podrían considerarse las de más fácil cultivo. Las hay con flores de distintos colores, a veces con manchas, y más o menos grandes. Es importante que las raíces aéreas se mantengan sanas, en un recipiente transparente para que puedan realizar la fotosíntesis y adquieran un color verde intenso y cierta turgencia, signos ambos de su buena salud.',
            consejos: 'Mantenla en una zona muy luminosa, pero sin que le dé el sol directo. Riégala para evitar la sequedad, pero intenta no encharcar sus hojas y raíces. Si el ambiente es muy seco, puedes pulverizar las hojas y las raíces, pero no las flores ya que podrías dañarlas.',
            stockT:'3',
            precio:'5000'},
            {id:3,
            imagen:Foto1,
            category:'interior',
            title:'Ficus Moclamen Trenzado',
            description:'Esta variedad erguida y robusta de ficus microcarpa es una habitual de la decoración interior. Las pequeñas hojas verdes y su tallo trenzado le darán un toque especial a cualquier espacio.',
            consejos: 'Colócalo en un lugar luminoso y amplio. Puede incluso soportar el sol directo. Si se ubica en una zona sombría podría perder hojas. Puedes ir girando la planta cada mes, para dosificar equilibradamente la luz. Riégalo moderadamente, dejando que la tierra se seque antes del siguiente riego. Tolera los entornos secos, no es necesario pulverizar sus hojas con agua.',
            stockT:'3',
            precio:'6000'},
            {id:4,
            imagen:Foto1,
            category:'exterior',
            title:'Camelia Japónica',
            description:'La camelia es un arbusto o arbolillo de flores grandes, muy llamativas, de distintos colores según la variedad. Necesita suelos ácidos y es recomendable evitar colocarla a pleno sol. La camelia japonica es una de las especies de camelias más conocida y pertenece a la familia de las teáceas. Existen numerosos híbridos de esta especie, cuyas flores van del rojo al blanco, pasando por las multicolores. Altura aproximada: 112 cm',
            consejos: 'Requiere riegos frecuentes en verano, pero no es recomendable regarla a finales de otoño, ni en invierno. Este arbusto agradece humedad ambiental y resguardarse del sol directo o cambios bruscos de temperatura.',
            stockT:'7',
            precio:'4500'},
            {id:5,
            imagen:Foto1,
            category:'exterior',
            title:'Adelfa Roja (Nerium Oleander)',
            description:'La adelfa puede que sea el arbusto más utilizado en jardines mediterráneos, pues se adapta a todo tipo de climatología. Es una planta muy rústica y con flores muy bellas y olorosas, que pueden ser simples, dobles o semidobles. Puede alcanzar alturas de 1 a 3 m.',
            consejos:'Ten precaución con las hojas, son venenosas. Admite cualquier exposición, desde a pleno sol hasta en sombra, siempre que la temperatura no baje de 0 ºC. Es ideal para cultivarla en setos o en grupos.',
            stockT:'8',
            precio:'5000'},
            {id:6,
            imagen:Foto1,
            category:'exterior',
            title:'Bambú De Exterior (Phyllostachys Bissetti)',
            description:'El Phyllostachys, más conocido como Bambú verde, es un arbusto con un tronco de fibra muy dura y hojas alargadas de tallos flexibles.',
            consejos:'Aunque prefiere las zonas frescas, puede prosperar en lugares de sombra, semisombra y a pleno sol. Además, tolera los vientos marinos. Riégalo abundantemente en verano. No dejes que las raíces se lleguen a secar. Resiste el frío y las heladas.',
            stockT:'9',
            precio:'7000'},
            ]
            setTimeout(()=>{
                resolve(catalogo);
              },2000) })
            }
              getItem().then(dato => {
                const itemFilter = dato.filter(item => `${item.id}` === id)
                console.log(itemFilter)
                setDatos(itemFilter[0])})
            },[])
                        
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
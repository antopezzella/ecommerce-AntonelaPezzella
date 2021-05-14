import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/Items/ItemDetail';
import {useParams} from 'react-router-dom';
import Foto1 from '../imagenes/orquideavanda.jpg'
import TextoI from '../imagenes/interior.png';
import Texto2 from '../imagenes/exterior.png';
import '../components/Items/item.css';


const ItemDetailContainer =() => {
    const [datos, setDatos] = useState({})
    const {id} = useParams ()
   
    
    useEffect(() =>{
    const getItem = () => {
        return new Promise ((resolve,reject) => {
        const catalogo = [
            {id:1,
            imagen:Foto1,
            category:'interior',
            title:'Calathea Orbifolia',
            description:'La Calathea Orbifolia es una variedad procedente de la selva tropical, con unas exóticas hojas de gran tamaño y forma redondeada. ¡Su estampado en tonos verdes te asombrarán! La buena noticia es que es una planta de interior muy resistente y agradecida, por lo que respetando unos mínimos, es perfecta para principiantes.',
            consejos: 'Sitúala en zonas poco iluminadas, donde no reciba luz directa. Al ser una planta tropical, necesitará un ambiente ligeramente húmedo. Evita las zonas con corrientes. Los riegos deben ser abundantes durante la época cálida, el resto del año realiza riegos moderados.',
            stock:'4',
            precio:'3000',
            imagen2:TextoI,
            },
            {id:2,
            imagen:Foto1,
            category:'interior',
            title:'Orquídea Duetto',
            description:'Dentro de la familia de las orquídeas , las phalaenopsis podrían considerarse las de más fácil cultivo. Las hay con flores de distintos colores, a veces con manchas, y más o menos grandes. Es importante que las raíces aéreas se mantengan sanas, en un recipiente transparente para que puedan realizar la fotosíntesis y adquieran un color verde intenso y cierta turgencia, signos ambos de su buena salud.',
            consejos: 'Mantenla en una zona muy luminosa, pero sin que le dé el sol directo. Riégala para evitar la sequedad, pero intenta no encharcar sus hojas y raíces. Si el ambiente es muy seco, puedes pulverizar las hojas y las raíces, pero no las flores ya que podrías dañarlas.',
            stock:'3',
            precio:'4000',
            imagen2:TextoI,
            },
            {id:3,
            imagen:Foto1,
            category:'interior',
            title:'Ficus Moclamen Trenzado',
            description:'Esta variedad erguida y robusta de ficus microcarpa es una habitual de la decoración interior. Las pequeñas hojas verdes y su tallo trenzado le darán un toque especial a cualquier espacio. Si la planta crece a su libre criterio natural, los cuidados de mantenimiento sobre la poda serán prácticamente inexistentes.',
            consejos: 'Colócalo en un lugar luminoso y amplio. Puede incluso soportar el sol directo. Si se ubica en una zona sombría podría perder hojas. Puedes ir girando la planta cada mes, para dosificar equilibradamente la luz. Riégalo moderadamente, dejando que la tierra se seque antes del siguiente riego. Tolera los entornos secos, no es necesario pulverizar sus hojas con agua.',
            stock:'3',
            precio:'4500',
            imagen2:TextoI,
            },
            {id:4,
            imagen:Foto1,
            category:'interior',
            title:'Orquídea Multiflora Morada',
            description:'La orquídea Multiflora es una variedad híbrida con una gran cantidad de botones florales. ¡Es la phalaenopsis ideal si lo que buscas son muchas flores en una misma planta!',
            consejos: 'Necesita estar en un lugar bien iluminado donde no reciba el sol directo. na buena iluminación estimulará la floración y el crecimiento de la planta. Las orquídeas toleran mucho mejor la falta de riego que el exceso. En las épocas del año cálidas, se podrán realizar riegos de 1 a 2 veces a la semana, mientras que en las frías, una vez cada 2 semanas aproximadamente. Si el ambiente es muy seco, situa las plantas sobre una bandeja con agua y piedras, de manera que la maceta se coloca encima y las raíces no están en contacto con el agua, pero la evaporación de ésta aumenta la humedad del aire.',
            stock:'4',
            precio:'3000',
            imagen2:TextoI,
            },
            {id:5,
            imagen:Foto1,
            category:'interior',
            title:'Crotón Codiaedum Iceton',
            description:'Uno de los atractivos del Crotón son los colores vivos de sus hojas. Según la variedad, van desde el amarillo anaranjado hasta los tonos rojos. Su porte vertical y la particular forma de sus hojas la convierten en protagonista allá donde se encuentre.',
            consejos: 'Colócala en un lugar luminoso, sin que incida el sol directo. Intenta que la temperatura no varíe en exceso de verano a invierno. Riégala con regularidad, sin encharcar la tierra. Pulveriza con agua tibia las hojas a menudo. Para rellenar el vacío de la pérdida de hojas inferiores, puedes añadir plantas de necesidades semejantes en la base.',
            stock:'3',
            precio:'4000',
            imagen2:TextoI,
            },
            {id:6,
            imagen:Foto1,
            category:'interior',
            title:'Ficus Lyrata',
            description:'El ficus lyrata toma su nombre del parecido que tienen las hojas con una lira. Sin duda, las hojas son su gran atractivo y se van juntando en la parte superior del tallo formando una copa. Con sus grandes hojas verdes que se mantienen durante todo el año y su escultural forma, pueden alegrar y darle vida a cualquier rincón de nuestros hogares.',
            consejos: 'Dale buena iluminación, sin sol directo. Riégalo una vez por semana en invierno y con algo más de frecuencia en verano, aunque es recomendable dejar que la tierra se seque entre riegos.',
            stock:'3',
            precio:'4500',
            imagen2:TextoI,
            },
            {id:7,
            imagen:Foto1,
            category:'exterior',
            title:'Camelia Japónica',
            description:'La camelia es un arbusto o arbolillo de flores grandes, muy llamativas, de distintos colores según la variedad. Necesita suelos ácidos y es recomendable evitar colocarla a pleno sol. La camelia japonica es una de las especies de camelias más conocida y pertenece a la familia de las teáceas. Existen numerosos híbridos de esta especie, cuyas flores van del rojo al blanco, pasando por las multicolores. Altura aproximada: 112 cm',
            consejos: 'Requiere riegos frecuentes en verano, pero no es recomendable regarla a finales de otoño, ni en invierno. Este arbusto agradece humedad ambiental y resguardarse del sol directo o cambios bruscos de temperatura.',
            stock:'7',
            precio:'3500',
            imagen3: Texto2,
            },
            {id:8,
            imagen:Foto1,
            category:'exterior',
            title:'Adelfa Roja (Nerium Oleander)',
            description:'La adelfa puede que sea el arbusto más utilizado en jardines mediterráneos, pues se adapta a todo tipo de climatología. Es una planta muy rústica y con flores muy bellas y olorosas, que pueden ser simples, dobles o semidobles. Puede alcanzar alturas de 1 a 3 m.',
            consejos:'Ten precaución con las hojas, ya que son venenosas. Admite cualquier exposición, desde a pleno sol hasta en sombra, siempre que la temperatura no baje de 0 ºC. Es ideal para cultivarla en setos o en grupos.',
            stock:'8',
            precio:'2500',
            imagen3: Texto2,
            },
            {id:9,
            imagen:Foto1,
            category:'exterior',
            title:'Bambú De Exterior (Phyllostachys Bissetti)',
            description:'El Phyllostachys, más conocido como Bambú verde, es un arbusto con un tronco de fibra muy dura y hojas alargadas de tallos flexibles.',
            consejos:'Aunque prefiere las zonas frescas, puede prosperar en lugares de sombra, semisombra y a pleno sol. Además, tolera los vientos marinos. Riégalo abundantemente en verano. No dejes que las raíces se lleguen a secar. Resiste el frío y las heladas.',
            stock:'9',
            precio:'4000',
            imagen3: Texto2,
            },
            {id:10,
            imagen:Foto1,
            category:'exterior',
            title:'Photinia Fraseri Red Robin',
            description:'La Fotinia es un arbusto de hoja perenne y crecimiento rápido. Tiene hojas alargadas de color rojo brillante o violáceas durante la primavera - verano y de color verde en invierno. Es muy especial ya que es uno de los pocos arbustos perennes con hojas de color rojizas.',
            consejos: 'Sitúalo en lugares soleados para intensificar su coloración. Riégalo moderadamente.',
            stock:'7',
            precio:'3500',
            imagen3: Texto2,
            },
            {id:11,
            imagen:Foto1,
            category:'exterior',
            title:'Cyca Revoluta',
            description:'La Cyca Revoluta también conocido como Palmera Sotetsu, es una especie de palmera originaria del sur de Japón extremadamente venenosa. Se suele cultivar como planta de interior, ya que no soporta el frío, aunque en España vegeta a gusto en toda la franja costera y especialmente en la zona mediterránea. En especímenes muy viejos puede llegar a medir unos 6 o 7 m de altura de tronco; sin embargo, la planta tiene un crecimiento muy lento y requiere alrededor de 80 años para alcanzar esta altura.',
            consejos:'Sitúala en el exterior y a pleno sol. Realiza riegos escasos (en verano riégala de 3 a 4 veces por semana).',
            stock:'8',
            precio:'2500',
            imagen3: Texto2,
            },
            {id:12,
            imagen:Foto1,
            category:'exterior',
            title:'Dipladenia Espaldera',
            description:'La Dipladenia posee unas preciosas flores en forma de trompeta y unas hojas de un color verde brillante espectacular. Es una planta muy sensible al frío.',
            consejos:'Te recomendamos situarla en zonas muy luminosas, pero sin que reciba sol directo. El riego en verano debe ser abundante y durante el resto del año regarla cada semana.',
            stock:'9',
            precio:'4000',
            imagen3: Texto2,
            },
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
        <div className="container" style={{margin:"auto"}}>
            <div className="row">
             <ItemDetail datos={datos}/>
             </div>
        </div>
        </>
    )
}
      
export default ItemDetailContainer;
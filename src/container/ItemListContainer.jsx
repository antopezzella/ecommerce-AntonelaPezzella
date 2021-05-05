import React, {useState, useEffect} from 'react';
import ItemList from './Items/ItemList';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Foto1 from '../imagenes/orquideavanda.jpg';
import Banner from '../imagenes/plantasiabanner.png'


export default function ItemListContainer() {

    const [ datos, setDatos ] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        const productos = new Promise ((resolve,reject)=>{
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
            precio:'6000'},
            {id:5,
            imagen:Foto1,
            category:'exterior',
            title:'Adelfa Roja (Nerium Oleander)',
            description:'La adelfa puede que sea el arbusto más utilizado en jardines mediterráneos, pues se adapta a todo tipo de climatología. Es una planta muy rústica y con flores muy bellas y olorosas, que pueden ser simples, dobles o semidobles. Puede alcanzar alturas de 1 a 3 m.',
            stockT:'8',
            precio:'6000'},
            {id:6,
            imagen:Foto1,
            category:'exterior',
            title:'Solanum Jasminoides',
            description:'El Solanum Jasminoides, más conocido como Falso Jazmín, es originario de Sudamérica. Se caracteriza por su porte desordenado y sus perfumadas flores de color blanco. Al final estas flores dan unos frutos de color negro.',
            stockT:'9',
            precio:'6000'},
            ]
            setTimeout(()=>{
                resolve(catalogo)
              },2000)
        })

    productos.then((res) =>{
       setDatos(res)  
})

.catch(()=>{
    console.log ("No se puede cargar la página")
})
.finally(()=>{
     console.log("Ya finalizó")
})

},[id])

    return (
        <>
        <div className="row">
          <img src={Banner} alt="Banner" style={{width:"100%"}}/>
          </div>
        <div className="container" style={{textAlign:"center"}}>
         <h2 className="mensaje">Favoritos de la semana</h2>
            <div className="m-0 row justify-content-center">    
            <Carousel>
  <Carousel.Item>
    <img
      className="w-60"
      src={Foto1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-60"
      src={Foto1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="w-60"
      src={Foto1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

           </div>
        <div className="container sec-1 py-md-5">
            <h3 className="title estilo mb-lg-5 mb-4">Categorías destacadas</h3>
            <div className="row">
                <div className="col-md-4 img1 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
                <div className="col-md-4 content-gd- ab-content py-lg-5 my-lg-5" >
                    <p></p>
                </div>
                <div className="col-md-4 img2 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
            </div>
    </div>
    </div>
    <div className="contendedor" style={{textAlign:'center'}}>
    <h2 className="catalogo" >Catálogo</h2>
    <ItemList productos={datos}/>
    
     </div>
    </>
    )
}



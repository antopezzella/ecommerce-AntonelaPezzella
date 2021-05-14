import React, {useState, useEffect} from 'react';
import ItemList from '../components/Items/ItemList';
import { useParams } from 'react-router-dom';
import Banner from '../imagenes/plantasiabanner.png'
import Banner2 from '../imagenes/enviosbanner.png'
import Foto1 from '../imagenes/orquideavanda.jpg'
import '../components/Items/item.css';
import Carousel from '../components/Carousel'

export default function ItemListContainer() {

    const [ datos, setDatos ] = useState([]);
    const { categoryId } = useParams()
    
    useEffect(() => {
      new Promise((resolve, reject) => {
          const catalogo = [
              {
                  id: 1,
                  imagen:Foto1,
                  category: 'interior',
                  title: 'Calathea Orbifolia',
                  precio:'3000'
              },
              {
                  id: 2,
                  imagen: Foto1,
                  category: 'interior',
                  title: 'Orquídea Duetto',
                  precio:'4000'
              },
              {
                  id: 3,
                  imagen: Foto1,
                  category: 'interior',
                  title: 'Ficus Moclamen Trenzado',
                  precio:'4500'
              },
              {  
                  id:4,
                  imagen: Foto1,
                  category:'interior',
                  title:'Orquídea Multiflora Morada',
                  precio:'3000',
              },
              {  
                  id:5,
                  imagen: Foto1,
                  category:'interior',
                  title:'Crotón Codiaedum Iceton',
                  precio:'4000',
              },
              {  
                 id:6,
                 imagen: Foto1,
                 category:'interior',
                 title:'Ficus Lyrata',
                 precio:'4500',
              },
              { 
                 id: 7,
                 imagen: Foto1,
                 category: 'exterior',
                 title: 'Camelia Japónica',
                 precio:'3500'
              },
              {
                  id: 8,
                  imagen: Foto1,
                  category: 'exterior',
                  title: 'Adelfa Roja (Nerium Oleander)',
                  precio:'2500'
              },
              {
                  id: 9,
                  imagen:  Foto1,
                  category: 'exterior',
                  title: 'Bambú De Exterior (Phyllostachys Bissetti)',
                  precio:'4000'
              },
              {
                id:10,
                imagen:Foto1,
                category:'exterior',
                title:'Photinia Fraseri Red Robin',
                precio:'3500',
              },
              { 
                id:11,
                imagen:Foto1,
                category:'exterior',
                title:'Cyca Revoluta',
                precio:'2500',
              },
              {
                id:12,
                imagen:Foto1,
                category:'exterior',
                title:'Dipladenia Espaldera',
                precio:'4000',
              },
          ]
          setTimeout(() => {
              if (categoryId) {
                  resolve(catalogo.filter(c => c.category === categoryId));
              } else {
                  resolve(catalogo);
              }
          }, 2000);
      }).then((res) => {
          setDatos(res)
      }).catch(() => {
          console.log("No se puede cargar la página")
      })
      .finally(() => {
          console.log("Ya finalizó")
      })
  }, [categoryId])


    return (
        <>
        <div className="row">
          <img src={Banner} alt="Banner" style={{width:"100%"}}/>
        </div>
        <div>
          <div className="m-0 row justify-content-center"> 
            <h2 className="title" style={{textAlign:"center"}}>Favoritos de la semana</h2>  
          </div>
          <div className="carousel">
              <Carousel/> 
          </div>
        </div>
            <div className="row">
                <div className="col-md-4 img1 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
                <div className="col-md-4 img1 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
            </div>
    
<div className="contendedor" style={{textAlign:'center'}}>
    <h2 className="title" >Catálogo</h2>
    <ItemList productos={datos}/>
     </div>
     <div className="row">
          <img src={Banner2} alt="Banner" style={{width:"100%"}}/>
    </div>
    <div className="container" style={{margin:"auto"}}>
        <div className="plantasExterior" >
            <h3 className="title" style={{textAlign:'center'}}>Envíos</h3>
              <p className="enviosPlantasia">En Plantasia, te enviamos las plantas en estado óptimo de crecimiento o floración, en función de la estacionalidad. Por tanto, la planta que recibas puede variar levemente su apariencia con respecto a la de la foto. Cada planta es única.
                 Existen artículos disponibles en diversos colores y/o formas y se enviarán según disponibilidad. Cubre macetas decorativo no incluido.
              </p>
        </div>
    </div>
    </>
    )
}



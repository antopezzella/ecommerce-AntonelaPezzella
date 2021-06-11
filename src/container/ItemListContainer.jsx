import React, {useState, useEffect} from 'react';
import ItemList from '../components/Items/ItemList';
import { useParams } from 'react-router-dom';
import Banner from '../imagenes/plantasiabanner.png'
import Banner2 from '../imagenes/enviosbanner.png'
import '../components/Items/item.css';
import Carousel from '../components/Carousel'
import { getFirestore } from '../firebase/firebase'

export default function ItemListContainer() {
    const [ datos, setDatos ] = useState([]);
    const { categoryId } = useParams()
    const [notFound, setNotFound] = useState(false);
    
    useEffect(() => {
        const db = getFirestore();
        let filterCollection = '';
          if(categoryId){
            filterCollection = db.collection("Items").where('category','==', categoryId);
          } else {
            filterCollection = db.collection("Items");
          }
          filterCollection.get().then((res)=>{
            const documentos = res.docs.map((doc)=>{
              if(!doc.exists) {
                setNotFound(true)
            }
              return {
                id: doc.id,
                ...doc.data()
              }}
              );
              
        setDatos(documentos)
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

    
<div className="contendedor" style={{textAlign:'center', marginBottom:"6em"}}>
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



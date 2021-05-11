import React, {useState, useEffect} from 'react';
import ItemList from './Items/ItemList';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Foto1 from '../imagenes/orquideavanda.jpg';
import Banner from '../imagenes/plantasiabanner.png'
import Banner2 from '../imagenes/enviosbanner.png'
import './Items/item.css';

export default function ItemListContainer() {

    const [ datos, setDatos ] = useState([]);
    const { categoryId } = useParams()
    
    useEffect(() => {
      new Promise((resolve, reject) => {
          const catalogo = [
              {
                  id: 1,
                  imagen: Foto1,
                  category: 'interior',
                  title: 'Calathea Orbifolia',
                  stockT: '4',
                  precio:'3000'
              },
              {
                  id: 2,
                  imagen: Foto1,
                  category: 'interior',
                  title: 'Orquídea Duetto',
                  stockT: '3',
                  precio:'4000'
              },
              {
                  id: 3,
                  imagen: Foto1,
                  category: 'interior',
                  title: 'Ficus Moclamen Trenzado',
                  stockT: '3',
                  precio:'4500'
              },
              {
                  id: 4,
                  imagen: Foto1,
                  category: 'exterior',
                  title: 'Camelia Japónica',
                  stockT: '7',
                  precio:'3500'
              },
              {
                  id: 5,
                  imagen: Foto1,
                  category: 'exterior',
                  title: 'Adelfa Roja (Nerium Oleander)',
                  stockT: '8',
                  precio:'2500'
              },
              {
                  id: 6,
                  imagen: Foto1,
                  category: 'exterior',
                  title: 'Bambú De Exterior (Phyllostachys Bissetti)',
                  stockT: '9',
                  precio:'4000'
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
        <div className="container" style={{textAlign:"center"}}>
         <h2 className="title">Favoritos de la semana</h2>
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
        <div className="container">
            <h2 className="title">Cuidados</h2>
            <div className="row">
              <div className="plantasInterior" >
                <h3 className="title2">Cuidados de las plantas de interior</h3>
                <ul className="descripcion2">
                  Si tenés o estás pensando en tener plantas de interior, deberías conocer sus principales cuidados:
                 <li>
                 <strong> Luz: </strong>se recomienda colocar las plantas de interior cerca de ventanas, ya que necesitan luz para poder realizar la fotosíntesis que les permita crecer. Evita el sol directo. Consulta a nuestros expertos de la cantidad de luz que requiere la especie que elijas ya que cada planta necesita una luz diferente. 
                 </li>
                 <li>
                 <strong> Humedad: </strong> intenta que la humedad del ambiente sea elevada, que ronde entre el 20% y el 60%. Si la temperatura del ambiente es elevada humedece la planta y evita colocarla cerca de fuentes de calor. 
                 </li>
                 <li>
                 <strong> Temperatura: </strong> procura que la temperatura de la estancia sea de entre 18º y 20º y que tus plantas no sufran grandes cambios de temperatura. Pregunta a nuestros profesionales por necesidades especiales de algunas plantas. 
                 </li>
                 <li>
                 <strong> Riego: </strong>es importante mantener la tierra húmeda, pero no encharcada. El riego dependerá de la cantidad de agua que evapore tu planta. Por lo general, las plantas de hojas grandes y tiernas necesitan más agua que las plantas de hojas estrechas y duras. Considera que si hace más calor, la planta necesitará más agua. 
                 </li>
                 En las fichas de todas nuestras plantas encontrarás más información específica sobre el cuidado de cada tipo de planta. No olvides limpiar el polvo de sus hojas cada cierto tiempo y de darles el abono que necesitan para cubrir sus necesidades. Así mismo, ten presente que deberías trasplantar tus plantas de interior y renovar sus sustratos cada dos años para que se desarrollen correctamente y reciban los nutrientes que necesitan.
               </ul>
                <div className="col-md-4 img1 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
                </div>
                <div className="plantasExterior" >
                <h3 className="title2">Cuidados de las plantas de exterior</h3>
                <ul className="descripcion2">
                  Si tenés o estás pensando en tener plantas de exterior, deberías conocer sus principales cuidados:
                 <li>
                 <strong> Luz: </strong> Aunque tengas un espacio exterior reducido, en el cual no tengas muchos lugares aptos, siempre es recomendable elegir el mejor espacio para la especie que vayas a colocar. Deberás tener en cuenta la cantidad de sol que necesita para mantenerse con vida. Tener las plantas en macetas te ayudará a trasladarlas según la conveniencia del clima y las necesidades de la planta.
                 </li>
                 <li>
                 <strong> Transplante: </strong>Trasplantar una vez por año las plantas hará que crezcan sanas y fuertes. Si las plantas están en tierra, la mejor época será hacia finales de otoño y comienzo del invierno, ya que la humedad por las lluvias y un sol menos fuerte serán de ayuda para su adaptación.
                 Si están en macetas, el trasplante ya dependerá del tipo de planta y el crecimiento que tenga. Hay plantas que necesitan ser trasplantadas antes que otras. Además, una vez que se trasplante deberías utilizar tierra nueva para que reciba mayor cantidad de nutrientes.
                 </li>
                 <li>
                 <strong> Poda: </strong>Controlar el estado de las plantas con regularidad es una de las claves a la hora de mantenerlas con vida. Las hojas y tallos te ayudarán a detectar cualquier signo de deterioro que esté sufriendo la planta por algún hongo o insecto que la está afectando.
                 La poda también es otros de los aspectos recomendables para que las plantas crezcan fuertes y sanas. Eliminar las hojas que ya están secas o en mal estado es una tarea casi diaria para permitirle a la planta crecer con fuerza.
                 </li>
                 <li>
                 <strong> Riego: </strong>El riego en las plantas de exterior requieren una atención especial. En este ítem, influye mucho la cantidad de lluvia. Si la frecuencia es normal, tus plantas casi no requerirán de regados adicionales, salvo en verano que las lluvias suelen tener menos intensidad y el calor obliga a tener mayor atención. 
                  En este tip, también influye el tipo de terreno. Si la tierra tiene mucha cantidad de arcilla, podría saturarse con demasiada agua. Para evitar eso, te recomendamos hacerlo con paciencia para lograr que el agua llegue a una mejor profundidad. 
                 </li>
                 En las fichas de todas nuestras plantas encontrarás más información específica sobre el cuidado de cada tipo de planta. Las plantas de exterior requieren de un cuidado especial para sobreponerse a las condiciones que el clima y la estación del año le proponen. ¡Cuidalas con estos tips y dale color a los rincones de tu casa!
               </ul>
                <div className="col-md-4 img1 content-gd">
                    <img src="" className="img-fluid" alt="" />
                </div>
                </div>
            </div>
    </div>
    </div>
    <div className="contendedor" style={{textAlign:'center'}}>
    <h2 className="title" >Catálogo</h2>
    <ItemList productos={datos}/>
     </div>
     <div className="row">
          <img src={Banner2} alt="Banner" style={{width:"100%"}}/>
          </div>
     <div className="container">
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



import React, {useState, useEffect} from 'react';
import ItemList from './Items/ItemList';
import { useParams } from 'react-router-dom'
import loading from '../imagenes/loader.gif'


export default function ItemListContainer() {

    const [ datos, setDatos ] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const productos = new Promise ((resolve,reject)=>{
            const catalogo = [
            {id:1,
            imagen:'src/imagenes/dracena.jpg',
            title:'Drácena Dorado',
            description:'La drácena dorado es una variedad de la dracaena deremensis y tiene hojas de color verde oscuro sólido con los bordes amarillos. Como el resto de drácenas, sufre una progresiva pérdida de las hojas inferiores durante su crecimiento, de modo que acaba adoptando una forma similar a la de una palmera, aunque sus hojas son más rizadas y adquieren una forma compacta.',
            stockT:'4',
            precio:'4000'},
            {id:2,
            imagen:'src/imagenes/orquidea.jpg',
            title:'Orquídea Duetto',
            description:'Dentro de la familia de las orquídeas , las phalaenopsis podrían considerarse las de más fácil cultivo. Las hay con flores de distintos colores, a veces con manchas, y más o menos grandes. Es importante que las raíces aéreas se mantengan sanas, en un recipiente transparente para que puedan realizar la fotosíntesis y adquieran un color verde intenso y cierta turgencia, signos ambos de su buena salud.',
            stockT:'3',
            precio:'5000'},
            {id:3,
            imagen:'src/imagenes/ficus.jpg',
            title:'Ficus Benjamín Trenzado',
            description:'Más delicado que otros ficus, el benjamina se caracteriza por sus hojas verdes y brillantes y las posibilidades decorativas que ofrece su tronco, a veces esculpido, a veces trenzado.',
            stockT:'3',
            precio:'6000'},
            ]
            setTimeout(()=>{
                resolve(catalogo)
              },3000)
        })

    productos.then((res) =>{
        const newCateg = res.filter (x => x.category === `${id}`);
        id === undefined ?
        setDatos(res)  : setDatos (newCateg)    
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
        <div className="contenedor" style={{textAlign:"center"}}>
            <div className="row">
               <h2 className="mensaje">Categorías destacadas</h2>
                {/* <img src={img}/>  */}
            </div>
        <div className="container sec-1 py-md-5">
            <h3 className="title estilo mb-lg-5 mb-4">Plantas de interior</h3>
            <div className="row">
                <div className="col-md-4 img1 content-gd">
                    <img src="./public/favicon" className="img-fluid" alt="" />
                </div>
                <div className="col-md-4 content-gd- ab-content py-lg-5 my-lg-5" >
                    <p>Las plantas de interior reducen los niveles de dióxido de carbono, incrementan la humedad del aire, relajan y hacen más agradable el ambiente del hogar. También se ha comprobado que aumentan la eficiencia laboral en las oficinas.
                        Existe una gran variedad de colores, formas y tamaños de las hojas, por lo que siempre es posible combinar con cualquier tipo de decoración y colores de la estancia. El estilo de la maceta también es muy importante, 
                        para no desentonar con el resto de elementos decorativos. Para elegir tu planta de interior, primero piensa qué es lo que te gusta y lo que necesitas, ya que hay plantas para todos los lugares de la casa.</p>
                </div>
                <div className="col-md-4 img2 content-gd">
                    <img src="./public/favicon" className="img-fluid" alt="" />
                </div>
            </div>
    </div>
    <div className="catalogo"> Catalogo</div>
    {datos.length > 0 ? datos.map((dato) =>
         <ItemList productos={dato}/>)
         : <img src={loading}/>}
    
    </div>
    </>
    )
}



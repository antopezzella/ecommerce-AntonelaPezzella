import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../firebase/firebase'
import '../Cart/cart.css'

 const MyOrder = () => {
    const {id} = useParams();
    const [items, setItems] = useState([])
    const [buyer, setBuyer] = useState([])
    const [status, setStatus]= useState('')
    const [error , setError] = useState(false)
  
    useEffect(() => {
        const db = getFirestore();
        const orderCollection = db.collection('orders').doc(id);
          orderCollection.get()
          .then(res=>{
              if(!res.exists){
                  setError(true)
              }
            setItems({cart: res.data().items, total: res.data().total, date:res.data().date.toDate()})
            setBuyer(res.data().buyer)
            setStatus(res.data().status)
          })
            .catch((err)=>console.log('ocurrio un error', err))
            .finally(()=>console.log('finalizo'))    
          }, [id]);

          useEffect(() => {

            if(buyer){
                if(buyer.email){
                   console.log(buyer)
              }else{
                  
              }
            }
          }, [buyer,error])

            const fecha =(x)=>{
                if(x){
                return `${x.getDate()}/${(x.getMonth()+1)}/${x.getFullYear()} -${x.getHours()}:${x.getMinutes()}hs`
                }
            }


    return (
        <>
        <div className="container" style={{marginBottom:"5em"}}>
            <h3 className="title">Detalle de tu orden</h3>
            <p className="texto" style={{marginBottom:"3.5em"}}>Recibirás un email cuando tu pedido se despache</p>
            {items.cart && items.cart.map(x=>
          <div className="row d-flex align-items-center">
            <img className="image-product col-lg-2 col-md-2 col-sm-2 col-6" src={x.imagen} alt="Imagen del producto"/>
          <div className="texto col-lg-4 col-md-4 col-sm-12 col-12">
            <h6>{x.title} - {x.codigo}</h6>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-6">
            <p className="texto"><strong> Cantidad: </strong> {x.qty}</p>
          </div>
          <div className="texto2 col-lg-1 col-md-1 col-sm-1 col-6">
             Fecha: {fecha(items.date)}
          </div>
          <div className="texto col-lg-2 col-md-2 col-sm-2 col-12">
            <h6>Usuario: {buyer.Nombre}</h6>
          </div>
          </div>
          )}
          <div className="row d-flex align-items-center" style={{marginTop:"2.5em"}}>
            <p className="texto1 col-md-6 col-md-2 col-sm-2 col-6" style={{fontWeight:"500", backgroundColor:"#acbc9c", color:"white", padding:"5px"}}>Orden: {id}</p>
            <p className="texto1 col-md-6 col-md-2 col-sm-2 col-6" style={{fontWeight:"500", backgroundColor:"#acbc9c", color:"white",  padding:"5px"}}>Estado: En proceso</p>
          </div>
          <div style={{textAlign:"center"}}>
            <Link to="/"><button type="button" className="btn-shop">Volver al catálogo</button></Link>
          </div>
        </div>
      </>      
    )
}
export default MyOrder;
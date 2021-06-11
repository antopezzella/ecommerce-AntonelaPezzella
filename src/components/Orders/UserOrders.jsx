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
            //setLoading(true)
          })
            .catch((err)=>console.log('ocurrio un error', err))
            .finally(()=>console.log('finalizo'))    
          }, [id]);

          useEffect(() => {

            if(buyer){
                if(buyer.email){
                   console.log(buyer)
              }else{
                  //setNoTitular(true)
                  
              }
            }
          }, [buyer,error])

          function showLoading(){
            const db = getFirestore();
            const orderCollection = db.collection('orders').doc(id);
                    setTimeout(()=>{
                        orderCollection.update({status: 'Orden Fianalizada!'})
                        orderCollection.get()
                        .then(res=>{setStatus(res.data().status)})
                        //setActu("status2")
                    }, 5000)
            }

            const fecha =(x)=>{
                if(x){
                return `${x.getDate()}/${(x.getMonth()+1)}/${x.getFullYear()} -${x.getHours()}:${x.getMinutes()}hs`
                }
            }


    return (
        <>
        <div className="container" style={{marginBottom:"5em"}}>
        <h3 className="title">Detalle de tu orden</h3>
        <p className="texto" style={{marginBottom:"3em"}}>Recibirás un mail cuando tu pedido se despache</p>
        {items.cart && items.cart.map(x=>
          <div className="row d-flex align-items-center">
            <img className="image-product col-lg-2 col-md-2 col-sm-2 col-6" src={x.imagen} alt="Imagen del producto"/>
            <div className="texto col-lg-4 col-md-4 col-sm-12 col-12">
              <h6>{x.title} - {x.codigo}</h6>
              <p className="texto2">Tu número: {id}</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-6">
              <p className="texto"><strong> Cantidad: </strong> {x.qty}</p>
            </div>
            <div className="texto2 col-lg-1 col-md-1 col-sm-1 col-6">
              Fecha / horario: {fecha(items.date)}
            </div>
            <div className="texto col-lg-2 col-md-2 col-sm-2 col-12">
              <h6>Usuario: {buyer.Nombre}</h6>
            </div>
          </div>
          )}
          <div style={{textAlign:"center", marginTop:"3em"}}>
          <Link to="/"><button type="button" className="btn-shop">Volver al inicio</button></Link>
          </div>
        </div>
      </>      
    )
}
export default MyOrder;
  
import React, {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../../firebase/firebase'
import { Spinner } from 'react-bootstrap';
import { useCartContext } from '../../context/cartContext';
;

 const MyOrder = () => {
    const {user} = useContext(useCartContext)
    const {id} = useParams()
    const [items, setItems] = useState([])
    const [buyer, setBuyer] = useState([])
    const [status, setStatus]= useState('')
    const [error , setError] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const db = getFirestore();
        const orderCollection = db.collection('orders').doc(id);
          orderCollection.get()
          .then(res=>{
              if(!res.exists){
                  setError(true)
              }
            setItems({cart: res.data().items, total: res.data().total, date:res.data().date.toDate()})
            setBuyer(res.data().buyer[0])
            setStatus(res.data().status)
            setLoading(true)
          })
            .catch((err)=>console.log('ocurrio un error', err))
            .finally(()=>console.log('finalizo'))    
          }, [id]);

          useEffect(() => {

            if(user && buyer){
                if(user.email == buyer.email){
                    setLogue(true)
              }else{
                  setNoTitular(true)
                  
              }
            }
          }, [user,buyer,error])

          function showLoading(){
            const db = getFirestore();
            const orderCollection = db.collection('orders').doc(id);
                    setTimeout(()=>{
                        orderCollection.update({status: 'Orden Fianalizada!'})
                        orderCollection.get()
                        .then(res=>{setStatus(res.data().status)})
                        setActu("status2")
                    }, 5000)
            }

            const fecha =(x)=>{
                if(x){
                return `${x.getDate()}/${(x.getMonth()+1)}/${x.getFullYear()} -${x.getHours()}:${x.getMinutes()}hs`
                }
            }


    return (
        <>
 
    
        </>
    )
}
export default MyOrder;
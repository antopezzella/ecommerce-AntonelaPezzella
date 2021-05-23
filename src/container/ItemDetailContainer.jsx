import React, { useState, useEffect } from 'react';
import ItemDetail from '../components/Items/ItemDetail';
import { useParams } from 'react-router-dom';
import '../components/Items/item.css';
import { useCartContext } from '../context/cartContext'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from '../firebase/firebase'

const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({})
  const { id } = useParams()
  const { cartItems, addItem } = useCartContext();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("Items");
    const detailItem = itemCollection.doc(id);
    console.log(detailItem, id)
    detailItem.get().then((doc) => {
      if (!doc.exists) {
        setNotFound(true);
      }else{
        setDatos({ 
          id: doc.id, 
          ...doc.data() 
        });
      } 
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
        setLoading(false);
    });
  }, [id]);

  const onAdd = (quant) => {
    addItem(datos, quant)
  }

  return (
    <>
      <div className="container" style={{ margin: "auto" }}>
        <div className="row">
          <div>
            {
              !loading ?
                !notFound ? 
                  <ItemDetail datos={datos} onAdd={onAdd} /> 
                :
                  	<h3>Not Found</h3>
              : 
                <Spinner className="spinner" animation="border" variant="success" />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer;
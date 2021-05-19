import React, { useState , useEffect} from 'react'
import ItemCount from '../components/Items/ItemCount'
import '../components/Items/item.css'

const ItemCountContainer = ({onAdd, datos}) => {
  console.log(datos)
  const [stockTotal, setStockTotal] = useState(datos.stock)
  const [unitsToBuy, setUnitsToBuy] = useState(1)
  const [status, setStatus] = useState()

  const sumar = () => {
    if(stockTotal > 1) {
      setUnitsToBuy(unitsToBuy + 1)
      setStockTotal(stockTotal - 1)
    } 
  }

  const restar = () => {
    if (unitsToBuy > 1) {
      setUnitsToBuy(unitsToBuy - 1)
      setStockTotal(stockTotal + 1)
    } 
  }

  useEffect(() => {
    stockTotal === 0 ?
      setStatus(`Solo quedan ${unitsToBuy} unidades en stock`)
      :
      setStatus('')
  }, [stockTotal])

  return (
    <>
      <ItemCount stockTotal={stockTotal} unitsToBuy={unitsToBuy} sumar={sumar} restar={restar} onAdd={onAdd} status={status}/>
    </>
  )
}

export default ItemCountContainer



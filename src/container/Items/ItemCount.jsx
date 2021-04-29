import React, {useState} from 'react';
import './item.css';

const ItemCount = ({stock}) => {

    const [stockTotal, setStockTotal] = useState(stock);
    const [stockV, setStockV] = useState(0);

    const sumar = () => {
        let className = "btn-suma"
        if (stockTotal === 0) {
            className = "btn-suma"
        } else{
            setStockV(stockV + 1);
            setStockTotal (stockTotal - 1)
        }
    }

    const restar =()=>{
        let className = "btn-resta"

        if(stockTotal === 0 | stockV === 0){
            className = "btn-resta"
        }else{
            setStockV (stockV -1);
            setStockTotal (stockTotal + 1)
        }
    }
    const onAdd = ()=>{
        let className = "btn-add"
        let compra = stockTotal
        if (compra === 0){
            className = "btn-add"
        }
    }

    return (
        <>
        <p className="cantidad">Cantidad en stock:{stockTotal}</p>
        <div className="btn-stock">
        <button onClick={restar}> - </button>
        <p>{stockV}</p>
        <button onClick={sumar}> + </button>
        </div>
        <br/>
        <a className="btn-shop" onClick={onAdd}>Comprar</a>
        </>
    )
}

export default ItemCount;
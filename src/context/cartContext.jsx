import React, { useState, useContext } from 'react'
export const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

export const ShoppingCart = ({children}) => {

  const [cartItems, setCartItems] = useState([])
  const [empty, setEmpty] = useState([false])


  const isInCart = (id) => {
    const inCart = cartItems.find(x => x.id === id)
    if (inCart !== undefined) {
      return true
    }
    return false
  }

  const addQuant = (item, quant) => {
    const filter = [...cartItems]
    filter.forEach (i => {
      if(i.id === item.id) {

        i.qty = i.qty + quant
      }
    })
    setCartItems(filter)
  }

 const addItem =  (item, quant)=> {
    if (isInCart(item.id)) {
      addQuant(item, quant)
    } else {
      setCartItems([...cartItems, {...item, qty: quant}])
    }
  }

  const removeItems = (item) => {
    const newItem = cartItems.filter(x=> x.id !== item)
    setCartItems(newItem)
  }

  const clearItems = () => setCartItems([])

  const getUnits = () => {
    const units = cartItems.reduce((a,b)=>(a + b.qty),0)
    if (units == 0) {
      setEmpty(false)
    }
    return units;
  }

  
  return (
    <CartContext.Provider value={{ cartItems, clearItems, addItem, removeItems, getUnits, empty }}>
      {children}
    </CartContext.Provider>
  )
}

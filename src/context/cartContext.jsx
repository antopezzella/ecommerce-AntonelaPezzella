import React, { useState } from 'react'

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {

  const [cant, setCant] = useState(0)

  return (
    <CartContext.Provider value={[cant, setCant]}>
      {children}
    </CartContext.Provider>
  )
}
import { createContext } from 'react'

export const CartContext = createContext({
  cartItems: new Map(),
  setCartItems: () => {},
})

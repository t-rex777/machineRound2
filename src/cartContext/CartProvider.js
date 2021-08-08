import React, { createContext, useContext, useReducer } from "react";
import { initialState, reducerFunc } from "./../cartReducer/CartReducer";

export const CartContext = createContext();
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

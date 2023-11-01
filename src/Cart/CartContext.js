import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext([]);
const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

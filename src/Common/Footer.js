import React from 'react'
import '../Style/Shopping-app.css'
import  { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
const Footer = () => {
    const [cartItems,setCartItems] = useContext(CartContext);
  let totalItems = 0;
  totalItems = cartItems.length;
  console.log(cartItems);
  return (
    <div className="footer"> 
    <p>@2023 Violeta.in All Rights Reserved</p>
  </div>
  )
}

export default Footer
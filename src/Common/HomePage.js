import React, { useContext, useState, useEffect } from "react";
import { products } from "../Data/ProductData";
import ProductCard from "../Product/ProductCard";
import { CartContext } from "../Cart/CartContext";
import { useLocation } from "react-router-dom";
import Header from "./Header";
const HomePage = () => {
  const containerStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/abstract-luxury-blur-dark-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-72389.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "600px",
    paddingLeft: "5px",
  };

  const [cartItems, setCartItems] = useContext(CartContext);
  const { state } = useLocation();
  console.log("state",state);
  useEffect(() => {
    if (state.cart && state.cart?.length > 0) {
        setCartItems(state.cart);
    }
  }, [state?.cart]);
  return (
    <div>
        <Header />
      <div style={containerStyle}>
        <div style={{ marginLeft: "20px", display: "flex" }}>
          <h2>Products</h2>
          {products.map((product) => (
            <ProductCard
            key= {product.key}
              item={product}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

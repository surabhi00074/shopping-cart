import React, { useContext, useState, useEffect } from "react";
import "../Style/Shopping-app.css";
import { CartContext } from "../Cart/CartContext";

export default function ProductCard({ item }) {
  const [isAdd, setIsAdd] = useState(true);
  const [isRemove, setIsRemove] = useState(false);
  const [text, setText] = useState("Add to cart");
  const [cartItems, setCartItems] = useContext(CartContext);
  console.log("new",cartItems);
  useEffect(() => {
    const ItemIds = cartItems.map((x) => x.id);
    if (ItemIds.includes(item.id)) {
      setText("Remove");
    } else {
      setText("Add to Cart");
    }
  }, [cartItems]);
  let list = cartItems;
  const handleClick = () => {
    if (isAdd) {
      setIsAdd(false);
      setIsRemove(true);
      addCart(item);
      setText("Remove");
    } else {
      setIsRemove(false);
      setIsAdd(true);
      removeCart(item);
      setText("Add to cart");
    }
  };
  function addCart(product) {
    list.push(product);
    setCartItems(list);
  }

  function removeCart(product) {
    list = list.filter((x) => x.id !== product.id);
    setCartItems(list);
  }

  return (
    <div>
      <div className="productlist">
        <div className="product" key={item.id}>
          <div>
            <img className="product_image" src={item.image} alt={""} />
          </div>
          {item.name} - ${item.price}
          <button
            style={{ background: "black" }}
            type="button"
            className="btn btn-dark"
          >
            <span style={{ color: "white" }} onClick={handleClick}>
              {text}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

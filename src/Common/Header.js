import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Shopping-app.css";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";

const Header = () => {
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {}, [cartItems]);

  const navigate = useNavigate();
  const handleButtonClick = (cartItems) => {
    navigate("/carts", { state: { cart: cartItems } });
  };
  let totalItems = 0;
  totalItems = cartItems.length;

  return (
    <div style={{ display: "flex" }}>
      <img src={logo} alt={""} style={{ width: "80px", height: "80px" }} />
      <nav style={{ width: "100%" }}>
        <div className="navbar">
          <input
            style={{ width: "400px", marginLeft: "50px", height: "33px" }}
            placeholder="Search for Products, Brand and More"
          />
          <div
            style={{ height: "12px", marginLeft: "-200px", color: "#000000" }}
          >
            <AiOutlineSearch />{" "}
          </div>
          <div></div>
          <div>
            <Link href="/Login" className="styledLink">
              LOGIN
            </Link>{" "}
            |
            <Link href="/SignUp" className="styledLink">
              SIGN UP
            </Link>
            
              <AiOutlineShoppingCart />{" "}
              <span
                onClick={() => {
                  handleButtonClick(cartItems);
                }}
                style={{
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  cursor: "pointer",
                }}
              >
                Cart{totalItems}
              </span>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import Footer from "./Footer";
import Header from "./Header";
import "../Style/Shopping-app.css";
import HomePage from "./HomePage";
import { CartProvider } from "../Cart/CartContext";

const Layout = ({ children }) => {
  return (

  
      <>
      {/* <main style={{ marginTop: "-20px" }} className="homePageStyle"> */}
       <HomePage/>
      {/* </main> */}
      <Footer />
      </>

    // </div>
  );
};

export default Layout;

import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Layout from "./Common/Layout";

import  Carts  from "./Cart/Carts";

function App() {
  return (
    // <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/carts" element={<Carts/>}/>
          {/* <Route path="/carts" element={<Carts />} /> */}
        </Routes>
      </BrowserRouter>
    // </CartProvider>
  );
}

export default App;

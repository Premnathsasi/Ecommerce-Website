import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/Pages/ProductDetails";
import ContactPage from "./components/Pages/ContactPage";
import CartProvider from "./components/Context/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
      <CartProvider>
        {cartIsShown && <Cart onClick={hideCart} />}
        <Header onClick={showCart} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products/:productId" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </CartProvider>
  );
}

export default App;

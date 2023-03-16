import React, {useState} from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import About from "./components/About";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Context/CartProvider";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true)
  };

  const hideCart = () => {
    setCartIsShown(false)
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCart} />}
    <Header onClick={showCart} />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
    </CartProvider>
  );
}

export default App;

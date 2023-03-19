import React, { useState, useContext } from "react";
import { Routes, Route,Navigate} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import AuthContext from "./components/Authentication/AuthContext";
import Header from "./components/Header/Header";
import About from "./components/Pages/About";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";
import AuthPage from "./components/Authentication/AuthPage";
import ProductDetails from "./components/Pages/ProductDetails";
import ContactPage from "./components/Pages/ContactPage";
import CartProvider from "./components/Context/CartProvider";

function App() {
  const authCtx = useContext(AuthContext)
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
      <CartProvider>
        {cartIsShown &&  <Cart onClick={hideCart} />}
        <Header onClick={showCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          {authCtx.isLoggedIn && <Route path="/store" element={<Store />} />}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
          <Route path="/products/:productId" element={<ProductDetails/>} />
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
        <Footer />
      </CartProvider>
  );
}

export default App;

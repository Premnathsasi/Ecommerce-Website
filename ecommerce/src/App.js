import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
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
    <Store />
    <Footer/>
    </CartProvider>
  );
}

export default App;

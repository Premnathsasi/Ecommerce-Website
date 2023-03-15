import React, {useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Store from "./components/Store";
import Cart from "./components/Cart/Cart";



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true)
  };

  const hideCart = () => {
    setCartIsShown(false)
  };

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClick={hideCart} />}
    <Header onClick={showCart} />
    <Store />
    <Footer/>
    </React.Fragment>
  );
}

export default App;

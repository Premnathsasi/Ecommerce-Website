import React, {useState} from "react";
import Cart from "./components/cart/Cart";
import DisplayList from "./components/DisplayList";
import Header from "./components/header/Header";
import InputForm from "./components/Input/InputForm";
import CartProvider from "./store/CartProvider";


function App() {
  const [itemList, setItemList] = useState([]);
  const [cartIsShown, setCartIsShown] = useState(false);

  const itemHandler = (data) => {
    setItemList((prev) => {
      return [...prev, data]
    })
  };

  const showCartHandler = () => {
    setCartIsShown(true)
  };
  const hideCartHandler = () => {
    setCartIsShown(false)
  };

  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <InputForm addToList={itemHandler} />
      <DisplayList list={itemList}/>
    </CartProvider>
  );
}

export default App;

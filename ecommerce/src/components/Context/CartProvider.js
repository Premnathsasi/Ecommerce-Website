import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";


const CartContextProvider = (props) => {

  let userEmail;
  if (localStorage.getItem('token')) {
    userEmail = JSON.parse(localStorage.getItem('token')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  };
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const loadItemsHandler = async() => {
      const crudURL = `https://crudcrud.com/api/93d06ce5cbaa4585ba29b077417bf667/${userEmail}`;
      try {
        const response = await fetch(crudURL)
        const data = await response.json();
        
        if(response.ok) {
          let refreshItem = [];
          data.forEach((item) => {
          
            refreshItem.push(item)
          });
          setCartItems(refreshItem)
        }
      
      } catch (error) {
        console.log(error);
      }
    }
    loadItemsHandler();
  },[userEmail]);

  const addItemToCartHandler = (item) => {
    const isThere = cartItems.find((element) => {
      if (element.id === item.id) return true;
      return false;
    });
    if (isThere) {
      item.quantity += 1;
      alert("Item is already in the cart");
    } else {
      setCartItems((olditems) => [...olditems, item]);
    }
  }
  //   setCartItems(item);
  // };

  const removeItemFromCartHandler = (itemId) => {
    // setCartItems((olditems) => olditems.filter((item) => item.id !== itemId));  };
    setCartItems(itemId)
  }
  const removeAllFromCartHandler = () => {
    setCartItems([]);
  };
  
  const cartContext = {
    items: cartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    emptyCart: removeAllFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
import React, { Fragment, useState } from "react";
import "./Cart.css";
import { Button, CloseButton } from "react-bootstrap";

const cartElements = [
  {
    id:'a1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    id:'a2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    id:'a3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {

    const [cartItems, setCartItems] = useState(cartElements);

    const removeCartItem = (item) => {
        const itemId = item.target.id;
        setCartItems((prev) => {
            return prev.filter((list) => list.id !== itemId)
        })
    }

  const cartList = cartItems.map((item) => {
    return (
      <li key={item.id}>
        <div className="cart-row fw-bold">
          <span className="cart-item cart-column">
            <img src={item.imageUrl} alt={item.title} width={80}></img>
            <span className="ms-2">{item.title}</span>
          </span>
          <span className="cart-price cart-column fw-bold">${item.price}</span>
          <span className="cart-quantity cart-column">
            <input type="text" defaultValue="1" />
            <Button variant="danger" onClick={removeCartItem} id={item.id}>Remove</Button>
          </span>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <div className="cart">
        <h1>Your Cart</h1>
        <CloseButton aria-label="Hide" className="cancel" onClick={props.onClick}/>
        <div className="cart-row cart-header">
          <span className="cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
          <span className="cart-quantity cart-column">QUANTITY</span>
        </div>
        <div> {cartList}</div>
        <div className=" fw-bolder position-relative m-5">
          <span className=" fs-2 text-center">
            <strong className=" ">Total</strong>
            <span className="m-5 fw-normal">$39.99</span>
          </span>
          <div className="text-center ">
          <Button variant="primary" className=" btn-lg mt-4   ">PURCHASE</Button> 
          </div>
                  
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;

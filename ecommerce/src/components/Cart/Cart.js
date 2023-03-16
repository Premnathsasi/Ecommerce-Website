
import React, {Fragment ,useContext} from "react";
import CartContext from "../Context/CartContext";
import "./Cart.css";
import { Button, CloseButton } from "react-bootstrap";


const Cart = (props) => {

  const cartCntx = useContext(CartContext);

    const removeCartItem = (item) => {
        const itemId = item.target.id;
        cartCntx.removeItem(itemId)
    }
    const purchaseClickHandler = () => {
      alert("Thank you for shoping with us");
    };

  const cartList = cartCntx.items.map((item) => {
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
            <strong className="fw-bolder ">Total</strong>
            <span className="m-5 fw-bold">{`$${cartCntx.items.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0)}`}</span>
          </span>
          <div className="text-center ">
          <Button variant="primary" className=" btn-lg mt-4" onClick={purchaseClickHandler}>PURCHASE</Button> 
          </div>
                  
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;

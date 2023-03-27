import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

const Cart = props => {
    const cartItem = (
        <ul className={classes['cart-items']}>
            {[{id: 'cl', name: 'Gucci shoes', price:1200}].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>1120</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order Product</button>
            </div>
        </Modal>
    )
};

export default Cart;
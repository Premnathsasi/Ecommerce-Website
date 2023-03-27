import React, {useContext} from "react";
import CartContext from "../../store/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import classes from './HeaderButton.module.css';



const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);

    const noOfItems = cartCtx.items.reduce((curNo, item) => {
        return curNo + item.amount;
    },0)

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <FontAwesomeIcon icon={faCartShopping}/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{noOfItems}</span>
        </button>
    )
};

export default HeaderButton;
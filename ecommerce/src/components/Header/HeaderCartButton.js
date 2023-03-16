import { Button } from "react-bootstrap";
import {useContext} from 'react';
import CartContext from "../Context/CartContext";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const noOfItems = CartCtx.items.reduce((curNo, item) => {
    return curNo + item.quantity;
  },0)

  return (
    <div>
      <div className="ms-5">{noOfItems}</div>
<Button variant="dark" className=" border-primary" onClick={props.onClick}>Cart</Button>

    </div>
    
  );
};

export default HeaderCartButton;

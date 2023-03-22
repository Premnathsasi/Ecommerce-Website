import {useContext} from 'react';
import CartContext from "../Context/CartContext";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const noOfItems = CartCtx.items.reduce((curNo, item) => {
    return curNo + item.quantity;
  },0)

  return (
    <div>
      <button type="button" className="btn btn-primary position-relative"  onClick={props.onClick}>
  Cart <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{noOfItems}</span>
</button>
    </div>
    
  );
};

export default HeaderCartButton;

import React, {useContext} from "react";
import CartContext from "./Context/CartContext";
import { Button, Card } from "react-bootstrap";
import classes from "./Store.module.css";

const productsArr = [
  {
    id:'a1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity:1,
  },
  {
    id:'a2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  },
  {
    id:'a3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1,
  },
  {
    id:'a4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity:1,
  },
];

const Store = (props) => {

  const cartCtx = useContext(CartContext);
  const submitHandler = (event) => {
    const itemId = event.target.id
    cartCtx.addItem((productsArr.filter((item)=>item.id === itemId)[0]));
  }


  const listItems = productsArr.map((item) => {
    return (<div className="pt-5" key={item.id}>
 <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title className="fw-bold">{item.title}</Card.Title>
          <Card.Text className="fw-bold">${item.price}</Card.Text>
          <Button variant="primary" onClick={submitHandler} id={item.id}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
     
    );
  });

  return (
    <React.Fragment>
      
      <div className={classes.container}>
        <div className={classes.product}>{listItems}</div>
      </div>
    </React.Fragment>
  );
};

export default Store;
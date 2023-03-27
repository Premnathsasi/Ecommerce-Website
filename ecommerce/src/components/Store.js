import React, { useContext } from "react";
import CartContext from "./Context/CartContext";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Store.module.css";

const productsArr = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: "2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: "3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: "4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  const cartCtx = useContext(CartContext);

  let userEmail;
  if (localStorage.getItem('token')) {
    userEmail = JSON.parse(localStorage.getItem('token')).email;
    userEmail = userEmail.replace(/[@.]/g, '');
  }

  const submitHandler = (event) => {
    const itemId = event.target.id;
    const item = (productsArr.filter((item) => item.id === itemId)[0]);
    postToCrud(item);
  };

  const postToCrud = async (item) => {
    const url = `https://crudcrud.com/api/93d06ce5cbaa4585ba29b077417bf667/${userEmail}`;
    let updatedItem = [...cartCtx.items];
    const existingIndex = cartCtx.items.findIndex((it) => it.title === item.title);
    if (existingIndex === -1) {
      try {
        const response = await fetch(url , {
          method: "POST",
          body: JSON.stringify({
            title: item.title,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: item.quantity,
            id:item.id
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data._id)
        cartCtx.addItem(data);
      } catch(error) {
        console.log(error)
      }
    } else {
      let newQuantity= (updatedItem[existingIndex].quantity+=1);
      try {
        const response = await fetch(`${url}/${updatedItem[existingIndex]._id}` , {
          method: "PUT",
          body: JSON.stringify({
            title: item.title,
            price: item.price,
            imageUrl: item.imageUrl,
            quantity: newQuantity,
            id:item.id
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        cartCtx.items(data)
      } catch(error) {
        console.log(error)
      }
    }
   
  }


  const listItems = productsArr.map((item) => {
    return (
      <div className="pt-5" key={item.id}>
        <Card style={{ width: "18rem" }}>
          <Link to={`/products/${item.id}`}>
            <Card.Img variant="top" src={item.imageUrl} />
          </Link>
          <Card.Body>
            <Card.Title className="fw-bold">{item.title}</Card.Title>
            <Card.Text className="fw-bold">${item.price}</Card.Text>
            <Button variant="primary" onClick={submitHandler} id={item.id}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });



  return (
    <React.Fragment>
       <h1 className="text-center"  style={{fontFamily: 'Climate Crisis'}}>Store</h1>
      <div className={classes.container}>
        <div className={classes.product}>{listItems}</div>
      </div>
    </React.Fragment>
  );
};

export default Store;

import React, {useRef, useState, useContext} from "react";
import CartContext from "../../store/CartContext";
import Card from '../UI/Card'
import './InputForm.css';

const InputForm = props => {
    const cartCntx = useContext(CartContext);

    const [formIsValid, setFormIsValid] = useState(false)
    const nameInput = useRef();
    const descriptionInput = useRef();
    const priceInput = useRef();
    const lInput = useRef();
    const mInput = useRef();
    const sInput = useRef();

    const addToList = (e) => {
        e.preventDefault();
        const amount = Number(lInput.current.value) + +(mInput.current.value) + +(sInput.current.value);

        const newItem = {
            name:nameInput.current.value,
            description: descriptionInput.current.value,
            price: priceInput.current.value,
            l: lInput.current.value,
            m: mInput.current.value,
            s: sInput.current.value,
            amount: amount,
            id: Math.round(Math.random() * 9).toString(),
        }

        if (newItem.name === '' || newItem.description === '' || newItem.price === '') {
            setFormIsValid(true)
            setTimeout(() => {
                setFormIsValid(false)
            },2000);
            return;
        }
        props.addToList(newItem);
        
    };

    return (
        <Card className='cardBox'>
            <form onSubmit={addToList}>
                <label htmlFor="name">Tshirt Name:</label>
                <input type='text' id='name' ref={nameInput}/>
                <label htmlFor="description">Description:</label>
                <input type='text' id='description' ref={descriptionInput}/>
                <label htmlFor="price">Price:</label>
                <input type='number' id='price' ref={priceInput}/>
                <div><div>Available Quantity</div>
                <label htmlFor="l">L</label>
                <input type='number' id='l' ref={lInput}/>
                <label htmlFor="m">M</label>
                <input type='number' id='m' ref={mInput}/>
                <label htmlFor="s">S</label>
                <input type='number' id='s' ref={sInput}/>
                </div>
                <button id="btn" type="submit">Add Product</button>
               {formIsValid && <h3>Please enter all the fileds</h3>}
            </form>
            </Card>

    )
};

export default InputForm;
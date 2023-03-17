import React, {useReducer} from "react";
import CartContext from './CartContext';

const defaultState = {
    items:[],
}

const cartReducer = (state, action) => {
        if (action.type === 'ADD') {
            const existingCartItem = state.items.find(item =>  {if (item.id === action.item.id) return true;
            return false
        } );
            let updatedItems;
           if (existingCartItem) {
            
             updatedItems =  [...state.items.filter(el => el.id !== action.item.id), action.item]
           }else {
             updatedItems = state.items.concat(action.item);};
            return {
                items: updatedItems,
            };
        }

        if (action.type === 'REMOVE') {
            const updatedItems = state.items.filter(item => item.id !== action.id);
            return {
                items: updatedItems
            }
        }
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type:'ADD', item: item})
    };
    
    const removeItemHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };
    
    const cartContext = {
        items:cartState.items,
        addItem:addItemToCartHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;
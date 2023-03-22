import React from "react";

const CartContext  = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    emptyCart: () => {},
    

});

export default CartContext;
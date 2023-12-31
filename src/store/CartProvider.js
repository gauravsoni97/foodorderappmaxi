import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log("UpdatedTotalAmount", updatedTotalAmount);

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCardItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCardItem = state.items[existingItemIndex];
  
    const updatedTotalAmount = state.totalAmount - existingCardItem.price;
  
    let updatedItems;
  
    if (existingCardItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCardItem,
        amount: existingCardItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
  
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  

  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const CartContextMain = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={CartContextMain}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

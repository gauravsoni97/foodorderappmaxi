import React, { useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartModal = () => {
    setShowCart(true);
  };
  const hideCartModal = () => {
    setShowCart(false);
  };

  return (
    <div>
      {showCart ? (
        <Cart hideCartModal={hideCartModal} />
      ) : (
        <>
          <Header showCartModal={showCartModal} />
          <Meals />
        </>
      )}
    </div>
  );
};

export default App;

import React, { useRef } from "react";

import { useContext } from "react";
import CartContext from "../../store/CartContext";

const MealCard = ({ name, amount, id, price }) => {
  const inputAmountRef = useRef();

  const cartCtx = useContext(CartContext)

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      return;
    }
    cartCtx.addItem({
      id:id,
      name:name,
      amount:amount,
      price:price,
    })
  };
  return (
    <>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-md  mx-auto mb-6 flex items-center">
        <div className="w-[50%]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {name}
          </h5>

          <h3 className="mb-3 font-medium text-gray-600 dark:text-gray-400">
            $ {price}
          </h3>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputAmountRef}
              type="number"
              className="block w-36 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123"
              min={1}
              max={9}
              step={1}
              defaultValue={1}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              + Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MealCard;

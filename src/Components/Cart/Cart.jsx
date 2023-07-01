import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = ({ hideCartModal }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;

  console.log(
    "Cart ctx items",
    cartCtx.items.map((e) => e.name)
  );

  const onAddCardHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onDelCardHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100vh-1rem)] max-h-full flex items-center justify-center"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cart List
              </h3>
              <button
                onClick={hideCartModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6 max-h-[60vh] overflow-auto">
              {cartCtx.items.map((item) => {
                return (
                  <div className="flex items-center justify-between">
                    <div className="ItemName ">{item.name}</div>
                    <div className="ItemName ">x {item.amount}</div>
                    <div className="ItemPrice ">${item.price}</div>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={onDelCardHandler.bind(null, item.id)}
                        type="button"
                        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        -
                      </button>
                      <button
                        onClick={onAddCardHandler.bind(null, item)}
                        type="button"
                        class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            <div className="p-5 totalAmount flex items-center justify-between">
              <div className="AmountTxt">Total Amount</div>
              <div className="AmountNumber">${totalAmount}</div>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

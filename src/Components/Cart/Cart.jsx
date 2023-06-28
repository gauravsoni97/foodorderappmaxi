import React from "react";

const Cart = ({ hideCartModal }) => {
  return (
    <>
      <div
        id="defaultModal"
        tabindex="-1"
        ariaHidden="true"
        class="z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100vh-1rem)] max-h-full flex items-center justify-center"
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Cart List
              </h3>
              <button

                onClick={hideCartModal}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="ItemName">Name</div>
                <div className="ItemPrice">$213</div>
            
                <div>Del Item</div>
              </div>
            </div>

            <hr />

            <div className=" p-5  totalAmount flex items-center justify-between">
              <div className="AmountTxt">Total Amount</div>
              <div className="AmountNumber">$214</div>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

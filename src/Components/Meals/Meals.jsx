import React, { useEffect } from "react";
import { MealsListData } from "./MealsListData";

const Meals = () => {
  return (
    <div className="mt-16 p-8 ">
      {MealsListData.map((e) => {
        return (
          <>
            <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-md  mx-auto mb-6 flex items-center">
                <div className="w-[50%]">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
                {e.Name}
              </h5>

        

              <h3 class="mb-3 font-medium text-gray-600 dark:text-gray-400">
                $ {e.Price}
              </h3>
              </div>


              <div class="relative">
                <input
                  type="number"
                  class="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123"
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Meals;

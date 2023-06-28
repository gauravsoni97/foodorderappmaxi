import React from "react";
import BlueButton from "../../UI/BlueButton"

const Header = () => {

  return (
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Food Order App
            </span>
          </a>
          <div class="flex md:order-2">
           <BlueButton>
            My Cart ()
           </BlueButton>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

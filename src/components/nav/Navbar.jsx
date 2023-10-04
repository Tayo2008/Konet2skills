import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handle = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <header class="text-gray-600 bg-slate-300 body-font">
        <div class="container mx-auto px-10 flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Konet2skills</span>
          </a>
          <div
            className={
              menu
                ? "flex flex-col w-full transition-all duration-500 ease-in  gap-4 md:inline"
                : "hidden md:inline"
            }
          >
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link to="/" class="mr-5 text-xl text-black hover:text-blue-500">
                Home
              </Link>
              <Link
                to="/customer"
                class="mr-5 text-xl text-black hover:text-blue-500"
              >
                Customer
              </Link>
              <Link
                to="/about"
                class="mr-5 text-xl text-black hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                class="mr-5 text-xl text-indigo-700 hover:text-black"
              >
                Contact
              </Link>
              <button class="inline-flex items-center justify-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <Link to="/details">Skills</Link>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </nav>
          </div>
          <div
            onClick={handle}
            className="text-3xl absolute right-8 text-white top-10 cursor-pointer md:hidden "
            xt-w
          >
            {!menu ? <BiMenu /> : <FiX />}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

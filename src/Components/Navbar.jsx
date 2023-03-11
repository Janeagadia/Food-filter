import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

import Navlist from "./Navlist";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1340px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text4xl px-2 ">
          Best <span className="font-bold">Delicacies</span>
        </h1>

        {/* <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white rounded-full p-2 ">Delivery</p>
          <p className="p-2">Pickup</p>
        </div> */}
      </div>

      {/* Search Input */}
      <div
        className="bg-gray-200 rounded-full
       flex items-center
        w-[200px] sm:w-[400px] lg:w-[500px] px-2"
      >
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none "
          type="text"
          placeholder="Search foods"
        />
      </div>

      {/* Cart button */}
      {/* <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button> */}

      {/* Mobile Menu */}
      {/* overlay */}
      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}

      {/* // sidenav */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer  "
        />
        <h2 className="text-2xl p-4">
          Best <span>Delicacies</span>{" "}
        </h2>
        <nav>
          <Navlist />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

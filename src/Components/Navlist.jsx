import React from "react";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill, BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navlist = () => {
  return (
    <div>
      <ul className="flex flex-col p-4 text-gray-800">
        <li className="text-xl py-4 flex">
          {" "}
          <TbTruckDelivery size={25} className="mr-4" /> Orders{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <MdFavorite size={25} className="mr-4" /> Favourites{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <FaWallet size={25} className="mr-4" /> Wallet{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <MdHelp size={25} className="mr-4" /> Help{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <AiFillTag size={25} className="mr-4" /> Promotions{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <BsFillSaveFill size={25} className="mr-4" /> Best Meals{" "}
        </li>
        <li className="text-xl py-4 flex">
          {" "}
          <FaUserFriends size={25} className="mr-4" /> Invite Friends{" "}
        </li>
      </ul>
    </div>
  );
};

export default Navlist;

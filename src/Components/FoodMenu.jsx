import React, { useState } from "react";
import { data } from "../Data/data.js";

const FoodMenu = () => {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // Filter type snacks
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter by price ₦500, ₦1000, ₦1500
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1340px] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/* filter row */}

      <div className="flex flex-col lg:flex-row justify-between ">
        {/* filter type  */}
        <div>
          <p className="font-bold text-gray-700   ">Filter Type</p>
          <div className="flex justify-between flex-wrap ">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("rice")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rice
            </button>
            <button
              onClick={() => filterType("soup")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Soup
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600
              hover:text-white"
            >
              {" "}
              salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filterprice */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between  ">
            <button
              onClick={() => filterPrice("₦500")}
              className="m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₦500
            </button>
            <button
              onClick={() => filterPrice("₦1000")}
              className="m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₦1000
            </button>
            <button
              onClick={() => filterPrice("₦1500")}
              className="m-0.5 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              ₦1500
            </button>
          </div>
        </div>
      </div>

      {/* display data images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className=" border shadow-lg rounded-lg hover:scale-105 duration-300 "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;

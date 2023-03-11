import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="max-w-[1340px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center ">
          <h1 className="px-4 text-4xl md:text-6xl lg:text-7xl font-bold   ">
            {" "}
            The <span className="text-orange-500">Best</span>{" "}
          </h1>

          <h1 className="px-4 text-4xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            Nigerian <span className="text-orange-500/90">Delicaies</span>{" "}
          </h1>
        </div>
        <img
          className="w-full object-cover max-h-[500px]"
          src="https://img.freepik.com/premium-photo/plate-rice-with-duck-leg-greens_141438-2.jpg?size=626&ext=jpg&ga=GA1.2.1696814751.1659016660&semt=ais"
          alt="food picture"
        />
      </div>
    </div>
  );
};

export default Hero;

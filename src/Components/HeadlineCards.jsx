import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1340px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          {" "}
          <p className="font-bold text-2xl px-2 pt-4 ">Assorted stew</p>
          <p className="px-2">Enjoy with rice</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2 ">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://img.freepik.com/free-photo/top-view-vegetable-soup-with-meat-inside-plate-grey_140725-36040.jpg?size=626&ext=jpg&ga=GA1.2.1696814751.1659016660&semt=ais"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          {" "}
          <p className="font-bold text-2xl px-2 pt-4 ">Palm oil rice</p>
          <p className="px-2">Through thick and thin</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2 ">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://img.freepik.com/free-photo/side-view-pilaf-with-stewed-beef-meat-plate_141793-5057.jpg?size=626&ext=jpg&ga=GA1.2.1696814751.1659016660&semt=aisps://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          {" "}
          <p className="font-bold text-2xl px-2 pt-4 ">Vegetable Soup</p>
          <p className="px-2">The real deal</p>
          <button className="border-white bg-white text-black absolute bottom-4 mx-2 ">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover "
          src="https://img.freepik.com/free-photo/high-angle-chicken-meal_23-2148825122.jpg?size=626&ext=jpg&ga=GA1.2.1696814751.1659016660&semt=ais"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

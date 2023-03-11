import React from "react";
import ReactDOM from "react-dom";
import FoodMenu from "./Components/FoodMenu";
import HeadlineCards from "./Components/HeadlineCards";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import TopCategories from "./Components/TopCategories";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <FoodMenu />
    </div>
  );
};

export default App;

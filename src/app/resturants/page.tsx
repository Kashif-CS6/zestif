import React from "react";
import Template from "../Template";
import Hero from "../_components/Resturant/Hero";
import SearchHeading from "../_components/Resturant/SearchHeading";
import Navigation from "../_components/Resturant/Navigations";
import HeaderTop from "../_components/common/HeaderTop";
import Header from "../_components/common/Header";

const Resturants = () => {
  return (
    <div>
      <div className="px-2 md:px-0 w-full mx-auto md:max-w-[1280px] ">
        <HeaderTop />
        <Header />
        <Hero />
        <SearchHeading />
      </div>

      <Navigation />
    </div>
  );
};

export default Resturants;

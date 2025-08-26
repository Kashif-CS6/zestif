import React from "react";
import Template from "./Template";
import Hero from "./_components/LandingPage/Hero";
import Menu from "./_components/LandingPage/Menu";
import CategoryMenu from "./_components/LandingPage/CategoryMenu";

const Home = () => {
  return (
    <Template>
      <Hero />
      <Menu />
      <CategoryMenu/>
    </Template>
  );
};

export default Home;

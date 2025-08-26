import React from "react";
import Template from "./Template";
import Hero from "./_components/LandingPage/Hero";
import Menu from "./_components/LandingPage/Menu";

const Home = () => {
  return (
    <Template>
      <Hero />
      <Menu />
    </Template>
  );
};

export default Home;

import React from "react";
import Template from "./Template";
import Hero from "./_components/LandingPage/Hero";
import Menu from "./_components/LandingPage/Menu";
import CategoryMenu from "./_components/LandingPage/CategoryMenu";
import Image from "next/image";
import PopularRestaurants from "./_components/LandingPage/PopularRestaurants";
import JoinOption from "./_components/LandingPage/JoinOption";
import InfoSections from "./_components/LandingPage/InfoSections";
import RecordBanner from "./_components/LandingPage/RecordBanner";

const Home = () => {
  return (
    <Template>
      <Hero />
      <Menu />
      <CategoryMenu />
      <PopularRestaurants />
      <div className="rounded-[12px] border-[1px] mb-12 h-[430px] border-[#00000033]">
        <Image
          src={"/ad.jpg"}
          width={1280}
          height={430}
          alt="Ad"
          className="object-cover  h-full rounded-[12px]  "
        />
      </div>
      <JoinOption />
      <InfoSections />
      <RecordBanner />
    </Template>
  );
};

export default Home;

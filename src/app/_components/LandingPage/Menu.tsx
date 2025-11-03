import React from "react";
import MenuCard from "./MenuCard";
import { menus } from "@/data/data";

const Menu = () => {
  return (
    <div className="flex flex-col gap-8 my-10">
      <div className="flex items-center justify-between flex-wrap ">
        <h1 className="leading-[100%] md:text-3xl font-[600]">
          Up to -40% 🎊 ZestIf.pk exclusive deals
        </h1>
        <ul className="flex items-center flex-wrap justify-center my-2 md:my-0 md:justify-start">
          <li>
            <button className="text-sm font-[400] leading-[100%]  p-[10px] px-6 focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] ">
              Vegan
            </button>
          </li>
          <li>
            <button className="text-sm font-[400] leading-[100%] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] p-[10px] px-6">
              Sushi
            </button>
          </li>
          <li>
            {" "}
            <button className="text-sm font-[400] leading-[100%]  focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] p-[10px] px-6">
              Pisa & Fast foods
            </button>
          </li>
          <li>
            {" "}
            <button className="text-sm font-[400] leading-[100%]  focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] p-[10px] px-6">
              Others
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
        {menus.map((item, index) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

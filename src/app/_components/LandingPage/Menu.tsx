import React from "react";
import MenuCard from "./MenuCard";
import { menus } from "@/data/data";

const Menu = () => {
  return (
    <div className="flex flex-col gap-8 my-10">
      <div className="flex items-center justify-between ">
        <h1 className="leading-[100%] text-[32px] font-[700]">
          Up to -40% 🎊 ZestIf.pk exclusive deals
        </h1>
        <ul className="flex items-center">
          <li>
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-10">
              Vegan
            </button>
          </li>
          <li>
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-10">
              Sushi
            </button>
          </li>
          <li>
            {" "}
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-10">
              Pisa & Fast foods
            </button>
          </li>
          <li>
            {" "}
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-10">
              Others
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        {menus.map((item, index) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

import React, { ReactNode, FC } from "react";

interface MenuCardTypes {
  item: {
    id: Number;
    discount: String;
    type: String;
    heading: String;
    image: String;
  };
}

const MenuCard: FC<MenuCardTypes> = ({ item }) => {
  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      className={`w-[496px] h-[325px]  rounded-[12px] bg-cover relative flex items-end cursor-pointer`}
    >
      <div className="absolute rounded-[12px] inset-0 bg-[linear-gradient(247.7deg,_rgba(255,_255,_255,_0)_0.94%,_rgba(3,_8,_31,_0.19)_75.68%,_rgba(3,_8,_31,_0.89)_95.9%)]"></div>
      <div className="h-[66px] w-[88px] bg-black rounded-b-[12px] flex items-center justify-center font-[700] text-[18px] leading-[100%] text-white absolute right-6 top-0">
        <h1>{item.discount}</h1>
      </div>
      <div className="p-10 space-y-2 z-10">
        <p className="text-[18px] font-[500] leading-[100%] text-[#FC8A06]">
          {item.type}
        </p>
        <h1 className="text-[24px] text-white leading-[100%] font-[700]">
          {item.heading}
        </h1>
      </div>
    </div>
  );
};

export default MenuCard;

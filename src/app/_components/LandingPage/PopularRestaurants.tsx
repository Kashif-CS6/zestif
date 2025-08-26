import React from "react";
import { categoryMenu } from "@/data/data";
import Image from "next/image";
import { popularRestaurants } from "@/data/data";

const PopularRestaurants = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <h1 className="leading-[100%] text-[32px] font-[700]">
        Popular Restaurants
      </h1>
      <div className="flex items-center justify-between">
        {popularRestaurants.map((item, index) => (
          <div
            key={index}
            className="w-[238px] h-[266px]  rounded-[12px] bg-[#F5F5F5] cursor-pointer leading-[100%]"
          >
            <Image src={item.image} width={238} height={203} alt="" />
            <div className=" bg-[#FC8A06] h-[63px] rounded-b-[12px] text-white flex items-center justify-center">
              <h1 className="text-[18px] font-[700]">{item.heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;

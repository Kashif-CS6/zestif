import Image from "next/image";
import React from "react";
import { categoryMenu } from "@/data/data";

const CategoryMenu = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <h1 className="leading-[100%] md:text-3xl font-[600]">
        ZestIf.pk Popular Categories 🤩
      </h1>

      <div className="flex items-center flex-wrap justify-center lg:flex-nowrap gap-4 lg:justify-between">
        {categoryMenu.map((item, index) => (
          <div
            key={index}
            className="w-[190px] md:w-[205px] h-[240px] border-[#0000001A] border-[1px] rounded-[12px] bg-[#F5F5F5] cursor-pointer leading-[100%]"
          >
            <Image src={item.image} width={238} height={180} alt="" />
            <div className="p-3 space-y-1">
              <h1 className="text-sm font-[700]">{item.heading}</h1>
              <p className="text-[#FC8A06] text-sm font-[400]">{item.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;

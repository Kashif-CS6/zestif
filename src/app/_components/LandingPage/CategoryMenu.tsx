import Image from "next/image";
import React from "react";
import { categoryMenu } from "@/data/data";

const CategoryMenu = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <h1 className="leading-[100%] text-[32px] font-[700]">
        ZestIf.pk Popular Categories 🤩
      </h1>

      <div className="flex items-center justify-between">
        {categoryMenu.map((item, index) => (
          <div
            key={index}
            className="w-[238px] h-[266px] border-[#0000001A] border-[1px] rounded-[12px] bg-[#F5F5F5] cursor-pointer leading-[100%]"
          >
            <Image src={item.image} width={238} height={203} alt="" />
            <div className="p-4 space-y-1">
              <h1 className="text-[18px] font-[700]">{item.heading}</h1>
              <p className="text-[#FC8A06] text-[13px] font-[400]">
                {item.total}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;

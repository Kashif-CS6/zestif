import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[610px] w-full bg-[#FBFBFB] border-[1px] border-[#00000033] rounded-[12px] relative">
      <div className="w-full h-full relative">
        <div className="flex flex-col justify-center h-full pl-20">
          <h1 className="font-[400] text-[16px] leading-[66px]">
            Order Restaurant food, takeaway and groceries.
          </h1>
          <div className="w-[519px]  font-semibold text-[54px] leading-[66px]">
            <h1>Feast Your Senses,</h1>
            <span className="text-[#FC8A06]">Fast and Fresh</span>
          </div>
          <div>
            <h1 className="font-[400] text-[13px] leading-[66px]">
              Enter a postcode to see what we deliver
            </h1>
            <div className="w-[397px] border-[1px] border-[#00000066] rounded-[120px] flex items-center justify-between relative h-[57px]">
              <input
                placeholder="e.g. EC4R 3TE"
                type="text"
                className="outline-none bg-transparent px-6 text-[15px] font-[400]"
                name=""
                id=""
              />
              <button className="h-[57px] right-0 w-[188px] rounded-[120px] text-[16px] font-[700] text-white leading-[66px] bg-[#FC8A06] flex items-center justify-center absolute">
                Search
              </button>
            </div>
          </div>
        </div>
        <Image
          src={"/girl.svg"}
          width={805}
          height={537}
          alt="Girl Image"
          className="absolute right-96 z-10 bottom-0"
        />
        <Image
          src={"/cover.png"}
          width={626}
          height={610}
          alt="Cover Image"
          className="absolute right-0 top-0 h-[610px]   bottom-0"
        />
        <Image
          src={"/girl-bg.png"}
          width={377}
          height={455}
          alt="Girl Image background"
          className="absolute right-72 bottom-0"
        />
        <Image
          src={"/Group 2.png"}
          width={390}
          height={183}
          alt="Group 1"
          className="absolute top-10 right-32"
        />
        <Image
          src={"/Group 2.png"}
          width={390}
          height={183}
          alt="Group 2"
          className="absolute top-52 right-0"
        />
        <Image
          src={"/Group 2.png"}
          width={390}
          height={183}
          alt="Group 3"
          className="absolute right-32  bottom-10"
        />
      </div>
    </div>
  );
};

export default Hero;

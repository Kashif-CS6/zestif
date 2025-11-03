import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[430px]  bg-[#FBFBFB] border-[1px] border-[#00000033] rounded-[12px] relative">
      <div className="w-full h-full relative">
        <div className="flex flex-col justify-center h-full px-4 md:px-0 md:pl-20">
          <h1 className="font-[400] text-sm leading-[46px]">
            Order Restaurant food, takeaway and groceries.
          </h1>
          <div className="w-[519px]  font-semibold text-3xl leading-[46px]">
            <h1>Feast Your Senses,</h1>
            <span className="text-[#FC8A06]">Fast and Fresh</span>
          </div>
          <div>
            <h1 className="font-[400] text-[13px] leading-[46px]">
              Enter a postcode to see what we deliver
            </h1>
            <div className="md:w-[397px] relative border-[1px] border-[#00000066] rounded-[120px] flex items-center justify-between  h-[46px]">
              <input
                placeholder="e.g. EC4R 3TE"
                type="text"
                className="outline-none bg-transparent px-6 text-sm font-[400] placeholder:text-[#000000CC]"
                name=""
                id=""
              />
              <button className="h-[46px] border border-[#FC8A06]  -right-1 w-[188px] rounded-[120px] text-sm font-[700] text-white leading-[66px] bg-[#FC8A06] flex items-center justify-center absolute">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

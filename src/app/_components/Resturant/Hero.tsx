import React from "react";
import { LiaStackExchange } from "react-icons/lia";
import { MdDeliveryDining } from "react-icons/md";
import Image from "next/image";
import { BsWatch } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="md:h-[410px]  bg-[#03081FE5] text-white border-[1px] border-[#00000033] rounded-md md:rounded-[12px] relative mb-10">
      <div className="w-full h-full relative flex items-center gap-1 flex-wrap justify-between md:pr-10">
        <div className="flex flex-col gap-1 justify-center h-full pt-10 md:pt-20 px-4 md:px-0 md:pl-20">
          <h1 className="font-[400] text-sm leading-[46px]">I'm lovin' it!</h1>
          <div className="md:w-[519px]  font-semibold text-3xl leading-[46px]">
            <h1>McDonald’s East London</h1>
          </div>
          <div className="flex items-center flex-wrap gap-4 md:mt-4">
            <button className="text-sm border border-white px-4 py-2 rounded-[120px] flex items-center gap-2 justify-center mb-4">
              <LiaStackExchange size={20} />
              <h1>Minimum Order: 12GBP</h1>
            </button>
            <button className="text-sm border border-white px-4 py-2 rounded-[120px] flex items-center gap-2 justify-center md:mb-4">
              <MdDeliveryDining size={20} />
              <h1>Delivery in 20-25 Minutes</h1>
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/burger.svg"}
            alt="hero-image"
            width={481}
            height={361}
            className="h-[361px] w-[481px]"
          />
          <Image
            src={"/rating.svg"}
            alt="rating-image"
            width={136}
            height={158}
            className=" h-[100px] hidden lg:block w-[100px] absolute bottom-0 -left-10 "
          />
        </div>
      </div>
      <div className="absolute bg-[#FC8A06] py-3 px-10 -bottom-[22px] -left-[1px] rounded-tr-[8px] rounded-br-[8px] flex items-center gap-2 text-sm">
        <BsWatch />
        <h1>open until 3:00 AM</h1>
      </div>
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";

const HeaderTop = () => {
  return (
    <header className="flex items-center ">
      {/* left side */}
      <div className="h-[50px] flex-1 px-4 bg-[#FAFAFA] flex items-center justify-between rounded-bl-[12px] border-[1px] border-[#0000001A]">
        <div className="flex items-center gap-2 text-sm">
          <h1 className="">🌟</h1>
          <h1 className="font-[500]">
            Get 5% Off your first order,{" "}
            <span className=" text-[#FC8A06] underline font-[700]">Promo: ORDER5</span>
          </h1>
        </div>

        <div className="flex items-center gap-[10px]">
          <Image width={20} height={20} src={"/Location.svg"} alt="location" />
          <h1 className="font-[500] text-sm ">
            Regent Street, 23, Gulberg Islamabad, Pakistan
          </h1>
          <button className="text-[#FC8A06] underline text-[14px]  font-[500]">
            Change Location
          </button>
        </div>
      </div>

      <div className=" text-sm border-[1px] rounded-br-[12px] bg-[#028643] h-[50px] flex justify-between">
        <button className="border-r w-14 border-r-[#FFFFFF]  flex items-center justify-center">
          <Image width={20} height={20} src={"/shoping.svg"} alt="Shoping" />
        </button>
        <h1 className="w-24 border-r font-[600] text-sm px-4  text-white border-r-[#FFFFFF]  flex items-center justify-center  ">
          23 Items
        </h1>
        <h1 className="border-r flex-1 border-r-[#FFFFFF] px-4 font-[600] text-sm text-white  flex items-center justify-center  ">
          PKR 1279.89
        </h1>
        <button className="w-14 flex items-center justify-center">
          <Image width={20} height={20} src={"/forward.svg"} alt="Forward" />
        </button>
      </div>
    </header>
  );
};

export default HeaderTop;

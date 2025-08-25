import Image from "next/image";
import React from "react";

const HeaderTop = () => {
  return (
    <header className="flex items-center ">
      {/* left side */}
      <div className="h-[70px] flex-1 px-10 bg-[#FAFAFA] flex items-center justify-between rounded-bl-[12px] border-[1px] border-[#0000001A]">
        <div className="flex items-center gap-4">
          <h1 className="text-xl">🌟</h1>
          <h1 className="font-[500] text-[15px]">
            Get 5% Off your first order,{" "}
            <span className="font-[700] text-[#FC8A06] underline">
              Promo: ORDER5
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-[10px]">
          <Image width={25} height={25} src={"/Location.svg"} alt="location" />
          <h1 className="font-[500] text-[15px]">
            Regent Street, A4, A4201, London
          </h1>
          <button className="text-[#FC8A06] underline text-[14px]  font-[500]">
            Change Location
          </button>
        </div>
      </div>

      <div className="w-[378px] border-[1px] rounded-br-[12px] bg-[#028643] h-[70px] flex justify-between">
        <button className="border-r border-r-[#FFFFFF] flex-1 flex items-center justify-center">
          <Image width={43} height={43} src={"/shoping.svg"} alt="Shoping" />
        </button>
        <h1 className="border-r font-[600] text-[16px] px-4  text-white border-r-[#FFFFFF]  flex items-center justify-center  ">
          23 Items
        </h1>
        <h1 className="border-r  border-r-[#FFFFFF] px-4 font-[600] text-[16px] text-white  flex items-center justify-center  ">
          GBP 79.89
        </h1>
        <button className="flex-1 flex items-center justify-center">
          <Image width={43} height={43} src={"/forward.svg"} alt="Forward" />
        </button>
      </div>
    </header>
  );
};

export default HeaderTop;

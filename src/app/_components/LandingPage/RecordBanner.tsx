import React from "react";

const RecordBanner = () => {
  return (
    <div className="mb-10 h-[138px] rounded-[12px] bg-[#FC8A06] flex items-center justify-between text-white py-6">
      <div className="flex-1 flex flex-col items-center justify-center gap-1 h-full border-r border-white">
        <h2 className="text-3xl font-[300] leading-[38px]">546+</h2>
        <h2 className="font-[700] text-lg leading-[38px]">Registered Riders</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 h-full border-r border-white">
        <h2 className="text-3xl font-[300] leading-[38px]">789,900+</h2>
        <h2 className="font-[700] text-lg leading-[38px]">Orders Delivered</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 h-full border-r border-white">
        <h2 className="text-3xl font-[300] leading-[38px]">690+</h2>
        <h2 className="font-[700] text-lg leading-[38px]">
          Restaurants Partnered
        </h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 h-full ">
        <h2 className="text-3xl font-[300] leading-[38px]">17,457+</h2>
        <h2 className="font-[700] text-lg leading-[38px]">Food items</h2>
      </div>
    </div>
  );
};

export default RecordBanner;

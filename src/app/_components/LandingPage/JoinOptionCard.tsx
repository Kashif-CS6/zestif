import React, { FC } from "react";

interface JoinOptionCardTypes {
  item: {
    id: number;
    tag: string;
    heading: string;
    subheading: string;
    buttontitle: string;
  };
}

const JoinOptionCard: FC<JoinOptionCardTypes> = ({ item }) => {
  return (
    <div
      style={{ backgroundImage: `url(/chickens.jpg)` }}
      className="w-[754px] h-[425px] rounded-[12px] bg-cover relative flex items-end"
    >
      <div className="absolute rounded-[12px] inset-0 bg-[linear-gradient(247.7deg,_rgba(255,_255,_255,_0)_0.94%,_rgba(3,_8,_31,_0.19)_75.68%,_rgba(3,_8,_31,_0.89)_95.9%)]"></div>
      <div className="w-[288px] h-[63px] rounded-b-[12px] bg-white flex items-center justify-center absolute top-0 left-14">
        <h1 className="font-[700] text-[18px] text-[#03081F]">{item.tag}</h1>
      </div>
      <div className="p-12 flex flex-col gap-4 z-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-[#FC8A06] text-[18px] font-[500] leading-[100%]">
            {item.subheading}
          </h1>
          <h1 className="text-[44px] font-[700] leading-[100%] text-white">
            {item.heading}
          </h1>
        </div>
        <button className="w-[205px] h-[52px] rounded-[120px] bg-[#FC8A06] text-[18px] font-[500] text-white">
          {item.buttontitle}
        </button>
      </div>
    </div>
  );
};

export default JoinOptionCard;

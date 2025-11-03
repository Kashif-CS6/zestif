import React from "react";

const InfoSections = () => {
  return (
    <div className="mb-10 h-[882px] rounded-[12px] bg-[#D9D9D9]  flex flex-col items-center justify-center gap-16">
      <div className="flex items-center justify-between w-[1290px]">
        <h1 className="leading-[100%] text-3xl font-[600]">
          Know more about us!
        </h1>
        <ul className="flex items-center">
          <li>
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-7">
              Frequest Questions
            </button>
          </li>
          <li>
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-7">
              Who we are?
            </button>
          </li>
          <li>
            {" "}
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-7">
              Partner Program
            </button>
          </li>
          <li>
            {" "}
            <button className="text-[16px] font-[400] leading-[100%] h-[61px] focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-7">
              Help & Support
            </button>
          </li>
        </ul>
      </div>
      <div className="h-[526px] bg-[#03081F] rounded-[12px] w-[1290px]"></div>
    </div>
  );
};

export default InfoSections;

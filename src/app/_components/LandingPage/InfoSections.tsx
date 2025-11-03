import React from "react";

const InfoSections = () => {
  return (
    <div className="mb-10 py-10 rounded-[12px] bg-[#D9D9D9]  flex flex-col items-center justify-center gap-10 px-10">
      <div className="flex items-center justify-between w-full ">
        <h1 className="leading-[100%] text-3xl font-[600]">
          Know more about us!
        </h1>
        <ul className="flex items-center">
          <li>
            <button className="text-sm font-[400] leading-[100%] py-3 focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-4">
              Frequest Questions
            </button>
          </li>
          <li>
            <button className="text-sm font-[400] leading-[100%] py-3 focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-4">
              Who we are?
            </button>
          </li>
          <li>
            {" "}
            <button className="text-sm font-[400] leading-[100%] py-3 focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-4">
              Partner Program
            </button>
          </li>
          <li>
            {" "}
            <button className="text-sm font-[400] leading-[100%] py-3 focus:font-[600] focus:rounded-[120px] focus:border-[1px] focus:border-[#FC8A06] focus:text-[#FC8A06] px-4">
              Help & Support
            </button>
          </li>
        </ul>
      </div>
      <div className=" bg-[#03081F] rounded-[12px] "></div>
    </div>
  );
};

export default InfoSections;

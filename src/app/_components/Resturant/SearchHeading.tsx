import React from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchHeading = () => {
  return (
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-6 justify-center md:justify-between">
      <h1 className="leading-[100%] md:text-3xl font-[600] md:pl-12">
        All Offers from McDonald’s East London
      </h1>
      <div className="md:w-[300px] relative border-[1px] border-[#00000066] rounded-[120px] flex items-center justify-between  h-[46px]">
        <FaMagnifyingGlass size={20} className="text-[#000000CC] ml-4" />
        <input
          placeholder="Search from menu..."
          type="text"
          className="outline-none bg-transparent px-6 text-sm font-[400] placeholder:text-[#000000CC]"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default SearchHeading;

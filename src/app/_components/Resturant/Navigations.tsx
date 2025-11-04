"use client"
import React, { useState } from "react";

const Navigations = () => {
  const navItems = [
    "Offers",
    "Burgers",
    "Fries",
    "Snacks",
    "Salads",
    "Cold Drinks",
    "Happy Meals",
    "Desserts",
    "Hot Drinks",
    "Sauces",
    "Orbit",
  ];

  // Track which item is selected
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="bg-[#FC8A06] h-[60px] flex flex-col justify-center items-center w-full my-5">
      <ul className="lg:max-w-[1280px] mx-auto flex items-center justify-between w-full text-white font-semibold overflow-x-auto px-2 md:px-0">
        {navItems.map((item, index: number) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
            className={`cursor-pointer px-4 py-2 transition-all text-sm  duration-200 ${
              selected === index ? "bg-black rounded-[120px]" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigations;

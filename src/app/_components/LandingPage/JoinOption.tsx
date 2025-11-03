import React from "react";
import JoinOptionCard from "./JoinOptionCard";
import { joinOption } from "@/data/data";
const JoinOption = () => {
  return (
    <div className="mb-10 flex items-center gap-4 justify-between">
      {joinOption.map((item, index) => (
        <JoinOptionCard key={index} item={item} />
      ))}
    </div>
  );
};

export default JoinOption;

import React from "react";

const Logo = () => {
  return (
    <svg
      width="400"
      height="120"
      viewBox="0 0 400 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="75"
        fontFamily="Inter, sans-serif"
        fontSize="55"
        fontWeight="850"
        fill="#1a1d3a"
        letterSpacing="-1px"
      >
        ZestIf
      </text>

      <rect x="178" y="32" width="50" height="45" fill="#ff8c00" rx="4" />
      <text
        x="183"
        y="61"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fontWeight="700"
        fill="#1a1d3a"
      >
        .pk
      </text>
    </svg>
  );
};

export default Logo;

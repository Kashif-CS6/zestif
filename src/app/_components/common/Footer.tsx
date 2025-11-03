import Template from "@/app/Template";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="py-3 md:mx-0 bg-[#03081F]">
        <div className="md:w-[1280px] h-full mx-auto text-sm font-[400] text-[#FFFFFF] leading-[100%] flex items-center flex-wrap justify-center  md:justify-between">
          <h1>Zestif.pk Copyright 2025, All Right Reserved.</h1>
          <ul className="flex items-center flex-wrap lg:flex-nowrap gap-2 lg:gap-6 px-2 my-4">
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Terms</Link>
            </li>
            <li>
              <Link href={"/"}>Pricing</Link>
            </li>
            <li>Do not share any personal Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

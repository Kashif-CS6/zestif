import Template from "@/app/Template";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="h-[73px] bg-[#03081F]">
        <div className="w-[1528px] h-full mx-auto text-[15px] font-[400] text-[#FFFFFF] leading-[100%] flex items-center justify-between">
          <h1>Zestif.pk Copyright 2025, All Right Reserved.</h1>
          <ul className="flex items-center gap-6">
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

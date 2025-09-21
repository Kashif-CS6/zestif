"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../Logo";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ul className="text-[18px] font-[500] leading-[100%] flex items-center gap-14">
        <li className="w-[127px] h-[45px] bg-[#FC8A06] rounded-[120px] flex items-center justify-center">
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Browser Menu</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Special Offers</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Resturants</Link>
        </li>
        <li>
          {" "}
          <Link href={"/"}>Track Order</Link>
        </li>
        <li className="text-white bg-black w-[234px] h-[61px] rounded-[120px] flex items-center justify-center">
          <button
            onClick={() => {
              router.push("/auth/login");
            }}
            className="flex items-center gap-2"
          >
            <Image
              src={"/user.svg"}
              width={30.97}
              height={27}
              alt="userImage"
            />
            <h1>Login/Signup</h1>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../Logo";
import { useRouter } from "next/navigation";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("home");
  return (
    <header className="flex items-center   justify-between my-4">
      <Logo />
      <ul className="text-sm font-[500] leading-[100%]  md:flex items-center gap-10 hidden">
        <li
          onClick={() => setActiveTab("home")}
          className={`${
            activeTab === "home" ? "px-6 py-[10px]  bg-[#FC8A06] " : ""
          }rounded-[120px] flex items-center justify-center`}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          onClick={() => setActiveTab("menu")}
          className={`${
            activeTab === "menu" ? "px-6 py-[10px]  bg-[#FC8A06] " : ""
          }rounded-[120px]  flex items-center justify-center`}
        >
          {" "}
          <Link href={"/"}>Browser Menu</Link>
        </li>
        <li
          onClick={() => setActiveTab("specialoffers")}
          className={`${
            activeTab === "specialoffers" ? "px-6 py-[10px] bg-[#FC8A06] " : ""
          }rounded-[120px] flex items-center justify-center`}
        >
          {" "}
          <Link href={"/"}>Special Offers</Link>
        </li>
        <li
          onClick={() => setActiveTab("resturants")}
          className={`${
            activeTab === "resturant" ? "px-6 py-[10px]  bg-[#FC8A06] " : ""
          }rounded-[120px] flex items-center justify-center`}
        >
          {" "}
          <Link href={"/resturants"}>Resturants</Link>
        </li>
        <li
          onClick={() => setActiveTab("trackorder")}
          className={`${
            activeTab === "trackorder" ? "px-6 py-[10px] bg-[#FC8A06] " : ""
          }rounded-[120px] flex items-center justify-center`}
        >
          {" "}
          <Link href={"/"}>Track Order</Link>
        </li>
        <li className="text-white bg-black px-4 py-[10px] rounded-[120px] flex items-center justify-center">
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

      <button className="md:hidden">
        <BiMenu className="text-[#FC8A06]" size={30} />
      </button>
    </header>
  );
};

export default Header;

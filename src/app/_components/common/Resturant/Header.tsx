import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 shadow-lg py-4 px-[30px] md:px-[60px] lg:px-[120px] xl:px-[240px]">
      <div className="flex items-center justify-between">
        {/* Logo & Brand Name */}
        <div className="flex items-center gap-3">
          {/* <Image
            src="/logo.png" // Replace with your logo image in the /public folder
            alt="Zestif Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <span className="text-2xl font-bold text-white tracking-wide">
            Zestif
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm md:text-base">
          <Link
            href="/"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Menu
          </Link>
          <Link
            href="/orders"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Orders
          </Link>
          <Link
            href="/profile"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Profile
          </Link>
          <Link
            href="/auth/login"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-white hover:text-purple-300 transition duration-200"
          >
            Signup
          </Link>
          <button className="text-red-300 hover:text-red-500 transition duration-200 font-semibold">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

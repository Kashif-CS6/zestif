"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="h-screen flex">
      {/* Left Section */}
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
            Welcome <span className="text-[#FC8A06]">Back</span> 👋
          </h2>
          <p className="text-gray-600 mb-6">
            Craving something tasty? Sign in now and start ordering your
            favorite meals
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Example@email.com"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#FC8A06]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-[#FC8A06]"
              />
              <a
                href="#"
                className="text-sm text-[#FC8A06] hover:underline float-right mt-1"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FC8A06] text-white py-3 rounded-md hover:bg-[#e07b00] transition"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400">Or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-100 transition">
              <FcGoogle className="w-5 h-5" />
              Sign in with Google
            </button>

            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-100 transition">
              <FaFacebook className="w-5 h-5 text-blue-600" />
              Sign in with Facebook
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t you have an account?{" "}
            <a href="/auth/signup" className="text-[#FC8A06] hover:underline">
              Sign up
            </a>
          </p>

          <p className="text-center text-xs text-gray-400 mt-6">
            © 2023 ALL RIGHTS RESERVED
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden lg:flex flex-1">
        <img
          src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your uploaded image
          alt="Login illustration"
          width={800}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

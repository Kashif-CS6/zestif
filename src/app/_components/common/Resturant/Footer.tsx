import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-purple-900 to-purple-950 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        {/* Brand Slogan */}
        <p className="text-xl font-bold tracking-wide text-white">
          🚀 Zestif — Fast, Flavorful & Fresh
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 text-purple-300 text-xl">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition duration-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition duration-200"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Kashif Nabeel. All rights reserved.
        </p>

        {/* Signature Line */}
        <p className="text-xs text-purple-400 italic">
          Made with 💜 for food lovers everywhere.
        </p>
      </div>
    </footer>
  );
}

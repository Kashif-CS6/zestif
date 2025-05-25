import React from "react";
import Template from "./Template";

const Home = () => {
  return (
    <Template>
      <div className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 min-h-screen py-10 px-6 md:px-12">
        {/* 🍽️ Welcome Banner */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-purple-900 mb-2">
            🍽️ Welcome to PurpleBite
          </h1>
          <p className="text-lg text-purple-700 mb-4">
            Discover your next favorite meal and get it delivered fast.
          </p>
          <input
            type="text"
            placeholder="🔍 Search for dishes or restaurants..."
            className="w-full md:w-1/2 p-4 rounded-lg shadow-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* 🍕 Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            🍕 What are you craving today?
          </h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {["Pizza", "Sushi", "Burgers", "Indian", "Desserts", "Vegan"].map(
              (item) => (
                <div
                  key={item}
                  className="min-w-[120px] bg-white shadow-xl rounded-xl p-4 text-center border-l-4 border-purple-700 hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-purple-800 font-semibold">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* 🔥 Popular Restaurants */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            🔥 Popular Near You
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-purple-300 h-36 w-full"></div>
                <div className="p-4">
                  <h3 className="font-bold text-xl text-purple-900">
                    Restaurant {i}
                  </h3>
                  <p className="text-purple-700">Fast delivery • ⭐ 4.{i}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎁 Promotions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">
            🎁 Today's Offers
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">
                20% OFF on First Order!
              </h3>
              <p className="text-purple-100">Use code: PURPLE20 at checkout</p>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">
                Free Delivery This Weekend 🚚
              </h3>
              <p className="text-pink-100">On orders above $20</p>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Home;

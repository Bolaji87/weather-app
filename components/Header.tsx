import React from "react";

function Header() {
  return (
    <header className="text-center bg-white shadow-md border-b border-gray-200 py-6 px-4">
      <h1 className="text-3xl font-extrabold text-stone-800 mb-2">
        Welcome to the Weather App
      </h1>
      <p className="text-lg font-medium text-slate-800">
        Enter a city name to get the weather forecast
      </p>
    </header>
  );
}

export default Header;

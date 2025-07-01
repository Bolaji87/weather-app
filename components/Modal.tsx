"use client";

import { useWeather } from "@/contexts/WeatherContext";
import Image from "next/image";
import React from "react";
import WeatherDetails from "./WeatherDetails";

function Modal() {
  const { weather, setShowModal } = useWeather();

  const formatUnixTime = (timestamp: number) =>
    new Date(timestamp * 1000).toLocaleTimeString();

  const getWindDirection = (deg: number) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  const formatDescription = (desc: string) =>
    desc.replace(/\b\w/g, (c) => c.toUpperCase());

  if (!weather || !weather.main) return null;

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <div className=" fixed inset-0 bg-black/40 backdrop-blur-sm z-10" />

      <div className="z-20 relative mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 bg-white rounded-xl shadow-2xl max-w-5xl w-full transition-all duration-300">
        <button
          className="absolute top-3 right-3 cursor-pointer p-1 rounded-full text-xl text-red-500 hover:text-red-600"
          onClick={toggleModal}
        >
          &times;
        </button>
        {/* Overview */}
        <div className="bg-sky-800 text-white w-full max-w-xs p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-2">
            {weather.name} <span>{weather.sys?.country}</span>
          </h2>
          <p className="text-lg mb-1">Temp: {weather.main.temp}°C</p>
          <p className="capitalize mb-4">
            Condition: {formatDescription(weather.weather[0].description)}
          </p>
          <div className="relative w-20 h-20">
            <Image
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Details */}
        <div className="w-full max-w-md space-y-3">
          <h3 className="text-xl font-semibold text-gray-800">
            Weather Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <WeatherDetails
              label="Wind Speed"
              value={`${weather.wind.speed} kph`}
            />
            <WeatherDetails
              label="Humidity"
              value={`${weather.main.humidity} %`}
            />
            <WeatherDetails
              label="Wind Direction"
              value={getWindDirection(weather.wind.deg)}
            />
            <WeatherDetails
              label="Sunrise"
              value={formatUnixTime(weather.sys.sunrise)}
            />
            <WeatherDetails
              label="Sunset"
              value={formatUnixTime(weather.sys.sunset)}
            />
            <WeatherDetails
              label="Air Pressure"
              value={`${weather.main.pressure} hPa`}
            />
            <WeatherDetails
              label="Feels Like"
              value={`${weather.main.feels_like} °C`}
            />
            <WeatherDetails
              label="Visibility"
              value={`${weather.visibility ?? 0} meters`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

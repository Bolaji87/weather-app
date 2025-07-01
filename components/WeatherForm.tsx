"use client";

import { useEffect } from "react";
import { useWeather } from "@/contexts/WeatherContext";
import Modal from "./Modal";

export default function WeatherForm() {
  const {
    city,
    setCity,
    handleSubmit,
    loading,
    error,
    showModal,
    fetchByCoords,
  } = useWeather();

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchByCoords(latitude, longitude);
      },
      () => {
        console.warn("Geolocation not allowed or unavailable.");
      }
    );
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center px-4 w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col sm:flex-row gap-4"
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-3 rounded-lg w-full text-base"
        />
        <button
          className="bg-blue-600 w-full sm:w-auto text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          type="submit"
        >
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-4 font-medium text-center">{error}</p>
      )}

      {showModal && <Modal />}
    </div>
  );
}

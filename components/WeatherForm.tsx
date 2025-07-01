import { useWeather } from "@/contexts/WeatherContext";
import React from "react";

function WeatherForm() {
  const { city, setCity, handleSubmit, loading } = useWeather();
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-col sm:flex-row gap-4"
    >
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-3 rounded-lg w-full text-stone-800 text-lg"
      />
      <button
        className="bg-blue-600 w-full sm:w-auto text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        type="submit"
      >
        {loading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
}

export default WeatherForm;

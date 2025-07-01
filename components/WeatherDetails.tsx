import React from "react";

function WeatherDetails({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 text-gray-800 py-2 px-4 rounded-md shadow-sm">
      <span className="font-medium">{label}:</span> {value}
    </div>
  );
}

export default WeatherDetails;

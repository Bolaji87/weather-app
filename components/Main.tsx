"use client";
import React from "react";
import { useWeather } from "@/contexts/WeatherContext";
import Modal from "./Modal";
import WeatherForm from "./WeatherForm";
import { useGeolocationPostion } from "@/hooks/useGeolocationPostion";

export default function Main() {
  const { error, showModal } = useWeather();
  useGeolocationPostion();

  return (
    <div className="mt-10 flex flex-col items-center px-4 w-full">
      <WeatherForm />
      {error && (
        <p className="text-red-500 mt-4 font-medium text-center">{error}</p>
      )}

      {showModal && <Modal />}
    </div>
  );
}

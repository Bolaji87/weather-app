"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { WeatherDataTypes } from "@/lib/types";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  loading: boolean;
  error: string;
  weather: WeatherDataTypes | null;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (event: React.FormEvent) => void;
  fetchByCoords: (lat: number, lon: number) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherDataTypes | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(url: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) {
        throw new Error(data.message || "City not found");
      }

      setWeather(data);
      console.log(data);
    } catch (err: any) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!city.trim()) return;
    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    setCity("");
    setShowModal(true);
  };

  const fetchByCoords = useCallback((lat: number, lon: number) => {
    fetchWeather(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        showModal,
        setShowModal,
        loading,
        error,
        handleSubmit,
        fetchByCoords,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("useWeather must be used within WeatherProvider");
  return context;
}

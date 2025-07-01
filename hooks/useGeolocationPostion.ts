import { useWeather } from "@/contexts/WeatherContext";
import { useEffect } from "react";

export function useGeolocationPostion() {
  const { fetchByCoords } = useWeather();

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
  }, [fetchByCoords]);
}

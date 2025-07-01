import { ReactNode } from "react";

export interface WeatherDataTypes {
  name: string; // City name
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string; // e.g., "Clouds", "Rain"
    description: string; // e.g., "overcast clouds", "light rain"
    icon: ReactNode;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  clouds?: {
    // Optional, as not all APIs include this or it might be optional
    all: number;
  };
  sys?: {
    // Optional, for country code, sunrise/sunset
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility?: number;
  dt: number; // Time of data calculation, Unix, UTC
  timezone: number; // Shift in seconds from UTC
  id: number; // City ID
  cod: number; // Internal parameter (e.g., 200 for success)
}

import React from "react";
import { useSearch } from "../context/search";
import WeatherCard from "./weatherCard";

export default function Results() {
  const { results } = useSearch();
  const { weather } = results;
  return (
    <div className="w-screen mt-12">
      <h1 className="text-center font-poppins text-xl font-light text-gray-500 mb-4">
        Search results...
      </h1>
      <div className="w-full px-6 flex gap-4 items-center justify-center">
        {Object.keys(weather).map((city, i) => {
          return (
            <WeatherCard key={i} city={city} weatherData={weather[city]} />
          );
        })}
      </div>
    </div>
  );
}

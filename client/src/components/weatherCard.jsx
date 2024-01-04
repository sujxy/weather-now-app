import { MapPin } from "lucide-react";
import React from "react";

export default function WeatherCard({ city, weatherData }) {
  const { temp, description, icon } = weatherData;
  return (
    <div className="flex flex-col gap-1 justify-start items-center rounded-lg shadow-md  px-3 py-2 min-w-[180px] font-poppins border hover:scale-105 transition-all">
      <div className="flex items-center justify-start gap-2 w-full">
        <MapPin color="#0085FF" />
        <h1 className="font-normal text-gray-500">{city}</h1>
      </div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
      <h1 className="font-semibold text-sky-600">{temp + "°C"}</h1>
      <h1 className="text-gray-500 mb-4 font-light">{description}</h1>
    </div>
  );
}

import React, { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { useSearch } from "../context/search.jsx";

export default function Navbar() {
  const [cities, setCities] = useState("");
  const { setResults } = useSearch();

  const handleSearch = async () => {
    const citiesPayload = cities.split(",");
    const { data } = await axios.post("/getWeather", {
      cities: citiesPayload,
    });
    if (data) {
      setResults(data);
      setCities("");
    }
  };

  return (
    <div className="w-screen sticky min-h-16 shadow-md flex items-center justify-between px-6 py-3">
      <h1
        onClick={() => setResults(null)}
        className="font-pacifico text-4xl text-sky-500 font-normal hover:scale-105"
      >
        Weather
        <span className="font-poppins text-base font-light">.now</span>
      </h1>
      <div className="flex justify-start w-1/3 ">
        <input
          type="text"
          placeholder="Search City,city.."
          className="bg-transparent w-4/5 outline-none border border-gray-300 rounded-s-full px-4 text-gray-500 "
          value={cities}
          onChange={(e) => setCities(e.target.value)}
        />
        <button
          className="rounded-e-full p-2 px-3 bg-sky-500"
          onClick={handleSearch}
        >
          <Search color="#ffffff" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

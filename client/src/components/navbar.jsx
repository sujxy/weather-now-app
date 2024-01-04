import React, { useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { useSearch } from "../context/search.jsx";
import { ClipLoader } from "react-spinners";

export default function Navbar() {
  const [cities, setCities] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setResults } = useSearch();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const citiesPayload = cities.split(",");
      const { data } = await axios.post("/getWeather", {
        cities: citiesPayload,
      });
      if (data) {
        setResults(data);
        setLoading(false);
        setCities("");
      }
    } catch (err) {
      setError(true);
      setLoading(false);
      setCities("");
      setTimeout(() => {
        setError(false);
      }, 1500);
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
      <div className="flex justify-start w-1/3 relative">
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
          {loading ? (
            <ClipLoader color="#ebf1f0" />
          ) : (
            <Search color="#ffffff" strokeWidth={1.5} />
          )}
        </button>
        {error && (
          <h1 className="text-white bg-red-500 px-2 py-1 rounded-full font-poppins text-sm absolute start-[-160px] top-2 ">
            Invalid ,Try again !
          </h1>
        )}
      </div>
    </div>
  );
}

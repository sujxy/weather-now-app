import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { useSearch } from "./context/search";
import Results from "./components/results";

function App() {
  const { results } = useSearch();

  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      {!results ? (
        <div className="flex justify-between items-center w-screen mt-32 px-16">
          <div className="w-1/2 text-7xl font-poppins text-gray-500">
            <h1 className="">
              Get <span className="font-semibold text-sky-500 ">weather</span>{" "}
              info
            </h1>
            <h1>
              at your{" "}
              <span className="font-light text-gray-400">fingertips.</span>
            </h1>
          </div>
          <img
            src={"/landingGraphic.jpeg"}
            className="w-[380px] h-[380px] mx-auto animate-bounce delay-75"
          />
        </div>
      ) : (
        <Results />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import WeatherDisplay from "./weatherDisplay";
import SearchBar from "./searchBar";
import WeatherDetails from "./weatherDetails";
import { PacmanLoader } from "react-spinners";
export default function WeatherApp({
  weatherData,
  search,
  handleSubmit,
  isLoading,
  error,
}) {
  const [searchFocused, setSearchFocused] = useState(false);

  const handleFocus = () => {
    setSearchFocused(true);
  };
  return (
    <div
      className={`w-[500px]  flex pt-10 items-center bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100 flex-col shadow-xl ${
        searchFocused ? "animate-slideUp" : "animate-fadeIn"
      }`}
    >
      <SearchBar
        search={search}
        handleSubmit={handleSubmit}
        onFocus={handleFocus}
      />
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <PacmanLoader color="#ffffff" />
        </div>
      ) : error ? ( // Tampilkan pesan error jika ada
        <div className="flex justify-center items-center w-full h-full text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        searchFocused && (
          <div className="flex flex-col justify-between w-full h-full">
            <WeatherDisplay weatherData={weatherData} />
            <WeatherDetails weatherData={weatherData} />
          </div>
        )
      )}
    </div>
  );
}

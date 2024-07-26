import WeatherDisplay from "./weatherDisplay";
import SearchBar from "./searchBar";
import WeatherDetails from "./weatherDetails";
export default function WeatherApp({ weatherData, search, handleSubmit }) {
  return (
    <div
      className="w-[500px] h-[600px] flex pt-10 items-center   bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100
 flex-col shadow-xl"
    >
      <SearchBar search={search} handleSubmit={handleSubmit} />
      <div className="flex flex-col justify-between w-full h-full">
        <WeatherDisplay weatherData={weatherData} />
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  );
}

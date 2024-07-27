import { useEffect, useState } from "react";
import WeatherApp from "./component/Weather";

function Layout({ children }) {
  return (
    <div className="w-screen h-screen bg-hero-pattern bg-cover flex justify-center items-center flex-col font-sans">
      <div className="w-[500px]">{children}</div>
    </div>
  );
}

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (query) => {
    try {
      setError(null);
      const fetching = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!fetching.ok) {
        throw new Error("...");
      }
      const response = await fetching.json();
      if (response.cod !== 200) {
        throw new Error(response.message);
      }
      setWeatherData(response);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearch(value);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Layout>
      <WeatherApp
        weatherData={weatherData}
        search={search}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </Layout>
  );
}

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
  const [search, setSearch] = useState("indonesia");

  const fetchData = async (query) => {
    try {
      const fetching = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const response = await fetching.json();
      setWeatherData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearch(value);
  };

  return (
    <Layout>
      <WeatherApp
        weatherData={weatherData}
        search={search}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
}

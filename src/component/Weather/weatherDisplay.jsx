export default function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weather = weatherData.weather[0];
  const temp = weatherData.main;

  let weatherIcon = " ";
  switch (weather.main) {
    case "Clouds":
      weatherIcon = "../public/assets/cloud.png";
      break;
    case "Clear":
      weatherIcon = "../public/assets/clear.png";
      break;
    case "Rain":
      weatherIcon = "../public/assets/rain.png";
      break;
    case "Snow":
      weatherIcon = "../public/assets/snow.png";
      break;
    case "Mist":
      weatherIcon = "../public/assets/mist.png";
      break;
  }

  const temperature = temp.temp.toString().slice(0, 2);

  return (
    <div className="text-center gap-2 text-white">
      <div key={weather.id} className="flex flex-col">
        <img
          src={weatherIcon}
          alt={weather.main}
          className="mx-auto "
          style={{ width: "150px" }}
        />
        <p className="font-bold text-3xl pt-3">{weather.description}</p>
        <h1 className="text-6xl font-bold">{temperature}°C</h1>
        <p className="text-lg">{weather.main}</p>
      </div>
    </div>
  );
}

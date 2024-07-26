import BxWind from "../../../public/svg/bx-wind.svg";
import BxCloud from "../../../public/svg/bx-cloud.svg";
import BxDroplet from "../../../public/svg/bx-droplet.svg";

function CardWeatherDetails({ value, label, src }) {
  return (
    <div className="w-1/3 items-center flex flex-col text-white">
      <img src={src} alt="" className="w-12" />
      <h3 className="text-3xl font-bold ">{value}</h3>
      <p className="text-lg opacity-50">{label}</p>
    </div>
  );
}

function convertDegToDirection(deg) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((deg % 360) / 45) % 8;
  return directions[index];
}

export default function WeatherDetails({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const wind = weatherData.wind;
  const windSpeed = wind.speed;
  const windGust = wind.gust || "N/A";
  const windDirection = convertDegToDirection(wind.deg);

  return (
    <div className="p-3 w-full">
      <div
        className="  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100
 flex p-8"
      >
        <CardWeatherDetails
          label="Direction"
          value={windDirection}
          src={BxWind}
        />
        <CardWeatherDetails label="Gust" value={`${windGust}%`} src={BxCloud} />
        <CardWeatherDetails
          label="Speed"
          value={`${windSpeed}%`}
          src={BxDroplet}
        />
      </div>
    </div>
  );
}

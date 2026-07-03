import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";
import { getWeatherIcon, getWeatherDescription } from "../services/weatherIcons";
import WeatherHeader from "../components/WeatherHeader";
import WeatherDayCard from "../components/WeatherDayCard";

export default function Weather() {
  const [days, setDays] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWeather();
  }, []);

  async function loadWeather() {
    try {
      const daily = await getWeather();

      const formatted = daily.time.map((date, index) => ({
        date,
        max: daily.temperature_2m_max[index],
        min: daily.temperature_2m_min[index],
        weathercode: daily.weathercode[index],
      }));

      setDays(formatted);
    } catch (err) {
      setError("No se pudo cargar el clima");
    }
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!days.length) {
    return <div className="p-6">Loading...</div>;
  }

  return (

  <div className="relative mt-1 w-full p-3">

    <WeatherHeader> </WeatherHeader>

    {/* Degradados laterales */}
    <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32  from-white dark:from-black to-transparent" />

    <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32  from-white dark:from-black to-transparent" />

    {/* Carrusel */}
    <div
      className="
        flex
        overflow-x-auto
        snap-x
        snap-mandatory
        scroll-smooth
        no-scrollbar
      "
    >
      {days.map((day) => (
        <div
          key={day.date}
          className="
            w-full
            h-full
            shrink-0
            snap-center
            flex
            justify-center
            items-center
            py-12
          "
        >
          <div
            className="
              w-full
              md:w-4/6
              mx-2
              lg:w-[60%]
              xl:w-[40%]
            "
          >
            <WeatherDayCard day={day} />
          </div>
        </div>
      ))}
    </div>

  </div>

  );
}
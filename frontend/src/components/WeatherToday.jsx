import { getWeatherIcon } from "../services/weatherIcons";

export default function WeatherToday({ day }) {
  return (
    <div className="relative overflow-hidden bg-gray-300 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl mt-5 p-4 flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-slate-500 dark:border-neutral-700 shadow-lg">
      <div className="absolute -top-8 -left-8 w-[120px] h-[120px] rounded-full bg-sky-200/50 dark:bg-sky-500/20 pointer-events-none" />

      <p className="text-sm text-gray-500 dark:text-gray-400 relative">Today</p>

      <div className="my-4 relative text-sky-500">
        {getWeatherIcon(day.weathercode, 150)}
      </div>

      <h2 className="text-5xl font-semibold text-gray-900 dark:text-white relative">
        {Math.round(day.max)}°
      </h2>

      <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 relative">
        Min {Math.round(day.min)}°
      </p>
    </div>
  );
}
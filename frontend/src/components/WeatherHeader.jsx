import { FaCloudSun } from "react-icons/fa";

export default function WeatherHeader() {
  return (
    <div className="flex items-center gap-4">

      <div className="w-12 h-12 rounded-2xl bg-sky-500 flex items-center justify-center shadow-lg">
        <FaCloudSun className="text-white text-xl" />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Weather
        </h1>

        <p className="text-slate-500 dark:text-slate-400">
          Weekly forecast
        </p>
      </div>

    </div>
  );
}
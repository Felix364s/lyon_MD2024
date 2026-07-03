// components/WeatherDayCard.jsx

import {
  getWeatherIcon,
  getWeatherDescription,
} from "../services/weatherIcons";

export default function WeatherDayCard({ day }) {
  return (
    <div
      className="
        relative
        overflow-hidden

        w-full
        min-h-[200px]

        flex flex-col items-center justify-center

        rounded-[32px]

        border border-slate-500
        dark:border-slate-700

        bg-gradient-to-br
        from-slate-100
        via-slate-200
        to-slate-300

        dark:from-slate-900
        dark:via-slate-900
        dark:to-black

        backdrop-blur-xl

        shadow-xl
        shadow-slate-300/60
        dark:shadow-black/40

        hover:scale-[1.02]
        hover:-translate-y-2

        hover:shadow-2xl
        hover:shadow-slate-400/40
        dark:hover:shadow-black/60

        transition-all
        duration-500

        p-5
      "
    >
      {/* Luz superior */}
      <div
        className="
          absolute
          -top-28
          left-1/2
          -translate-x-1/2

          w-80
          h-80

          rounded-full

          bg-white/40
          dark:bg-slate-500/10

          blur-[90px]
        "
      />

      {/* Luz inferior */}
      <div
        className="
          absolute
          -bottom-24
          right-0

          w-60
          h-60

          rounded-full

          bg-slate-400/20
          dark:bg-slate-700/20

          blur-[90px]
        "
      />

      {/* Reflejo */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-white/30
          via-transparent
          to-transparent

          dark:from-white/5
        "
      />

      {/* Fecha */}
      <p
        className="
          relative
          text-1xl
          font-semibold
          uppercase
          tracking-wider

          text-slate-700
          dark:text-slate-200
        "
      >
        {new Date(day.date).toLocaleDateString("es-ES", {
          weekday: "long",
          day: "numeric",
          month: "long",
        })}
      </p>

      {/* Línea */}
      <div
        className="
          relative

          w-20
          h-1

          rounded-full

          bg-gradient-to-r

          from-slate-400
          via-slate-500
          to-slate-600

          dark:from-slate-500
          dark:via-slate-300
          dark:to-slate-500

          my-3
        "
      />

      {/* Icono */}
      <div className="relative my-6">
        <div
          className="
            w-1 h-1
            fill-none
            stroke-[#1c3e60]
            stroke-[1]
            [stroke-dasharray:50]
            [stroke-dashoffset:200]
            transition-all
            duration-[2000ms]
            hover:[stroke-dasharray:200]
            hover:[stroke-dashoffset:0]
          "
        />

        <div
          className="
            relative

            text-slate-700
            dark:text-slate-100

            drop-shadow-[0_0_25px_rgba(100,116,139,.45)]
          "
        >
          {getWeatherIcon(day.weathercode, 160)}
        </div>
      </div>

      {/* Temperaturas */}
      <div className="relative flex items-end gap-5 mt-3">
        <span className="text-3xl text-slate-500 dark:text-slate-400">
          {Math.round(day.min)}°
        </span>

        <span
          className="
            text-7xl
            font-black

            bg-gradient-to-b

            from-slate-900
            to-slate-600

            dark:from-white
            dark:to-slate-300

            bg-clip-text
            text-transparent
          "
        >
          {Math.round(day.max)}°
        </span>
      </div>

      {/* Descripción */}
      <p
        className="
          relative

          mt-7

          text-lg

          text-center

          text-slate-600
          dark:text-slate-400

          leading-relaxed

          max-w-xs
        "
      >
        {getWeatherDescription(day.weathercode)}
      </p>

      {/* Línea inferior */}
      <div
        className="
          absolute
          bottom-0
          left-0

          h-[3px]
          w-full

          bg-gradient-to-r

          from-transparent
          via-slate-500
          to-transparent

          dark:via-slate-300
        "
      />
    </div>
  );
}
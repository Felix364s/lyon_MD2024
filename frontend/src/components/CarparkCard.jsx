import { FaParking, FaMapMarkerAlt, FaStar, FaRegStar, FaCar } from "react-icons/fa";

function getStatus(spaces) {
  if (spaces > 100) return { color: "bg-emerald-500", bar: "bg-emerald-500", badge: "bg-emerald-100 text-emerald-700", label: "Available" };
  if (spaces > 40)  return { color: "bg-yellow-400",  bar: "bg-yellow-400",  badge: "bg-yellow-100 text-yellow-700",  label: "Limited" };
  return              { color: "bg-red-500",    bar: "bg-red-500",    badge: "bg-red-100 text-red-600",      label: "Almost full" };
}

export default function CarparkCard({
  name,
  spaces,
  total = 200,
  distance,
  favorite = false,
  onToggleFavorite,
}) {
  const { color, bar, badge, label } = getStatus(spaces);
  const fillPct = Math.min(Math.round((spaces / total) * 100), 100);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gray-300 dark:bg-neutral-900 shadow-lg border border-slate-200 dark:border-neutral-700 p-5 transition hover:shadow-xl">

      {/* Glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />

      <div className="flex justify-between items-start gap-3">

        <div className="flex gap-4 flex-1 min-w-0">

          {/* Ícono dinámico */}
          <div className={`w-12 h-12 min-w-12 rounded-2xl ${color} flex items-center justify-center shadow-md`}>
            <FaParking className="text-white text-lg" />
          </div>

          <div className="flex-1 min-w-0">

            {/* Nombre + badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                {name}
              </h2>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge}`}>
                {label}
              </span>
            </div>

            {/* Spaces + distancia */}
            <div className="flex items-center gap-4 mt-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <FaCar className="text-xs" />
                {spaces} spaces available
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                <FaMapMarkerAlt className="text-xs" />
                {distance}
              </p>
            </div>

            {/* Barra de disponibilidad */}
            <div className="mt-3 h-1.5 rounded-full bg-slate-100 dark:bg-neutral-700 overflow-hidden">
              <div
                className={`h-full rounded-full ${bar} transition-all duration-500`}
                style={{ width: `${fillPct}%` }}
              />
            </div>

          </div>

        </div>

        

      </div>

    </div>
  );
}
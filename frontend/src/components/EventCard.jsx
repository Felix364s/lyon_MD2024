import {
  FaCalendarDay,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function EventCard({
  title,
  date,
  time,
  location,
  image,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gray-300 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition">

      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-orange-300/20 blur-3xl pointer-events-none" />

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {title}
        </h2>

        <div className="flex items-center gap-2 mt-4 text-slate-500">
          <FaCalendarDay />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <FaClock />
          <span>{time}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>

      </div>

    </div>
  );
}
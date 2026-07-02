import { FaCalendarAlt } from "react-icons/fa";

export default function EventsHeader() {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
          <FaCalendarAlt className="text-white text-xl" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            Events
          </h1>

          <p className="text-slate-500 dark:text-slate-400">
            Upcoming competitions and activities
          </p>
        </div>

      </div>

    </div>
  );
}
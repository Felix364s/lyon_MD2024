import { NavLink } from "react-router-dom";
import {
  FaParking,
  FaCalendarAlt,
  FaCloudSun,
  FaCog,
} from "react-icons/fa";

export default function BottomNav() {
  const base =
    "flex flex-col items-center justify-center gap-1 pt-5 pb-3 flex-1 transition-all duration-300";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50  dark:bg-black text-black dark:text-white bg-white">
      <div className="flex max-w-[1200px] mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "text-emerald-600 border-t-4 border-emerald-500"
                : "text-gray-500"
            }`
          }
        >
          <FaParking size={20} />
          <span className="text-sm">Carparks</span>
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "text-emerald-500 border-t-4 border-emerald-500"
                : "text-gray-500"
            }`
          }
        >
          <FaCalendarAlt size={20} />
          <span className="text-sm">Events</span>
        </NavLink>

        <NavLink
          to="/weather"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "text-emerald-500 border-t-4 border-emerald-500"
                : "text-gray-500"
            }`
          }
        >
          <FaCloudSun size={20} />
          <span className="text-sm">Weather</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${base} ${
              isActive
                ? "text-emerald-500 border-t-4 border-emerald-500"
                : "text-gray-500"
            }`
          }
        >
          <FaCog size={20} />
          <span className="text-sm">Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}
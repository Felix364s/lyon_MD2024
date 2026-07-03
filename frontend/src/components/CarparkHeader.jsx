import { FaParking } from "react-icons/fa";
import SortDropdown from "./SortDropdown";

export default function CarparkHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
            <FaParking className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
              Car Parks
            </h1>

            <p className=" text-xs text-slate-500 dark:text-slate-400">
              Near your location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
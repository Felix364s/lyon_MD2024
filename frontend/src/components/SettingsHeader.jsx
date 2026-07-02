import { FaCog } from "react-icons/fa";

export default function SettingsHeader() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg">
        <FaCog className="text-white text-xl" />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Settings
        </h1>

        <p className="text-slate-500 dark:text-slate-400">
          Customize your application preferences
        </p>
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative inline-flex items-center gap-2.5
        px-3 py-1.5 rounded-full
        border border-neutral-300 dark:border-neutral-600
        bg-white dark:bg-neutral-800
        text-neutral-700 dark:text-neutral-200
        text-sm font-medium
        shadow-sm
        hover:bg-neutral-100 dark:hover:bg-neutral-700
        active:scale-95
        transition-all duration-200 ease-in-out
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 focus-visible:ring-neutral-400
        cursor-pointer select-none
      "
    >
      {/* Track */}
      <span
        className="
          relative w-9 h-5 rounded-full
          bg-neutral-200 dark:bg-neutral-600
          transition-colors duration-300
        "
        aria-hidden="true"
      >
        {/* Thumb */}
        <span
          className={`
            absolute top-0.5 left-0.5
            w-4 h-4 rounded-full
            bg-white dark:bg-neutral-200
            shadow
            transition-transform duration-300 ease-in-out
            flex items-center justify-center
            ${dark ? "translate-x-4" : "translate-x-0"}
          `}
        >
          {/* Sun rays / moon icon inside thumb */}
          <span className="text-[9px] leading-none">
            {dark ? "🌙" : "☀️"}
          </span>
        </span>
      </span>

      {/* Label */}
      <span className="w-10 text-left tabular-nums">
        {dark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
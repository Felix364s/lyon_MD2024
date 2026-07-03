import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowUpAZ, MapPin } from "lucide-react";

const OPTIONS = [
  {
    value: "alphabet",
    label: "Alphabet",
    icon: ArrowUpAZ,
    description: "A → Z",
  },
  {
    value: "distance",
    label: "Distance",
    icon: MapPin,
    description: "Nearest first",
  },
];

export default function SortDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const selected = OPTIONS.find((o) => o.value === value) || OPTIONS[0];

  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }

    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  useEffect(() => {
    function handle(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, []);

  function select(option) {
    onChange(option.value);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="
          flex items-center gap-2
          px-2 py-1 rounded-lg
          border border-neutral-300 dark:border-neutral-600
          bg-white dark:bg-neutral-800
          text-sm font-medium text-neutral-700 dark:text-neutral-200
          shadow-sm
          hover:bg-neutral-50 dark:hover:bg-neutral-700
          transition-all duration-150
          cursor-pointer
        "
      >
        <selected.icon size={15} />

        <span>
          Sort:{" "}
          <span className="text-neutral-900 dark:text-white">
            {selected.label}
          </span>
        </span>

        <ChevronDown
          size={14}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          className="
            absolute right-0 mt-2 w-48
            bg-white dark:bg-neutral-800
            border border-neutral-200 dark:border-neutral-700
            rounded-lg shadow-lg overflow-hidden
            z-50
          "
        >
          {OPTIONS.map((option) => {
            const Icon = option.icon;
            const active = option.value === selected.value;

            return (
              <li
                key={option.value}
                onClick={() => select(option)}
                className={`
                  flex items-center gap-3
                  px-2 py-1 cursor-pointer
                  ${
                    active
                      ? "bg-neutral-100 dark:bg-neutral-700"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-750"
                  }
                `}
              >
                <Icon size={15} />

                <span className="flex-1">{option.label}</span>

                <span className="text-xs text-neutral-400">
                  {option.description}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
import PageTransition from "../components/PageTransition";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import SortDropdown from "../components/SortDropdown";
import SettingsHeader from "../components/SettingsHeader";

export default function Settings() {

  return (

    <PageTransition>
      <div className="max-w-5xl mx-auto p-8">

        <SettingsHeader />

        <div className="space-y-8">

          {/* Theme */}
          <div className="rounded-3xl bg-gray-200 dark:bg-neutral-900 border border-slate-500 dark:border-neutral-700 shadow-lg p-6">

            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              Appearance
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-2 mb-5">
              Choose between light mode and dark mode.
            </p>

            <ThemeToggle />

          </div>

          {/* Sorting */}
          <div className="rounded-3xl bg-gray-200 dark:bg-neutral-900 border border-slate-500 dark:border-neutral-700 shadow-lg p-6">

            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
              Car Park Sorting
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-2 mb-5">
              Sort car parks alphabetically or by distance from your current location.
            </p>

            <SortDropdown />

          </div>

        </div>

      </div>
    </PageTransition>
  );
}
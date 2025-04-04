import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { MdCheck } from "react-icons/md";

export default function ThemeSwitcher({ closeModal }) {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "system" : "system"
  );

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === "system" && prefersDark);
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themes = [
    { name: "Frappe Light", value: "light", icon: <FiSun className="h-6 w-6" />, image: "/images/LightTheme.png" },
    { name: "Timeless Night", value: "dark", icon: <FiMoon className="h-6 w-6" />, image: "/images/DarkTheme.png" },
    { name: "Automatic", value: "system", icon: <FiMonitor className="h-6 w-6" />, image: "/images/AutomaticTheme.png" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30">
      <div className="bg-white dark:bg-gray-900 mt-6 p-4 md:p-6 rounded-xl shadow-lg w-full max-w-2xl relative">
        <button
          className="absolute right-6 text-xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 cursor-pointer"
          onClick={closeModal}
        >
          ✖
        </button>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Switch Theme</h3>
        <hr className="mb-4" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {themes.map((t) => (
            <div key={t.value} className="flex flex-col items-center">
              <button
                onClick={() => setTheme(t.value)}
                className={`relative w-full p-2 rounded-xl border transition-colors cursor-pointer ${
                  theme === t.value
                    ? "border-2 border-gray-400 bg-blue-100 dark:bg-gray-700"
                    : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <div className="w-full rounded-xl overflow-hidden border border-gray-300 dark:border-gray-600">
                  <img src={t.image} alt={t.name} className="w-full h-auto object-contain" />
                </div>

                {theme === t.value && (
                  <div className="absolute bottom-2 right-2 bg-black text-white rounded-full p-1 text-xs">
                    <MdCheck className="w-4 h-4" />
                  </div>
                )}
              </button>

              <div className="mt-3">{t.icon}</div>
              <span className="text-md font-medium text-gray-700 dark:text-gray-300">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/users": "Users",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <header
      className={`flex h-[72px] items-center justify-between border-b px-4 sm:px-6 ${
        darkMode
          ? "border-gray-700 bg-gray-900 text-white"
          : "border-gray-200 bg-white text-gray-900"
      }`}
    >
      <h2 className="text-xl font-bold sm:text-2xl">
        {pageTitle}
      </h2>

      <button
        onClick={toggleTheme}
        className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-4 sm:text-base"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

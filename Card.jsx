
import { useTheme } from "../context/ThemeContext";

export default function Card({ title, value }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-xl p-6 shadow-md transition-colors ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <p
        className={`m-0 ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {title}
      </p>

      <h2 className="mb-0 mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}

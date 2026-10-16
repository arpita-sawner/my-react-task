
import Card from "../components/Card";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { darkMode } = useTheme();

  const stats = [
    { title: "Total Users", value: "1,250" },
    { title: "Orders Today", value: "78" },
    { title: "Revenue", value: "$8,900" },
    { title: "Pending Reports", value: "14" },
  ];

  const weeklyActivity = [
    { day: "Mon", height: "45%" },
    { day: "Tue", height: "70%" },
    { day: "Wed", height: "55%" },
    { day: "Thu", height: "90%" },
    { day: "Fri", height: "65%" },
    { day: "Sat", height: "80%" },
    { day: "Sun", height: "40%" },
  ];

  return (
    <div className="p-2 sm:p-4">
      <h1 className="text-2xl font-bold sm:text-3xl">
        Analytics Overview
      </h1>

      <p
        className={`mt-2 ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Welcome to your Admin Dashboard!
      </p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <section
        className={`mt-8 rounded-xl p-5 shadow-md sm:p-6 ${
          darkMode
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <h2 className="text-xl font-bold sm:text-2xl">
          Weekly Activity
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          User activity this week
        </p>

        <div className="mt-6 flex h-48 items-end justify-around gap-2 sm:gap-4">
          {weeklyActivity.map((item) => (
            <div
              key={item.day}
              className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
            >
              <div
                className="w-full max-w-[42px] rounded-t-md bg-blue-500"
                style={{ height: item.height }}
              />

              <span className="text-xs sm:text-sm">
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

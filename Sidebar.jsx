
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Sidebar({ onNavigate }) {
  const { darkMode } = useTheme();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside
      className={`min-h-screen w-[220px] shrink-0 p-6 text-white ${
        darkMode ? "bg-gray-950" : "bg-gray-900"
      }`}
    >
      <h2 className="mb-8 text-2xl font-bold">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onNavigate}
            className={({ isActive }) =>
              `rounded-lg px-3 py-3 text-lg no-underline transition-colors hover:bg-blue-600 ${
                isActive
                  ? "bg-blue-600 font-semibold"
                  : "text-gray-200"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

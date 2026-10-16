
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function DashboardLayout() {
  const { darkMode } = useTheme();

  const [mobile, setMobile] = useState(
    window.innerWidth <= 600
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth <= 600;

      setMobile(isMobile);

      if (!isMobile) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: darkMode ? "#030712" : "#f3f4f6",
        color: darkMode ? "white" : "#111827",
        position: "relative",
      }}
    >
      {(!mobile || menuOpen) && (
        <div
          style={{
            position: mobile ? "absolute" : "relative",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </div>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {mobile && (
          <button
            onClick={() => setMenuOpen((open) => !open)}
            style={{
              margin: "10px",
              padding: "10px 16px",
              cursor: "pointer",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#2563eb",
              color: "white",
            }}
          >
            {menuOpen ? "✕ Close Menu" : "☰ Menu"}
          </button>
        )}

        <Navbar />

        <main style={{ padding: "24px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <DashboardLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

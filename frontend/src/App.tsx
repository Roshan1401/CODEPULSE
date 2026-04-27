import "./App.css";
import { useEffect, useState } from "react";
import Leftbar from "./components/layout/Leftbar";
import Rightbar from "./components/layout/Rightbar/Rightbar";
import { Outlet } from "react-router-dom";
import useUserStore from "./store/useUserStore";
import "./bones/registry";

function App() {
  const [theme, setTheme] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const initialize = useUserStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  function toggleTheme() {
    setTheme((prev) => !prev);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <div
      className={`min-h-screen w-full bg-(--color-bg-primary) ${theme ? "dark" : ""}`}
    >
      <div className="flex min-h-screen w-full">
        <div className="sticky top-0 z-10 h-screen shrink-0 overflow-hidden">
          <Leftbar onThemeToggle={toggleTheme} isDarkTheme={theme} />
        </div>

        <div className="min-w-0 flex-1">
          <Outlet />
        </div>

        <div className="sticky top-0 hidden h-screen shrink-0 overflow-y-auto lg:block [&::-webkit-scrollbar]:w-2">
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default App;

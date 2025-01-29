import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="bg-light-panel dark:bg-dark-playlist text-light-primary dark:text-dark-primary mr-4 mt-2 rounded-md text-sm font-bold"
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;

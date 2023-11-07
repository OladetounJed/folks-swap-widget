import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const [theme, setTheme] = useState("light");

  const setThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return { theme, setThemeSwitch };
}

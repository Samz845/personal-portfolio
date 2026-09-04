import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "theme",
  );

  const toggleDarkMode = () => {
    setIsDarkMode((d) => !d);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(DarkmodeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkmodeProvider");
  }
  return context;
};

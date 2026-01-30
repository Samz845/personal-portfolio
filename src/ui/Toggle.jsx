import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../context/DarkmodeProvider";

function Toggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between gap-3  mt-50 md:mt-0 md:bg-transparent md:dark:bg-transparent bg-gray-200 dark:bg-gray-800 p-2 w-full rounded-lg">
      <span className="text-xl text-gray-700 dark:text-white">
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </span>

      <button
        type="button"
        onClick={() => toggleDarkMode()}
        className={`relative cursor-pointer w-12 h-6 rounded-full transition-colors
          ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}
        `}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full
            transition-transform duration-300
            ${isDarkMode ? "translate-x-6" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}

export default Toggle;

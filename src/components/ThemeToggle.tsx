import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="ml-auto px-4 py-2 rounded bg-gray-300 dark:bg-gray-700"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className={styles.iconWrapper}>
        {theme === "light" ? (
          <Moon size={20} className={styles.icon} />
        ) : (
          <Sun size={20} className={styles.icon} />
        )}
      </div>
    </button>
  );
};

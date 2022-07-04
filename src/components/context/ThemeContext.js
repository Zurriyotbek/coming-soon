import { createContext, useState } from "react";

const ThemeContext = createContext();

let theme;

export function ThemeProvider({ children }) {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    // Theme set to dark.
    theme = "dark";
    // theme = "light";
  } else {
    // Theme set to light.
    theme = "light";
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;

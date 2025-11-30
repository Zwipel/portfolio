import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { DisplayTheme } from "../types/displaymode";

type ThemeContextType = {
  mode: DisplayTheme;
  toggleTheme: () => void;
  setMode: (m: DisplayTheme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "dark",
  toggleTheme: () => {},
  setMode: () => {},
});

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<DisplayTheme>("dark");
  const toggleTheme = () => setMode((m) => (m === "light" ? "dark" : "light"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "dark" ? "#121212" : "#fafafa",
            paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "background-color 600ms linear, color 600ms linear",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);
import React from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./function/Language";
import { CustomThemeProvider } from "./function/Theme";
import { App } from "./App";
import "./styles.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </CustomThemeProvider>
  </React.StrictMode>
);

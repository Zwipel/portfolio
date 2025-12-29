import { useState } from "react";
import Footer from "./components/Footer";
import { Contact } from "./pages/Contact";
import { Experiences } from "./pages/Experiences";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Navbar } from "./components/Navbar";
import { useLanguage } from "./function/Language";
import { useThemeMode } from "./function/Theme";
import { LanguageType } from "./types/languageTypes";
import { Box } from "@mui/material";

type Tab = "home" | "projects" | "experiences" | "contact";

export const App = () => {
  const [tab, setTab] = useState<Tab>("home");
  const { t } = useLanguage();
  const [language, setLanguage] = useState<LanguageType>("de");
  const { mode, toggleTheme } = useThemeMode();

  const renderTab = () => {
    switch (tab) {
      case "projects":
        return <Projects />;
      case "experiences":
        return <Experiences />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <Box sx={{ padding: { xs: 1, sm: 2, md: 3 }, fontFamily: "system-ui, sans-serif" }}>
      <Navbar
        onToggleThemeAction={toggleTheme}
        mode={mode ?? "dark"}
        language={language}
        onToggleLanguageAction={() =>
          setLanguage(language === "en" ? "de" : "en")
        }
        t={t}
        onNavigate={(s: Tab) => setTab(s)}
        active={tab}
      />
      <Box component="main" sx={{ marginTop: 2 }}>{renderTab()}</Box>
      <Box sx={{ marginTop: 1 }}>
        <Footer />
      </Box>
    </Box>
  );
};

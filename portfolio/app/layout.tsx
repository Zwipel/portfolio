// app/layout.tsx
"use client";

import React, { useMemo, useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, createTheme, Container, CircularProgress, Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { displayThemeEnum } from "./model/enums/displaymodeEnum";
import { DisplayTheme } from "./model/types/displaymode";
import { languageEnum, translations } from "./model/enums/languageEnum";
import { LanguageType } from "./model/types/language";
import { LanguageContext } from "./model/contexts/LanguageContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<DisplayTheme>(displayThemeEnum.light);
    const [language, setLanguage] = useState<LanguageType>(languageEnum.de);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme-mode") as DisplayTheme | null;
        const savedLang = localStorage.getItem("lang") as LanguageType | null;

        // Theme
        if (savedTheme && (savedTheme === displayThemeEnum.light || savedTheme === displayThemeEnum.dark)) {
            setMode(savedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setMode(prefersDark ? displayThemeEnum.dark : displayThemeEnum.light);
        }

        // Language
        if (savedLang && (savedLang === languageEnum.en || savedLang === languageEnum.de)) {
            setLanguage(savedLang);
        }

        setLoading(false); // done loading
    }, []);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === displayThemeEnum.light
                        ? { primary: { main: "#1976d2" } }
                        : { primary: { main: "#90caf9" } }),
                },
            }),
        [mode]
    );

    const toggleMode = () => {
        const newMode =
            mode === displayThemeEnum.light ? displayThemeEnum.dark : displayThemeEnum.light;
        setMode(newMode);
        localStorage.setItem("theme-mode", newMode);
    };

    const toggleLanguage = () => {
        const newLang = language === languageEnum.en ? languageEnum.de : languageEnum.en;
        setLanguage(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <html lang={language}>
            <body
                style={{
                    backgroundColor: loading ? "#6f6f6f" : undefined,
                    overflow: loading ? "hidden" : undefined,
                }}
            >
                {loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                            width: "100%",
                        }}
                    >
                        <CircularProgress size={100} />
                    </Box>
                ) : (
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <LanguageContext.Provider value={{ t: translations[language] }}>
                            <Navbar
                                onToggleThemeAction={toggleMode}
                                mode={mode}
                                language={language}
                                onToggleLanguageAction={toggleLanguage}
                                t={translations[language]}
                            />
                            <Container sx={{ mt: 4, mb: 6 }}>
                                {React.isValidElement(children) &&
                                    React.cloneElement(children as React.ReactElement<{ t: typeof translations["en"] }>, {
                                        t: translations[language],
                                    })}
                            </Container>

                            <Footer /></LanguageContext.Provider>
                    </ThemeProvider>
                )}
            </body>
        </html>
    );
}

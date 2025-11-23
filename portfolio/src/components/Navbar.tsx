import React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { languageEnum } from "../enums/languageEnum";
import { LanguageType } from "../types/languageTypes";
import { DisplayTheme } from "../types/displaymode";
import { useLanguage } from "../function/Language"; // exact path + casing

type Tab = "home" | "projects" | "experiences" | "contact";

type NavbarProps = {
  onToggleThemeAction: () => void;
  mode: DisplayTheme;
  language: LanguageType;
  onToggleLanguageAction: () => void;
  t: Record<string, string>;
  onNavigate: (tab: Tab) => void; // use this instead of react-router
  active?: Tab;
};

export const Navbar = ({
  onToggleThemeAction: onToggleTheme,
  mode,
  language,
  onToggleLanguageAction: onToggleLanguage,
  t,
  onNavigate,
  active = "home",
}: NavbarProps) => {
  const { toggleLanguage } = useLanguage();
  const handleLanguageToggle = () => {
    toggleLanguage();
    onToggleLanguage();
  }

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          onClick={() => onNavigate("home")}
          sx={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
        >
          {t.portfolio}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            color="inherit"
            onClick={() => onNavigate("home")}
            aria-pressed={active === "home"}
          >
            {t.home}
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate("experiences")}
            aria-pressed={active === "experiences"}
          >
            {t.experiences}
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate("contact")}
            aria-pressed={active === "contact"}
          >
            {t.contact}
          </Button>
          <Button
            color="inherit"
            onClick={() => onNavigate("projects")}
            aria-pressed={active === "projects"}
          >
            {t.projects}
          </Button>

          <IconButton color="inherit" onClick={onToggleTheme}>
            {mode === "dark" ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <Button color="inherit" onClick={handleLanguageToggle}>
            {language === languageEnum.de ? "DE" : "EN"}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

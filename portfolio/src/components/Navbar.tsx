import React, { useState } from "react";
import { Brightness4, Brightness7, Menu } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLanguageToggle = () => {
    toggleLanguage();
    onToggleLanguage();
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (tab: Tab) => {
    onNavigate(tab);
    setDrawerOpen(false);
  };

  const navItems = [
    { key: "home", label: t.home },
    { key: "experiences", label: t.experiences },
    { key: "contact", label: t.contact },
  //  { key: "projects", label: t.projects }, Needs work to be published, so hide for now
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            onClick={() => onNavigate("home")}
            sx={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}
          >
            {t.portfolio}
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <Menu />
              </IconButton>
            </>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              {navItems.map((item) => (
                <Button
                  key={item.key}
                  color="inherit"
                  onClick={() => onNavigate(item.key as Tab)}
                  aria-pressed={active === item.key}
                >
                  {item.label}
                </Button>
              ))}

              <IconButton color="inherit" onClick={onToggleTheme}>
                {mode === "dark" ? <Brightness4 /> : <Brightness7 />}
              </IconButton>

              <Button color="inherit" onClick={handleLanguageToggle}>
                {language === languageEnum.de ? "DE" : "EN"}
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.key} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.key as Tab)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={onToggleTheme}>
              <ListItemText primary={mode === "dark" ? "Light Mode" : "Dark Mode"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLanguageToggle}>
              <ListItemText primary={language === languageEnum.de ? "English" : "Deutsch"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

// components/Navbar.tsx
"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { displayThemeEnum } from "../model/enums/displaymodeEnum";
import { DisplayTheme } from "../model/types/displaymode";
import { languageEnum } from "../model/enums/languageEnum";
import { LanguageType } from "../model/types/language";
import { DE, GB } from "country-flag-icons/react/3x2";

type NavbarProps = {
  onToggleThemeAction: () => void;
  mode: DisplayTheme;
  language: LanguageType;
  onToggleLanguageAction: () => void;
  t: Record<string, string>;
};

export default function Navbar({
  onToggleThemeAction: onToggleTheme,
  mode,
  language,
  onToggleLanguageAction: onToggleLanguage,
  t,
}: NavbarProps) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          {t.portfolio}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button color="inherit" component={Link} href="/">
            {t.home}
          </Button>
          <Button color="inherit" component={Link} href="/experiences">
            {t.experiences}
          </Button>
          <Button color="inherit" component={Link} href="/contact">
            {t.contact}
          </Button>
          <Button color="inherit" component={Link} href="/projects">
            {t.projects}
          </Button>
          <IconButton color="inherit" onClick={onToggleTheme}>
            {mode === displayThemeEnum.dark ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
          <Button onClick={onToggleLanguage}>
            {language === languageEnum.de ? <DE /> : <GB />}
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

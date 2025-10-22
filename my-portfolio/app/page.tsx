// app/page.tsx
"use client";
import { Box, Paper, Stack, Avatar, Typography, Chip } from "@mui/material";
import { useLanguage } from "./model/contexts/LanguageContext";
import { CustomChip } from "./components/Chip";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 4 }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar sx={{ width: 200, height: 200, fontSize: 50 }}>DB</Avatar>
          <Box>
            <Typography variant="h3">Dennis Butenko</Typography>
            <Typography variant="h6" color="text.secondary">
              {t.welcome}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <CustomChip label="React" />
              <CustomChip label="JavaScript" />
              <CustomChip label="TypeScript" />
              <CustomChip label="C#" />
              <CustomChip label="SQL" />
              <CustomChip label="Microsoft D365" />
              <CustomChip label="Material UI" />
              <CustomChip label="Fluent UI" />
            </Stack>
          </Box>
        </Stack>

        <Typography sx={{ mt: 3, fontSize: 18 }} variant="body1">
          {t.summary}
        </Typography>
      </Paper>
    </Box>
  );
}

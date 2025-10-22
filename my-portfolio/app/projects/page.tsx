// app/projects/page.tsx
"use client";

import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useLanguage } from "../model/contexts/LanguageContext";
import { Box, Stack } from "@mui/system";
import { MultiChip } from "../components/MultilineChip";
import { RocketLaunch } from "@mui/icons-material";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <Grid container spacing={5}>
      <Grid size={3}>
        <Box>
          <Stack
            sx={{
              body: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <Card>
              <CardContent>
                <MultiChip
                  icon={<RocketLaunch />}
                  label="Bingo Projekt"
                  clickable
                  onClick={() => console.log("Hier könnte Code stehen")}
                /> 
                <div style={{display: "block", height: 20}} />
                <CardMedia
                  component="img"
                  height="194"
                  image="/img.png"
                  alt="IT Bedrohung"
                />
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Grid>
      <Grid size={3}>
        <Box> </Box>
      </Grid>
      <Grid size={3}>
        <Box> </Box>
      </Grid>
      <Grid size={3}>
        <Box> </Box>
      </Grid>
      <Grid size={3}>
        <Box> </Box>
      </Grid>
    </Grid>
  );
}

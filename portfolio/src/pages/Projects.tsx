import { RocketLaunch } from "@mui/icons-material";
import { Grid, Box, Stack, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { MultiChip } from "../components/MultilineChip";
import { useLanguage } from "../function/Language";

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
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
                <div style={{ display: "block", height: 20 }} />
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
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box> </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box> </Box>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Box> </Box>
      </Grid>
      <Grid size={3}>
        <Box> </Box>
      </Grid>
    </Grid>
  );
};
